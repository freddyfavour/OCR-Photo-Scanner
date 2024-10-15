# OCR Photo Scanner App

![OCR Photo Scanner](https://github.com/freddyfavour/image-repo/blob/main/Screenshot%202024-10-14%209.19.13%20AM.png?raw=true)

## Overview

The **OCR Photo Scanner App** is a web application that allows users to upload images, perform Optical Character Recognition (OCR) using Tesseract, and extract text from the images. The app features user authentication for secure access, a landing page, and a smooth user experience for both signed-in and guest users.

## Features

- **Optical Character Recognition (OCR):**  
  Extract text from images using the Tesseract OCR engine.
  
- **User Authentication:**  
  Users can sign up, log in, and log out to access personalized features.
  
- **Landing Page:**  
  An aesthetically designed landing page welcoming users and explaining the app’s functionalities.
  
- **Image Upload:**  
  Upload images directly from your device to the app.
  
- **Real-time Text Extraction:**  
  Get instant results after uploading an image.
  
- **Secure Access:**  
  Only authenticated users can upload and scan images.

## Demo

Check out the live demo of the app [here](https://5173-g3rrsnghspwf-8000.hosted.buildql.com).  

## Tech Stack

- **Frontend:** React JS
- **Backend:** Firebase
- **OCR Engine:** Tesseract.js
- **Authentication:** Firebase Auth
- **Database:** Firestore

## Installation

To get started with the project locally, follow these steps:

### Prerequisites

- **Node.js** installed on your machine
- **Tesseract.js** installed
- **Firebase** or any other database service set up
- **Git** installed

### Clone the Repository

```bash
git clone https://github.com/yourusername/ocr-photo-scanner.git
cd ocr-photo-scanner
```

### Install Dependencies

```bash
npm install
```

### Configure the firebase.js file using your own:

### Run the Application

```bash
npm run dev
```

The app should now be running at `http://localhost:5173`.

## Usage

1. **Sign up / Log in:**  
   Create an account or log in with your existing credentials.
   
2. **Upload an Image:**  
   Once logged in, navigate to the OCR scanner page and upload an image.
   
3. **Get Text Output:**  
   The app will process the image and display the extracted text in real-time.

## Screenshots

### Landing Page
![Landing Page](https://github.com/freddyfavour/image-repo/blob/main/Screenshot%202024-10-14%209.19.13%20AM.png?raw=true)

### OCR Scanner Page
![OCR Scanner Page](https://github.com/freddyfavour/image-repo/blob/main/Screenshot%202024-10-14%209.35.18%20AM.png?raw=true)

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. [Fork it](https://github.com/freddyfavour/OCR-Photo-Scanner/fork)
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
