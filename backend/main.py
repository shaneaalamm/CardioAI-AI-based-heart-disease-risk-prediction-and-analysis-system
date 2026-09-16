from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import os



# CREATE FASTAPI APP

app = FastAPI(
    title="CardioAI API",
    description="Heart Disease Risk Prediction API",
    version="1.0"
)

# ENABLE CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# LOAD MACHINE LEARNING MODEL

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "CardioAI.pkl"
)

model = joblib.load(MODEL_PATH)


# PATIENT DATA MODEL

class PatientData(BaseModel):

    age: int
    sex: int
    chest_pain: int
    bp: int
    cholesterol: int
    fbs: int
    ekg: int
    max_hr: int
    exercise_angina: int
    st_depression: float
    slope: int
    vessels: int
    thallium: int

# HOME / HEALTH CHECK

@app.get("/")
def home():

    return {
        "message": "Welcome to CardioAI API",
        "status": "running"
    }

# PREDICTION ENDPOINT

@app.post("/predict")
def predict(patient: PatientData):

    # Create DataFrame using the exact
    # feature names expected by the model

    input_data = pd.DataFrame([{

        "Age": patient.age,

        "Sex": patient.sex,

        "Chest pain type": patient.chest_pain,

        "BP": patient.bp,

        "Cholesterol": patient.cholesterol,

        "FBS over 120": patient.fbs,

        "EKG results": patient.ekg,

        "Max HR": patient.max_hr,

        "Exercise angina": patient.exercise_angina,

        "ST depression": patient.st_depression,

        "Slope of ST": patient.slope,

        "Number of vessels fluro": patient.vessels,

        "Thallium": patient.thallium

    }])


    # Get prediction from ML model

    prediction = model.predict(input_data)[0]


    # Return prediction to frontend

    return {
        "prediction": str(prediction)
    }