from flask import Flask, jsonify, request
import pg;
app = Flask('app')
db = pg.DB(dbname='ajax_exercises')
@app.route('/')
def home():
    # this sends the contents of static/index.html
    return app.send_static_file('index.html')

@app.route('/search')
def search():
    search_str =  request.args['search']
    query = db.query("Select * from website where title=$1",search_str).dictresult()# this sends the contents of static/results.json
    return jsonify(query)
    # return app.send_static_file('results.json')

app.run(debug=True)
