from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/route")
def members():
    
    return{ "route": 
        {
            "route":
            [
                [42.392611, -72.533832],
                [42.39107576463665, -72.53321883848933],
                [42.38837415353575, -72.53208770671064]
            ],
            "distance":9000,
            "elevation":10
        }
    }

if __name__ == "__main__":
    app.run(debug=True, port=4000)
