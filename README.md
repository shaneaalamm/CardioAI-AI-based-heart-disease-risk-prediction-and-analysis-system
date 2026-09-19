# CardioAI ❤️

CardioAI is a machine learning project that predicts whether a person is likely to have heart disease based on a set of health-related parameters.

I built this project to understand how a machine learning model can be connected to a real web application instead of keeping the model only inside a Jupyter Notebook.

The project has a simple frontend where the user enters patient information. The data is then sent to a FastAPI backend, which loads the trained model and returns the prediction.

> **Note:** This is an educational project and the prediction should not be treated as a medical diagnosis.

---

## What it does

The user enters details such as:

* Age
* Sex
* Chest pain type
* Blood pressure
* Cholesterol
* Fasting blood sugar
* EKG results
* Maximum heart rate
* Exercise-induced angina
* ST depression
* Slope of ST
* Number of vessels
* Thallium

After submitting the information, CardioAI sends the data to the backend and displays the model's prediction:

**Presence** or **Absence** of heart disease.

---

## Tech Stack

**Machine Learning**

* Python
* Pandas
* Scikit-learn
* SVC
* Joblib
* Jupyter Notebook

**Backend**

* FastAPI
* Uvicorn
* Pydantic

**Frontend**

* HTML
* CSS
* JavaScript

**Other**

* Git
* GitHub
* VS Code

---

## How the project works

```text
User enters patient information
            ↓
       Frontend
            ↓
     FastAPI API
            ↓
   Trained ML Pipeline
            ↓
       Prediction
            ↓
     Result on screen
```

The trained model is saved as `CardioAI.pkl` and loaded by the FastAPI backend whenever the application starts.

The machine learning pipeline handles the preprocessing of numerical and categorical features before passing the data to the SVC model.

---

## Project Structure

```text
CardioAI/
│
├── backend/
│   ├── CardioAI.pkl
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── javascript.js
│   └── style.css
│
├── CardioAI-Heart-Disease-Risk-Prediction.ipynb
├── Heart_Disease_Prediction.csv
├── app.py
├── .gitignore
└── README.md
```

---

## Running it locally

### 1. Clone the repository

```bash
git clone https://github.com/shaneaalamm/CardioAI-AI-based-heart-disease-risk-prediction-and-analysis-system.git
cd CardioAI-AI-based-heart-disease-risk-prediction-and-analysis-system
```

### 2. Create a virtual environment

On Windows:

```powershell
python -m venv .venv
```

Activate it:

```powershell
.venv\Scripts\activate
```

### 3. Install the required packages

```powershell
pip install fastapi uvicorn pandas scikit-learn joblib
```

### 4. Start the backend

From the project folder:

```powershell
python -m uvicorn backend.main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

You can also check the API through FastAPI's documentation:

```text
http://127.0.0.1:8000/docs
```

### 5. Start the frontend

Open another terminal:

```powershell
cd frontend
python -m http.server 5500
```

Then open:

```text
http://127.0.0.1:5500/index.html
```

---

## API

The main endpoint is:

```text
POST /predict
```

Example request:

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

Example response:

```json
{
  "prediction": "Presence"
}
```

---

## Screenshots

I'll add screenshots of the application here once the final version is deployed.
<img width="1900" height="991" alt="image" src="https://github.com/user-attachments/assets/aca25970-541d-403e-a092-77dcf5813d7c" />


<img width="1901" height="982" alt="image" src="https://github.com/user-attachments/assets/d6a03374-6514-4534-a7d5-a40acd208658" />\


<img width="1911" height="751" alt="image" src="https://github.com/user-attachments/assets/bbfdeee1-82b1-4514-9c46-e6ea206b1237" />


<img width="1895" height="986" alt="image" src="https://github.com/user-attachments/assets/6806a5d8-d88f-4c48-9b68-6fa9eb1942f8" />



<img width="1911" height="991" alt="image" src="https://github.com/user-attachments/assets/a86da4cb-8100-4d6b-8025-30575a3d6c6b" />


---

## What I want to improve

There are still several things I'd like to add to the project:

* Better model evaluation and comparison with other algorithms
* Explainable predictions using tools such as SHAP or LIME
* Better visualization of the patient's data
* User authentication and database support
* Deployment of the complete application
* A more detailed risk-analysis dashboard

---
Url of the site :- https://shaneaalamm.github.io/CardioAI-AI-based-heart-disease-risk-prediction-and-analysis-system/

## Disclaimer

This project is made for learning and demonstration purposes.

The prediction produced by the model is **not a medical diagnosis** and should not be used to make medical decisions. Anyone with health concerns should consult a qualified healthcare professional.

---

## Author

**Shane Aalam Ansari**

Built as a machine learning + web development project.
