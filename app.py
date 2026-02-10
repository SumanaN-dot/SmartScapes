from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # This should be the page for the consent form to
    # begin the app
    return render_template('index.html')

@app.route('/one_back')
def one_back():
    return render_template('1-b.html')

@app.route('/opening_premise')
def opening_premise():
    return render_template('op.html')

@app.route('/two')
def two():
    return render_template('2.html')

@app.route('/three_a')
def three_a():
    return render_template('3-a.html')

@app.route('/three_back')
def three_b():
    return render_template('3-b.html') 
 
@app.route('/three_left')
def three_l():
    return render_template('3-l.html') 

@app.route('/three_right')
def three_r():
    return render_template('3-r.html') 

@app.route('/three')
def three():
    return render_template('3.html') 

@app.route('/four_left_with_janitor')
def four_left_with_janitor():
    return render_template('4-l-with-janitor.html')

@app.route('/four_right')
def four_right():
    return render_template('4-r.html')

@app.route('/four')
def four():
    return render_template('4.html')

@app.route('/five_left')
def five_left():
    return render_template('5-l.html')

@app.route('/five_left_a')
def five_left_a():
    return render_template('5-la.html')

@app.route('/five_right')
def five_right():
    return render_template('5-r.html')

@app.route('/five_right_left')
def five_right_left():
    return render_template('5-rl.html')

@app.route('/five_right_left_a')
def five_right_left_a():
    return render_template('5-rla.html')

@app.route('/five_right_left_b_left_to5_left')
def five_right_left_b_left_to5_left():
    return render_template('5-rlb-l-to5-l.html')

@app.route('/five_right_right')
def five_right_right():
    return render_template('5-rr.html')

@app.route('/five_with_wepa')
def five_with_wepa():
    return render_template('5-with-wepa.html')

@app.route('/six')
def six():
    return render_template('6.html')

@app.route('/seven')
def seven():
    return render_template('7.html')

@app.route('/eight_left')
def eight_left():
    return render_template('8-l.html')

@app.route('/eight')
def eight():
    return render_template('8.html')

@app.route('/eight_right')
def eight_right():
    return render_template('8-r.html')

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

@app.route('/fourteen_a')
def fourteen_a():
    return render_template('14-a.html')

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