from flask import Flask, request, jsonify
from deepface import DeepFace
import cv2
import numpy as np

app = Flask(__name__)

@app.route('/detect_ethnicity', methods=['POST'])
def detect_ethnicity():
    # Check if the 'file' key is in the request files
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    # Get the file from the request
    file = request.files['file']

    # Check if the file is empty
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Read the image from the file
    image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    
    # Perform ethnicity detection
    result = DeepFace.analyze(image, actions=['race'])
    dominant_race = result[0]['dominant_race']
    
    # Return the result as JSON
    return jsonify({'dominant_race': dominant_race})

if __name__ == '__main__':
    app.run(debug=True)
