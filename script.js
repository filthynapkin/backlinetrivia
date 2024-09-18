// 33 Pre-defined scenarios
const scenarios = [
    { 
        question: "The guitarist’s amp starts crackling during soundcheck. What do you check first?", 
        options: ["Change the cable", "Check the power supply", "Swap the guitar"],
        correct: 0 
    },
    { 
        question: "A string breaks on the guitar mid-performance. What’s the fastest way to fix it?", 
        options: ["Use a backup guitar", "Replace the string immediately", "Retune the remaining strings"],
        correct: 0 
    },
    {
        question: "There’s too much feedback on stage. What should you adjust first?",
        options: ["Turn down the gain", "Move the mic further from the amp", "Change the EQ"],
        correct: 1
    },
    { 
        question: "The guitarist reports a buzzing sound while playing open strings. What could be the issue?",
        options: ["Worn frets", "Improper intonation", "Loose tuning pegs"],
        correct: 2 
    },
    {
        question: "You notice the guitar’s output is much lower than usual. What’s the most likely cause?",
        options: ["A bad pickup", "Weak battery in the active pickups", "Faulty amp settings"],
        correct: 1
    },
    {
        question: "The pedalboard suddenly stops working. What’s the first thing you check?",
        options: ["Power supply", "Patch cables", "Individual pedals"],
        correct: 0
    },
    {
        question: "The guitarist complains of tuning instability after string bends. What's the first adjustment?",
        options: ["Increase string tension", "Check the nut for binding", "Tighten the tuning pegs"],
        correct: 1
    },
    {
        question: "The guitar isn’t staying in tune, especially on the low E string. What should you check?",
        options: ["The saddle height", "The tuning peg tension", "The pickup height"],
        correct: 1
    },
    {
        question: "The guitar’s tone is too muddy. What’s the first thing you adjust?",
        options: ["The treble on the amp", "The tone knob on the guitar", "The pickup selector"],
        correct: 0
    },
    {
        question: "A string is buzzing when played open but not when fretted. What’s the most likely cause?",
        options: ["String wear", "Nut slot too low", "Improper neck relief"],
        correct: 1
    },
    {
        question: "The guitarist wants lower action, but the strings buzz when you adjust the bridge. What should you check?",
        options: ["Neck relief", "Saddle height", "Pickup height"],
        correct: 0
    },
    {
        question: "The amp is producing an intermittent sound drop. What’s the most likely cause?",
        options: ["Faulty speaker cable", "Dirty input jack", "Tube issue"],
        correct: 2
    },
    {
        question: "After replacing the strings, the guitar’s intonation is off. What’s the solution?",
        options: ["Adjust the bridge saddle", "Change string gauge", "Increase string tension"],
        correct: 0
    },
    {
        question: "The output of the guitar is crackling. What’s the most likely issue?",
        options: ["Dirty input jack", "Pickup issue", "Loose tone knob"],
        correct: 0
    },
    {
        question: "The amp produces a loud hum when turned on. What do you check first?",
        options: ["Ground loop issue", "Power supply", "Speaker cable"],
        correct: 0
    },
    {
        question: "The guitar’s frets are worn out, and notes are buzzing. What’s the best solution?",
        options: ["Raise the action", "Level and crown the frets", "Adjust neck relief"],
        correct: 1
    },
    {
        question: "The tone of the guitar is too harsh. What should you adjust?",
        options: ["Tone knob", "Treble on the amp", "Pickup height"],
        correct: 1
    },
    {
        question: "The guitar’s intonation is sharp at the 12th fret. What’s the adjustment?",
        options: ["Move the saddle backward", "Move the saddle forward", "Loosen the truss rod"],
        correct: 0
    },
    {
        question: "You’ve adjusted the action, but now the intonation is off. What should you do?",
        options: ["Re-adjust the intonation", "Tighten the truss rod", "Loosen the truss rod"],
        correct: 0
    },
    {
        question: "The guitarist wants to switch to heavier gauge strings. What do you need to adjust?",
        options: ["Bridge height", "Truss rod", "Pickup height"],
        correct: 1
    },
    {
        question: "After adjusting the truss rod, the action is still too high. What’s the next adjustment?",
        options: ["Lower the bridge saddles", "Raise the nut height", "Increase string tension"],
        correct: 0
    },
    {
        question: "There’s too much buzzing at the frets, but the neck looks straight. What could be the issue?",
        options: ["Too low action", "High frets", "Loose tuning pegs"],
        correct: 1
    },
    {
        question: "The guitar isn’t staying in tune, especially when using the tremolo. What’s the likely cause?",
        options: ["String slipping at the nut", "Loose tuning pegs", "Loose tremolo arm"],
        correct: 0
    },
    {
        question: "The guitar’s sound has suddenly become very thin and weak. What do you check?",
        options: ["Pickup wiring", "Cable connection", "Amp settings"],
        correct: 1
    },
    {
        question: "The guitarist wants more sustain. What’s the best adjustment?",
        options: ["Lower the action", "Raise the pickup height", "Adjust the bridge saddles"],
        correct: 1
    },
    {
        question: "The guitar is crackling when plugged in. What’s the first step?",
        options: ["Check the input jack", "Replace the cable", "Tighten the volume knob"],
        correct: 1
    },
    {
        question: "The guitarist complains the guitar sounds too boomy. What do you adjust?",
        options: ["Pickup height", "Bass on the amp", "Tone knob"],
        correct: 1
    },
    {
        question: "There’s excessive string buzz at the 1st fret. What could be the issue?",
        options: ["High frets", "Low nut slots", "Improper neck relief"],
        correct: 1
    },
    {
        question: "The guitar keeps going out of tune after string bends. What should you adjust?",
        options: ["The bridge saddle", "The nut", "The tuning pegs"],
        correct: 1
    },
    {
        question: "After a string change, the intonation is flat at the 12th fret. What’s the fix?",
        options: ["Move the saddle forward", "Move the saddle backward", "Raise the bridge height"],
        correct: 1
    },
    {
        question: "The guitar output suddenly drops during a set. What’s the most likely issue?",
        options: ["Pickup wiring issue", "Battery in active pickups", "Faulty cable"],
        correct: 2
    },
    {
        question: "The guitarist complains of dull sound after changing strings. What’s the issue?",
        options: ["Pickup height", "Old strings", "Improper intonation"],
        correct: 1
    }
];

