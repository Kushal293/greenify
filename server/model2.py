import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import math
#Getting data from csv file with pandas library
data = pd.read_csv("Summary of Weather.csv")
x_train =  np.round_(data["MinTemp"].values, decimals=3)
y_train = np.round_(data["MaxTemp"].values, decimals=3)
meantemp = data["MeanTemp"].values


#Function to compute value of cost
def compute_cost(x, y, w, b):
    '''
    n = Total number of traning examples
    w = first parameter
    b = second parameter
    cost = value of cost
    x = features
    y = target variables
    '''
    cost = 0
    n = x.shape[0]
    for i in range(n):   #Addition of squared error of all features
        model = w*x[i] + b
        cost = cost + (model - y[i])**2  #Squared error cost function
    cost = cost/(2*n)
    return cost

def compute_gradient(x, y, w, b):
    '''
    dj_dw = derivative of cost function with respect to w
    dj_db = derivative of cost function with respect to b
    n = total number of training examples
    w = first parameter
    b = second parameter
    x = features
    y = target variable
    '''
    dj_dw = 0
    dj_db = 0
    n = x.shape[0]
    for i in range(n):
        model = w*x[i] + b
        dj_dw += (model - y[i])*x[i]
        dj_db += (model - y[i])
    dj_dw = dj_dw/n
    dj_db = dj_db/n
    return dj_dw, dj_db

def gradient_descent(x, y, alpha, w_ini, b_ini, iters, cost_function, gradient_function):
    '''
    alpha = learning rate
    dj_dw = derivative of cost function with respect to w
    dj_db = derivative of cost function with respect to b
    w_ini = first parameter (initial value)
    b_ini = second parameter (initial value)
    x = features
    y = target variable
    iters = number of iterations
    '''
    cost_history = []
    for i in range(iters):
        dj_dw, dj_db = gradient_function(x,y,w_ini, b_ini)
        w_ini = w_ini - alpha*dj_dw
        b_ini = b_ini - alpha*dj_db
        if i < 1000:
            cost_history.append(cost_function(x, y, w_ini, b_ini))
        if i%math.ceil(iters/100) == 0:
            print(f"Iteration is: {i}, cost: {cost_function(x, y, w_ini, b_ini)}")
        if dj_dw == 0:
            return w_ini, b_ini, cost_history
    return w_ini, b_ini, cost_history

w_ini = 0
b_ini = 0
alpha = 0.0001
iterations = 100000

w, b , csh = gradient_descent(x_train, y_train, alpha, w_ini, b_ini, iterations, compute_cost, compute_gradient)
print(f"Value found by gradient descent w: {w}, b: {b}")

def predict(w, b, x):
    p = np.zeros(x.shape)
    n = x.shape[0]
    for i in range(n):
        p[i] = w*x[i] + b   #Trained model
    return p
prediction = predict(w, b, x_train)


#Plotting

plt.scatter(x_train, y_train,marker='x', s=2,color='blue', label="Actual" )
plt.plot(x_train, prediction, color='red', label="Predicted")

plt.xlabel("Min tempretures(degrees)")
plt.ylabel("Max tempretures(degrees)")
plt.title("Maximum V/S Minimum")
plt.legend()
plt.show()


# Calculation of error

err = abs(prediction-y_train)
for i in range(y_train.shape[0]):
    if y_train[i] == 0:
        continue
    else:
        err[i] = err[i]/y_train[i]

err = ((np.sum(err)*100)/err.shape[0])
# print(f"Error in model is: {round(err,2)}%")
