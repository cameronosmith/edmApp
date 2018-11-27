from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
#allows for cross origin requests
CORS(app)
#the accepted methods for each route
accepted_methods = ["GET", "POST"]
#the accepted return response
return_response = "success"

#the path to the sample data
sample_data_path = "datasets/sampleDataSet.csv"
#the parameters object being used by the program (starts with default)
params_obj = {"E":"3", "tau": "1", "num_neighbors":"1","tp":"1","lib":"1",\
        "pred":"1","exclusion_radius":"1"}

#the datafile used for this program
datafilePath = sample_data_path

#route to receive the datafile we will be using
@app.route('/importDataFile', methods=accepted_methods)
def receieveDataFile():
    datafilePath = request.get_json().get("datafile")
    return return_response 

#route to update the program parameters
@app.route('/updateParameters', methods=accepted_methods)
def updateParameters():
    params_obj = request.get_json().get("parameters")
    return return_response 

#route to request the parameters
@app.route('/requestParameters', methods=accepted_methods)
def requestParameters():
    return jsonify({"parameters": params_obj})

#route to request the optimal embedding graphs
@app.route('/getOptimalEmbedding', methods=accepted_methods)
def sendOptimalEmbedding():
    return jsonify({"status":"ok"})
