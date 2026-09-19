const form = document.getElementById("predictionForm");

const result = document.getElementById("result");
const statusMessage = document.getElementById("form-status");
const submitButton = document.getElementById("predictButton");
const newAssessmentButton = document.getElementById("newAssessmentButton");


// ==========================================
// FORM SUBMISSION
// ==========================================

form.addEventListener("submit", async function (event) {

    // STOP NORMAL HTML FORM SUBMISSION
    event.preventDefault();
    event.stopPropagation();



    // ==========================================
    // GET PATIENT DATA
    // ==========================================

    const patientData = {

        age: Number(document.getElementById("age").value),

        sex: Number(document.getElementById("sex").value),

        chest_pain: Number(
            document.getElementById("chest_pain").value
        ),

        bp: Number(document.getElementById("bp").value),

        cholesterol: Number(
            document.getElementById("cholesterol").value
        ),

        fbs: Number(
            document.getElementById("fbs").value
        ),

        ekg: Number(
            document.getElementById("ekg").value
        ),

        max_hr: Number(
            document.getElementById("max_hr").value
        ),

        exercise_angina: Number(
            document.getElementById("exercise_angina").value
        ),

        st_depression: Number(
            document.getElementById("st_depression").value
        ),

        slope: Number(
            document.getElementById("slope").value
        ),

        vessels: Number(
            document.getElementById("vessels").value
        ),

        thallium: Number(
            document.getElementById("thallium").value
        )
    };



    // ==========================================
    // LOADING STATE
    // ==========================================

    submitButton.disabled = true;

    submitButton.innerHTML = `
        ⏳ Analyzing...
    `;


    statusMessage.textContent =
        "CardioAI is analyzing the submitted information.";


    try {



        const response = await fetch(
            "https://cardioai-ai-based-heart-disease-risk.onrender.com/predict",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(patientData)
            }
        );


        // ==========================================
        // CHECK RESPONSE
        // ==========================================

        if (!response.ok) {

            throw new Error(
                `Server returned ${response.status}`
            );
        }

        // ==========================================
        // READ RESPONSE
        // ==========================================

        const data = await response.json();


        if (!data.prediction) {

            throw new Error(
                "Prediction was not returned by the server."
            );
        }


        // ==========================================
        // SHOW RESULT
        // ==========================================

        showPredictionDashboard(
            data.prediction,
            patientData
        );


        statusMessage.textContent =
            `CardioAI prediction: ${data.prediction}.`;

    }


    catch (error) {

        console.error(
            "CardioAI Error:",
            error
        );


        showError(
            "Unable to connect to the CardioAI server. Please make sure FastAPI is running."
        );


        statusMessage.textContent =
            "Unable to connect to the CardioAI server.";

    }


    finally {

        submitButton.disabled = false;

        submitButton.innerHTML = `
            🔍 Assess Heart Disease Risk
        `;
    }

});


// ==========================================
// SHOW PREDICTION
// ==========================================

function showPredictionDashboard(
    prediction,
    patientData
) {

    // Patient summary

    document.getElementById("summary-age").textContent =
        patientData.age;

    document.getElementById("summary-sex").textContent =
        patientData.sex === 1 ? "Male" : "Female";

    document.getElementById("summary-bp").textContent =
        `${patientData.bp} mmHg`;

    document.getElementById("summary-cholesterol").textContent =
        `${patientData.cholesterol} mg/dL`;

    document.getElementById("summary-max-hr").textContent =
        `${patientData.max_hr} BPM`;

    document.getElementById("summary-chest-pain").textContent =
        `Type ${patientData.chest_pain}`;


    const resultIcon =
        document.getElementById("result-icon");

    const predictionText =
        document.getElementById("prediction-text");

    const predictionDescription =
        document.getElementById("prediction-description");


    // ==========================================
    // PRESENCE
    // ==========================================

    if (prediction === "Presence") {

        result.className =
            "result-dashboard presence";

        resultIcon.textContent = "⚠️";

        predictionText.textContent =
            "Heart Disease: Presence";

        predictionDescription.textContent =
            "The machine learning model predicts the presence of heart disease.";
    }


    // ==========================================
    // ABSENCE
    // ==========================================

    else if (prediction === "Absence") {

        result.className =
            "result-dashboard absence";

        resultIcon.textContent = "✓";

        predictionText.textContent =
            "Heart Disease: Absence";

        predictionDescription.textContent =
            "The machine learning model predicts the absence of heart disease.";
    }


    // ==========================================
    // UNKNOWN
    // ==========================================

    else {

        result.className =
            "result-dashboard presence";

        resultIcon.textContent = "⚠️";

        predictionText.textContent =
            "Unexpected Prediction";

        predictionDescription.textContent =
            `The model returned: ${prediction}`;
    }


    // Show result

    result.classList.remove("hidden");


    // Scroll to result

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ==========================================
// ERROR
// ==========================================

function showError(message) {

    result.className =
        "result-dashboard presence";

    document.getElementById("result-icon").textContent =
        "⚠️";

    document.getElementById("prediction-text").textContent =
        "Something went wrong";

    document.getElementById("prediction-description").textContent =
        message;


    result.classList.remove("hidden");


    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ==========================================
// NEW ASSESSMENT
// ==========================================

newAssessmentButton.addEventListener(
    "click",
    function () {

        result.classList.add("hidden");

        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        document.getElementById("age").focus();
    }
);