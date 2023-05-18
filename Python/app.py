from flask import Flask
from flask import send_file

app = Flask(__name__)

@app.route("/books")

def books():
    return send_file('books.json')

if __name__ == "__main__":
    app.run()