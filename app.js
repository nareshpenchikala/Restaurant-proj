# Backend: app.py (Flask)
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/print", methods=["POST"])
def print_bill():
    data = request.get_json()
    order = data["order"]
    total = data["total"]

    # Code to print the bill using the order and total information

    return jsonify(success=True)

if __name__ == "__main__":
    app.run(debug=True)
