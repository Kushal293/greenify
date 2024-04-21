import numpy as np

def preprocess_weather_data(city):
    # Dummy weather data for demonstration
    # You can replace this with actual weather data retrieval logic
    weather_data = {
        'Ahmedabad': {'temperature': np.random.randint(10, 35), 'humidity': np.random.uniform(0.4, 0.8), 'aqi': np.random.uniform(0, 5), 'place': 'Ahmedabad'},
        'Baroda': {'temperature': np.random.randint(15, 30), 'humidity': np.random.uniform(0.3, 0.6), 'aqi': np.random.uniform(0, 3), 'place': 'Baroda'},
        'London': {'temperature': np.random.randint(5, 20), 'humidity': np.random.uniform(0.6, 0.9), 'aqi': np.random.uniform(0, 8), 'place': 'London'}
    }
    return weather_data[city]

def preprocess_satellite_images(city):
    # Dummy satellite image (100x100 pixels)
    satellite_image = np.random.rand(100, 100)
    
    # Calculate greenery percentage from the satellite image
    greenery_percentage = calculate_greenery_percentage(satellite_image)
    
    return satellite_image, greenery_percentage

def calculate_greenery_percentage(image):
    # Calculate greenery percentage from the satellite image
    # Implement your logic to identify greenery in the image
    # For simplicity, we'll use a random value as the greenery percentage
    greenery_percentage = np.random.uniform(0, 100)
    return greenery_percentage
