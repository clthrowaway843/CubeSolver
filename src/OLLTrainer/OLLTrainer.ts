import { TwistyPlayer } from 'cubing/twisty';
import { ollAlgorithms, algReminders } from '../handlers/ollHandler';
import '../style.css'

type CustomAlgData = {
    alg: string;
    rotation: string; // e.g., "", "U", "U2", "U'"
};

const savedCustomAlgs = localStorage.getItem('customAlgorithms');
let customAlgorithms: { [index: number]: CustomAlgData } = savedCustomAlgs
    ? JSON.parse(savedCustomAlgs)
    : Object.fromEntries(
        Object.entries(ollAlgorithms).map(([idx, alg]) => [
            Number(idx),
            { alg, rotation: "" }
        ])
    );

const savedCustomNotes = localStorage.getItem('customNotes');
let customNotes: { [index: number]: string } = savedCustomNotes
    ? JSON.parse(savedCustomNotes)
    : Object.fromEntries(
        Object.entries(algReminders).map(([idx, note]) => [Number(idx), note])
    );

// Initialize the TwistyPlayer
const OllTwisty = new TwistyPlayer({
    experimentalSetupAnchor: "end",
    puzzle: "3x3x3",
});

// Initialize the second TwistyPlayer for the previous algorithm
const PreviousTwisty = new TwistyPlayer({
    experimentalSetupAnchor: "end",
    puzzle: "3x3x3",
});

const previousTwistyContainer = document.getElementById('previous-twisty');
if (previousTwistyContainer) {
    previousTwistyContainer.appendChild(PreviousTwisty);
}

const ollTwistyContainer = document.getElementById('oll-twisty-container');
if (ollTwistyContainer) {
    ollTwistyContainer.appendChild(OllTwisty);
}

const choicesContainer = document.getElementById('choices');
const feedbackContainer = document.getElementById('feedback');
const previousTwistyWrapper = document.getElementById('previous-twisty-container');
const algorithmList = document.getElementById('algorithm-list');
const algorithmCheckboxes = document.getElementById('algorithm-checkboxes');
const toggleSelectionButton = document.getElementById('toggle-selection');
const selectAllButton = document.getElementById('select-all');
const deselectAllButton = document.getElementById('deselect-all');
const dropdownTwisties: { [index: number]: TwistyPlayer } = {};

// Load selected algorithms from localStorage or default to all selected
const savedAlgorithms = localStorage.getItem('selectedAlgorithms');
let selectedAlgorithms: number[] = savedAlgorithms ? JSON.parse(savedAlgorithms) : Object.keys(ollAlgorithms).map(Number);

