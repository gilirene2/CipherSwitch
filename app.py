from flask import Flask, request, jsonify #This line imports three components from the Flask webframework : Flask, request, jsonify
#Flask: main class used to create flask apps
#request: this i used to handle incoming HTTP requests(GET, POST etc.) 
#jsonify: used to convert python dictionaries 

app = Flask(__name__)

def caesar_cipher(text, shift, mode):
    if mode == 'decrypt':
        shift = -shift
    result = []
    for char in text:
        if char.isalpha():
            start = ord('a') if char.islower() else ord('A')
            result.append(chr((ord(char) - start + shift) % 26 + start))
        else:
            result.append(char)
    return ''.join(result)

@app.route('/process', methods=['POST'])
def process_text():
    data = request.json
    text = data.get('text', '')
    shift = int(data.get('shift', 0))
    mode = data.get('mode', 'encrypt')
    result = caesar_cipher(text, shift, mode)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
