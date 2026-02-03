from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # This should be the page for the consent form to
    # begin the app
    return render_template('18.html')

@app.route('/nine')
def nine():
    return render_template('9.html')

@app.route('/ten')
def ten():
    return render_template('10.html')

@app.route('/eleven_a')
def eleven_a():
    return render_template('11a.html')

@app.route('/eleven_b')
def eleven_b():
    return render_template('11b.html')

@app.route('/eleven_c')
def eleven_c():
    return render_template('11c.html')

@app.route('/twelve')
def twelve():
    return render_template('12.html')

@app.route('/thirteen')
def thirteen():
    return render_template('13.html')

@app.route('/thirteen_left_right')
def thirteen_left_right():
    return render_template('13-lr.html')

@app.route('/thirteen_left_with_janitor')
def thirteen_left_with_janitor():
    return render_template('13-l-with-janitor.html')

@app.route('/thirteen_right')
def thirteen_right():
    return render_template('13-r.html')

@app.route('/fourteen')
def fourteen():
    return render_template('14.html')

@app.route('/fourteen_right')
def fourteen_right():
    return render_template('14-r.html')

@app.route('/fourteen_with_janitor')
def fourteen_with_janitor():
    return render_template('14-with-janitor.html')

@app.route('/fifteen')
def fifteen():
    return render_template('15.html')

@app.route('/fifteen_left')
def fifteen_left():
    return render_template('15-l.html')

@app.route('/fifteen_right')
def fifteen_right():
    return render_template('15-r.html')

@app.route('/sixteen')
def sixteen():
    return render_template('16.html')

@app.route('/seventeen')
def seventeen():
    return render_template('17.html')

@app.route('/eighteen')
def eighteen():
    return render_template('18.html')

if __name__ == '__main__':
    app.run(debug=True)