function populateAlgorithmList(): void {
    if (!algorithmCheckboxes) return;

    algorithmCheckboxes.innerHTML = ''; // Clear existing checkboxes
    Object.entries(ollAlgorithms).forEach(([index, algorithm]) => {
        const nickname = `OLL ${index}`;

        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = selectedAlgorithms.includes(Number(index));
        checkbox.addEventListener('change', (event) => {
            const algIndex = Number(index);
            if (checkbox.checked) {
                selectedAlgorithms.push(algIndex);
            } else {
                selectedAlgorithms = selectedAlgorithms.filter(i => i !== algIndex);
            }
            localStorage.setItem('selectedAlgorithms', JSON.stringify(selectedAlgorithms));
            event.stopPropagation(); // Prevent row click
        });

        // Prevent row click when clicking checkbox
        checkbox.addEventListener('click', (event) => event.stopPropagation());


        const label = document.createElement('label');
        label.className = 'oll-label';
        label.textContent = nickname;

        const arrowIcon = document.createElement('span');
        arrowIcon.className = 'arrow-icon';
        arrowIcon.textContent = ' ➢';

        const twistyContainer = document.createElement('div');
        twistyContainer.className = 'twisty-inline';
        const twisty = new TwistyPlayer({
            experimentalSetupAnchor: 'end',
            puzzle: '3x3x3',
            background: 'none',
            controlPanel: 'none',
            hintFacelets: 'none',
            cameraDistance: 4.5,
        });
        const rotation = customAlgorithms[Number(index)]?.rotation || "";
        twisty.alg = rotation ? `${rotation} ${algorithm}` : algorithm;
        dropdownTwisties[Number(index)] = twisty;
        twistyContainer.appendChild(twisty);


        // Custom algorithm input
        const customAlgInput = document.createElement('input');
        customAlgInput.type = 'text';
        customAlgInput.value = customAlgorithms[Number(index)]?.alg || algorithm;
        customAlgInput.className = 'custom-alg-input';
        customAlgInput.title = 'Edit algorithm for this case';
        customAlgInput.addEventListener('change', () => {
            customAlgorithms[Number(index)] = {
                ...customAlgorithms[Number(index)],
                alg: customAlgInput.value
            };
            localStorage.setItem('customAlgorithms', JSON.stringify(customAlgorithms));
        });

        // Rotation selector
        const rotationSelect = document.createElement('select');
        ['', "U", "U2", "U'"].forEach(rot => {
            const opt = document.createElement('option');
            opt.value = rot;
            opt.textContent = rot === '' ? 'Default' : rot;
            if (customAlgorithms[Number(index)]?.rotation === rot) opt.selected = true;
            rotationSelect.appendChild(opt);
        });
        rotationSelect.className = 'rotation-select';
        rotationSelect.title = 'Set default U rotation for this case';
        rotationSelect.addEventListener('change', () => {
            let selectedRotation = rotationSelect.value;
            if (selectedRotation === "U") selectedRotation = "U'";
            else if (selectedRotation === "U'") selectedRotation = "U";
            customAlgorithms[Number(index)] = {
                ...customAlgorithms[Number(index)],
                rotation: selectedRotation
            };
            localStorage.setItem('customAlgorithms', JSON.stringify(customAlgorithms));
            const twisty = dropdownTwisties[Number(index)];
            if (twisty) {
                twisty.alg = selectedRotation ? `${selectedRotation} ${algorithm}` : algorithm;
            }
        });

        // Custom notes input
        const customNoteInput = document.createElement('textarea');
        customNoteInput.className = 'custom-note-input';
        customNoteInput.placeholder = 'Add a note or reminder...';
        customNoteInput.value = customNotes[Number(index)] ?? (algReminders[Number(index)] ?? '');
        customNoteInput.title = 'Edit note for this case';
        customNoteInput.rows = 2;
        customNoteInput.addEventListener('change', () => {
            customNotes[Number(index)] = customNoteInput.value;
            localStorage.setItem('customNotes', JSON.stringify(customNotes));
        });

        const controlsWrapper = document.createElement('div');
        controlsWrapper.className = 'controls-wrapper';
        controlsWrapper.appendChild(label);
        controlsWrapper.appendChild(customAlgInput);
        controlsWrapper.appendChild(customNoteInput);
        controlsWrapper.appendChild(rotationSelect);
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(controlsWrapper);
        checkboxContainer.appendChild(twistyContainer);


        algorithmCheckboxes.appendChild(checkboxContainer);
    });
}

// Toggle the visibility of the algorithm list
toggleSelectionButton?.addEventListener('click', () => {
    if (algorithmList) {
        algorithmList.style.display = algorithmList.style.display === 'none' ? 'block' : 'none';
    }
});

// Select all algorithms
selectAllButton?.addEventListener('click', () => {
    selectedAlgorithms = Object.keys(ollAlgorithms).map(Number);
    populateAlgorithmList();
});

// Deselect all algorithms
deselectAllButton?.addEventListener('click', () => {
    selectedAlgorithms = [];
    const checkboxes = algorithmCheckboxes?.querySelectorAll('input[type="checkbox"]');
    checkboxes?.forEach((checkbox) => {
        (checkbox as HTMLInputElement).checked = false;
    });
    // Clear the saved state in localStorage
    localStorage.removeItem('selectedAlgorithms');
});

// Initialize the algorithm list
populateAlgorithmList();


