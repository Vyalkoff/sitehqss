from flask import Flask, render_template,url_for
from markupsafe import escape

app = Flask(__name__)


# @app.route("/<name>")
# def hello_world(name):
#     return f'hello,{escape(name)}</p>'


@app.route("/")
def index():
    return render_template("index.html")


# @app.route("/hello")
# def hello():
#     return 'Hello world'


if __name__ == "__main__":
    app.run(debug=True)
