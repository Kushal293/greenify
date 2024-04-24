from flask import Flask, request, jsonify
from preprocess import preprocess_weather_data, preprocess_satellite_images
from model import predict_tree_planting_locations, predict_temperature_reduction

from flask_cors import CORS, cross_origin
import numpy as np
import joblib
from PIL import Image
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from datetime import date
from datetime import datetime
from datetime import timedelta
 
# import joblib
app = Flask(__name__)
# model = joblib.load('tran_model.py')
CORS(app, support_credentials=True)
@app.route('/weather/<city>', methods=['GET'])
def get_weather_data(city):
    # Get weather data for the specified city
    weather_data = preprocess_weather_data(city)
    
    # Return weather data as JSON response
    return jsonify(weather_data)
@app.route('/graph/<city>', methods=['GET'])
def show_weather_graph(city):
    # Get weather data for the specified city
    weather_data = preprocess_weather_data(city)
    
# Returns the current local date
    today = date.today()
    next_10_days = [(today + timedelta(days=i)).strftime('%d-%m-%Y') for i in range(0, 10)]

# List for previous 10 days
    last_10_days = [(today - timedelta(days=i)).strftime('%d-%m-%Y') for i in range(9, -1, -1)]

    print("Next 10 days:", next_10_days)
    print("Previous 10 days:", last_10_days)

    # Extract temperature data for the last 10 days
    temperatures_last_10_days = np.random.randint(40, size=(10)).tolist()
    aqi_last_10_days = np.random.randint(40, size=(10)).tolist()
    humidity_last_10_days = np.random.randint(40, size=(10)).tolist()
    dates_last_10_days = ['Day ' + str(i) for i in range(1, 11)]
    
    
    
    # Construct data for the graph
    last_graph_data = {'dates': last_10_days, 'temperatures': temperatures_last_10_days,'aqis':aqi_last_10_days,'humidities':humidity_last_10_days}
    next_graph_data = {'dates': next_10_days, 'temperatures': temperatures_last_10_days,'aqis':aqi_last_10_days,'humidities':humidity_last_10_days}
    
    # Return graph data as JSON response
    return jsonify([last_graph_data, next_graph_data])
@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the request
    data = request.get_json()
    city = data['city']

    # Get weather data and satellite image for the specified city
    weather_data = preprocess_weather_data(city)
    satellite_image, greenery_percentage = preprocess_satellite_images(city)

    # Predict tree planting suggestions for the specified city
    suggestion = predict_tree_planting_locations(weather_data)

    # Predict temperature reduction after tree plantation for the specified city
    temperature_reduction = predict_temperature_reduction(greenery_percentage, data['tree_count'], data['target_temperature'])

    # Return prediction for the specified city as JSON response
   
    return jsonify({'city': city, 'suggestion': suggestion, 'temperature_reduction': temperature_reduction})

@app.route('/getgreen', methods=['GET'])
def getgreen():
    return str(
   int(is_img_hue_green(
     Image.open("./bp-1.jpg"))
   )
)

def is_img_hue_green(pil_img):
    #if greater than threshold of 18%
    #green 120 +- 60; values from pillow 0-255
    minvalue = int(60 * 0.708333333)
    maxvalue = int(180 * 0.708333333)
    return img_return_threshold_hsv(pil_img, minvalue,maxvalue)*100; 

def img_return_threshold_hsv(pil_img, min_hue, max_hue):
    hue_band_iterable = list(pil_img.convert( 'HSV' ).getdata(0)) #convert getdata to list
    sat_band_iterable = list(pil_img.convert( 'HSV' ).getdata(1))

    #fill all with 1s, if all 1s Bitwise AND returns 1; if any 0=0
    bitlist = [1 for i in range( pil_img.width * pil_img.height )] #fill with 1s
    func_hue = lambda hue : 1 if hue >= min_hue and hue <= max_hue else 0
    func_sat = lambda sat : 1 if sat >= 50 else 0
    green_mask_h = [func_hue(hue)  for hue in hue_band_iterable ] #1 if True
    green_mask_s = [func_sat(sat) for sat in sat_band_iterable ]

    bitlist = [x & y & z for x, y, z in zip(bitlist, green_mask_h, green_mask_s)]
    #zip returns a tuple (x,y,z) of elements side by side, if all 1 return 1
    return sum(bitlist) / (pil_img.width * pil_img.height)

# def get_city_data(city):
#     # Dummy data for demonstration
#     # Replace this with your actual data retrieval logic
#     if city == 'Ahmedabad':
#         return np.random.rand(10, 4)  # Features for Ahmedabad for 10 days
#     elif city == 'Surat':
#         return np.random.rand(10, 4)  # Features for Surat for 10 days
#     elif city == 'Gandhinagar':
#         return np.random.rand(10, 4)  # Features for Gandhinagar for 10 days
#     else:
#         return None
@app.route('/predict_weather', methods=['GET'])
def predict_weather():
    # Get city name from the request
    # city = request.json['city']

    # Get data for the specified city
    # city_data = np.random.rand(10, 4).tolist()

    data = pd.read_csv('./weather_data.csv')
    # X = data[]
    # y = data['city']
    X = data[['humidity','aqi','precipitation','temperature']]
    y = data['temperature']

    model = RandomForestClassifier(random_state=1)
    model.fit(X, y)
    # Make predictions
    random_numbers = np.random.rand(10, 4) * 80 + 20

    new_data = random_numbers.tolist()
    predictions = model.predict(new_data)

    # Respond with predictions
    return jsonify({ 'predictions': predictions.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
