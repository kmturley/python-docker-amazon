import os
from flask import Flask, render_template, send_from_directory

static_dir = os.path.abspath('backend/static')
template_dir = os.path.abspath('backend/templates')
app = Flask(__name__, static_folder=static_dir, template_folder=template_dir)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8080)