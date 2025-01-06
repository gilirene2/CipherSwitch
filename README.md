# Caesar Cipher Encrypt/Decrypt App

## Overview
The Caesar Cipher Encrypt/Decrypt app is a simple and interactive tool for encoding and decoding messages using the Caesar Cipher method. Users can input their message, choose to either encrypt or decrypt, and specify the cipher key (shift value). The app provides immediate results and is accessible via a web interface.

---

## Features
- **Encrypt/Decrypt Text**: Switch seamlessly between encryption and decryption modes.
- **User-Friendly Interface**: Simple and minimalist design.
- **Clipboard Support**: Easily copy the output to the clipboard for sharing.
- **Real-Time Updates**: Changes to input text and key are reflected instantly.
- **Backend API**: A Flask-based backend for advanced processing (optional).

---

## Technologies Used
### Frontend:
- **HTML5**: Structure and layout.
- **CSS3**: Styling with a terminal-inspired theme.
- **JavaScript**: Implements Caesar Cipher logic and DOM interactions.

### Backend (Optional):
- **Python/Flask**: REST API for processing requests.

---

## File Structure
### Frontend Files
- **`CypherSwitch.html`**: The main HTML file for the user interface.
- **`style.css`**: Styling for the interface.
- **`CScript.js`**: JavaScript logic for text processing and user interaction.

### Backend Files
- **`app.py`**: A Flask application providing API endpoints for text processing (optional).

---

## Setup and Usage
### Prerequisites
- **Frontend**: A modern web browser.
- **Backend**: Python 3.7+ and Flask (only if using the API).

### Steps to Run:
#### Frontend Only:
1. Open `CypherSwitch.html` in any modern browser.
2. Use the interface to input text, select a mode (encrypt/decrypt), and specify the key.

#### With Backend:
1. Install Python and Flask:
   ```bash
   pip install flask
   ```
2. Run the Flask app:
   ```bash
   python app.py
   ```
3. Access the frontend:
   Open `CypherSwitch.html` in your browser.

---

## How It Works
### Caesar Cipher Algorithm
1. Each letter in the input text is shifted by a specified number of places in the alphabet.
2. Non-alphabetic characters remain unchanged.
3. Decryption reverses the shift to retrieve the original text.

### Example
**Input**: "hello", Shift: 3, Mode: Encrypt  
**Output**: "khoor"

**Input**: "khoor", Shift: 3, Mode: Decrypt  
**Output**: "hello"

---

## Screenshots
1. **Encrypt Mode**
   - Shows input, shift key, and encrypted output.
2. **Decrypt Mode**
   - Displays input, shift key, and decrypted text.

---

## Future Improvements
- Add support for additional ciphers.
- Include file upload for bulk text encryption/decryption.
- Improve accessibility features.

---

## License
This project is open-source and available under the MIT License.

---

## Contact
For questions or suggestions, feel free to reach out:
- **GitHub**: gilirene2
- **Email**: securebyteinsight@gmail.com

