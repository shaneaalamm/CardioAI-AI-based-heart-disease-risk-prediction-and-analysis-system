# CardioAI ❤️

**CardioAI – AI-Based Heart Disease Risk Prediction and Analysis System**

CardioAI is a machine learning web application that predicts whether a person is likely to have heart disease based on selected clinical parameters.

The project started as a machine learning implementation and was developed into a complete web application by connecting the trained model with a **FastAPI backend** and a **HTML, CSS, and JavaScript frontend**.

> **Disclaimer:** This project is for educational and research purposes only. The prediction should not be considered a medical diagnosis or a substitute for professional medical advice.

---

## 🌐 Live Demo

**Website:**
https://shaneaalamm.github.io/CardioAI-AI-based-heart-disease-risk-prediction-and-analysis-system/

**API Documentation:**
https://cardioai-ai-based-heart-disease-risk.onrender.com/docs

---

## 🚀 What It Does

* Accepts patient clinical information through a web interface
* Preprocesses input data using the trained ML pipeline
* Sends patient data to a FastAPI backend
* Uses a trained Linear SVM model for prediction
* Returns the prediction to the frontend
* Provides a simple and responsive interface for assessment

---

## 🧠 Machine Learning

The model was developed using a preprocessing and classification pipeline.

### Data Preprocessing

**Numerical Features**

* Age
* Blood Pressure
* Cholesterol
* FBS over 120
* Maximum Heart Rate
* ST Depression
* Number of Vessels

Numerical features are standardized using **StandardScaler**.

**Categorical Features**

* Sex
* Chest Pain Type
* EKG Results
* Exercise Angina
* Slope of ST
* Thallium

Categorical features are encoded using **OneHotEncoder**.

### Model

Several classification algorithms were explored during development, including:

* Logistic Regression
* Decision Tree
* Random Forest
* Support Vector Machine

The final deployed model is a **Linear Support Vector Machine (SVM)** integrated into the preprocessing pipeline.

---

## 🔄 How It Works

```text
User
  ↓
Enter Patient Information
  ↓
HTML / CSS / JavaScript Frontend
  ↓
FastAPI REST API
  ↓
Data Preprocessing Pipeline
  ↓
Linear SVM Model
  ↓
Prediction
  ↓
Result Displayed on Website
```

---

## 🛠️ Tech Stack

### Machine Learning

* Python
* Pandas
* Scikit-learn
* SVC / Linear SVM
* Joblib
* Jupyter Notebook

### Backend

* FastAPI
* Uvicorn
* Pydantic

### Frontend

* HTML
* CSS
* JavaScript
* Fetch API

### Tools

* Git
* GitHub
* VS Code
* Render
* GitHub Pages

---

## 📁 Project Structure

```text
CardioAI/
│
├── backend/
│   ├── CardioAI.pkl
│   └── main.py
│
├── index.html
├── javascript.js
├── style.css
│
├── CardioAI-Heart-Disease-Risk-Prediction-and-Analysis-System.ipynb
├── requirements.txt
├── .gitignore
├── .nojekyll
├── LICENSE
└── README.md
```

---

## 🔌 API

### `POST /predict`

The API accepts patient information and returns the model prediction.

### Example Request

```json
{
  "age": 45,
  "sex": 1,
  "chest_pain": 3,
  "bp": 170,
  "cholesterol": 320,
  "fbs": 1,
  "ekg": 1,
  "max_hr": 180,
  "exercise_angina": 1,
  "st_depression": 1.3,
  "slope": 2,
  "vessels": 3,
  "thallium": 6
}
```

### Example Response

```json
{
  "prediction": "Presence"
}
```

---

## 📸 Screenshots

### Home / Patient Information

<img width="1900" height="991" alt="image" src="https://github.com/user-attachments/assets/aca25970-541d-403e-a092-77dcf5813d7c" />

<img width="1901" height="982" alt="image" src="https://github.com/user-attachments/assets/d6a03374-6514-4534-a7d5-a40acd208658" />

<img width="1911" height="751" alt="image" src="https://github.com/user-attachments/assets/bbfdeee1-82b1-4514-9c46-e6ea206b1237" />

<img width="1895" height="986" alt="image" src="https://github.com/user-attachments/assets/6806a5d8-d88f-4c48-9b68-6fa9eb1942f8" />

<img width="1911" height="991" alt="image" src="https://github.com/user-attachments/assets/a86da4cb-8100-4d6b-8025-30575a3d6c6b" />


### Prediction Result

<img width="1897" height="948" alt="image" src="https://github.com/user-attachments/assets/259ad3e4-0f17-43cc-99b0-737f299be6af" />

<img width="1900" height="937" alt="image" src="https://github.com/user-attachments/assets/2a276e81-bfbd-46bf-a8bc-b8578377ba67" />


---

## 🔮 Future Improvements

* Add probability/confidence visualization
* Improve model explainability
* Improve input validation and error handling
* Evaluate the model using larger and more diverse datasets
* Add API monitoring and logging
* Improve the risk-analysis dashboard
* Add stronger security and privacy controls

---

## ⚠️ Limitations

* The project uses a limited dataset.
* The model has not been clinically validated.
* Predictions depend on the input features and training data.
* The application is not intended for real-world medical diagnosis.

---

## 👨‍💻 Author

**Shane Aalam Ansari**

B.Tech CSE Student

Built as a machine learning and web development project to understand the process of taking an ML model from experimentation in a Jupyter Notebook to a deployed web application.