// Game state variables
let score = 0;
let currentScenarioIndex = 0;
let timer;
let timeLeft = 30;

// Start the game
function startGame() {
    score = 0;
    currentScenarioIndex = 0;
    document.getElementById("score").innerText = `Score: ${score}`;
    nextScenario();
}

// Generate a new scenario
function nextScenario() {
    if (currentScenarioIndex >= scenarios.length) {
        alert("Game over! Your final score is " + score);
        return;
    }
    
    const scenario = scenarios[currentScenarioIndex];
    document.getElementById("question").innerText = scenario.question;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Clear old choices

    // Create buttons for each option
    scenario.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        choicesDiv.appendChild(button);
    });

    startTimer();
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex) {
    const scenario = scenarios[currentScenarioIndex];

    // Display whether the answer was correct or wrong
    if (selectedIndex === scenario.correct) {
        alert("Correct!");
        score += 10;
    } else {
        alert("Wrong answer!");
        score -= 5;
    }

    // Update the score display
    document.getElementById("score").innerText = `Score: ${score}`;

    // Always show the explanation
    showExplanation(scenario.explanation);

    // Move to the next scenario after a short delay to let the user read the explanation
    setTimeout(() => {
        currentScenarioIndex++;
        nextScenario();  // Move to the next question
    }, 3000); // 3-second delay to allow the player to read the explanation
}

function showExplanation(explanation) {
    // Update the explanation text and make sure it's visible
    const explanationElement = document.getElementById("explanation");
    explanationElement.innerText = explanation;
    explanationElement.style.display = "block";  // Ensure the explanation is displayed
}

// Start the timer for each scenario
function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timer = setInterval(() => {
        document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            alert("Time's up!");
            checkAnswer(-1); // Automatically wrong answer if time runs out
        }
        timeLeft -= 1;
    }, 1000);
}