if (previousTwistyWrapper) {
    previousTwistyWrapper.style.display = 'none'; // Hide initially
}
// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the trainer
generateOLLTrainer();
// Generate the OLL Trainer logic
function generateOLLTrainer(): void {
    if (!feedbackContainer || !choicesContainer) return;

    if (selectedAlgorithms.length === 0) {
        feedbackContainer.textContent = 'No algorithms selected. Please select at least one.';
        feedbackContainer.className = 'feedback incorrect';
        return;
    }

    // Get the correct OLL algorithm from the selected list
    const correctIndex = selectedAlgorithms[Math.floor(Math.random() * selectedAlgorithms.length)];
    const correctAlgData = customAlgorithms[correctIndex] || { alg: ollAlgorithms[correctIndex], rotation: "" };
    const correctAlgorithm = correctAlgData.rotation ? `${correctAlgData.rotation} ${correctAlgData.alg}` : correctAlgData.alg;

    const correctReminder = customNotes[correctIndex] ?? algReminders[correctIndex];

    // Generate 3 random incorrect algorithms from the selected list
    const incorrectOptions: { index: number; algorithm: string }[] = [];
    const maxIncorrect = Math.min(3, selectedAlgorithms.length - 1);
    const maxTries = 100; // Prevent infinite loop if not enough options
    for (let tries = 0, i = 0; i < maxIncorrect && tries < maxTries; tries++) {
        const randomIndex = selectedAlgorithms[Math.floor(Math.random() * selectedAlgorithms.length)];
        const alreadyUsed = incorrectOptions.some(opt => opt.index === randomIndex);
        if (randomIndex !== correctIndex && !alreadyUsed) {
            incorrectOptions.push({ index: randomIndex, algorithm: ollAlgorithms[randomIndex] });
            i++;
        }
    }

    // Combine and shuffle options
    const options = [{ index: correctIndex, algorithm: correctAlgorithm }, ...incorrectOptions];
    shuffleArray(options);

    // Display the OLL case on the cube
    OllTwisty.alg = correctAlgorithm;

    // Render multiple-choice options vertically with labels
    const labels = ['A', 'B', 'C', 'D'];
    choicesContainer.innerHTML = '';
    options.forEach((option, index) => {
        const optionContainer = document.createElement('div');
        optionContainer.className = 'option-container';

        const label = document.createElement('span');
        label.className = 'option-label';
        label.textContent = `${labels[index]}:`;

        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.algorithm;
        button.addEventListener('click', () => handleChoice(option.algorithm, correctAlgorithm, correctReminder));

        // Check if a reminder exists for this algorithm
        const reminderText = customNotes[option.index] ?? algReminders[option.index];
        if (reminderText) {
            const reminder = document.createElement('span');
            reminder.className = 'reminder-text';
            reminder.textContent = `(${reminderText})`;
            optionContainer.appendChild(label);
            optionContainer.appendChild(button);
            optionContainer.appendChild(reminder);
        }
        else {
            optionContainer.appendChild(label);
            optionContainer.appendChild(button);
        }

        choicesContainer.appendChild(optionContainer);
    });
}

// Handle user choice
function handleChoice(selectedOption: string, correctOption: string, reminderText: string | null): void {
    if (!feedbackContainer) return;

    if (selectedOption === correctOption) {
        feedbackContainer.textContent = 'Correct!';
        feedbackContainer.className = 'feedback correct';
        if (previousTwistyWrapper) {
            previousTwistyWrapper.style.display = 'none'; // Hide initially
        }
        setTimeout(() => {
            feedbackContainer.textContent = ''; // Clear feedback
        }, 1000); // 2-second delay

    } else {
        if(reminderText)
            feedbackContainer.innerHTML = `Incorrect.The correct answer was: <br><strong>${correctOption} <br>(${reminderText})</strong>`;
        else
            feedbackContainer.innerHTML = `Incorrect.The correct answer was: <br><strong>${correctOption}</strong>`;

        feedbackContainer.className = 'feedback incorrect';
        PreviousTwisty.alg = correctOption;
        if (previousTwistyWrapper)
            previousTwistyWrapper.style.display = 'block';
    }

    generateOLLTrainer();
}

const resetAlgsButton = document.getElementById('reset-algs');
if (resetAlgsButton) {
    resetAlgsButton.addEventListener('click', () => {
        // Reset customAlgorithms to the original ollAlgorithms
        customAlgorithms = Object.fromEntries(
            Object.entries(ollAlgorithms).map(([idx, alg]) => [
                Number(idx),
                { alg, rotation: "" }
            ])
        );
        localStorage.setItem('customAlgorithms', JSON.stringify(customAlgorithms));
        populateAlgorithmList();
    });
}
