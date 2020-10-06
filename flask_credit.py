from flask import Flask, render_template, request, url_for, jsonify, send_from_directory
from card_check import check_sum, check_card

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0.01

@app.route("/")
def hello():
    initial = ["Type your card no", 3]
    return render_template('home.html', result=initial)

@app.route("/check", methods=["GET", "POST"])
def card_no():
    # GET
    if request.method == 'GET':
        initial = ["Type your card no", 2]
        return render_template('home.html', result=initial)

    # POST
    else:
        card_no = request.form.get('card_no')

        # checks for e in input and for empty input
        if not len(card_no):
            return render_template('home.html', result=['Number not given', 2], card_no=card_no)
        elif not card_no.isnumeric():
            return render_template('home.html', result=['"e" not allowed', 0], card_no=card_no)

        # process if validation went ok
        luhn_test = check_sum(card_no)
        result = check_card(card_no, luhn_test)
        return render_template('home.html', result=result, card_no=card_no)


# route with modal content
@app.route("/modal/<lang>")
def about(lang):
    return render_template(f"modal{lang}.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")
