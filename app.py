from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # This should be the page for the consent form to
    # begin the app
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)