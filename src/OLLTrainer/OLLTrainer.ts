import { TwistyPlayer } from 'cubing/twisty';
import { ollAlgorithms, algReminders } from '../handlers/ollHandler';
import '../style.css'

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

// Get DOM elements
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
        checkbox.id = `alg-${index}`;
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

        // Create a container for label and arrow
        const labelArrowContainer = document.createElement('div');
        labelArrowContainer.className = 'label-arrow-container';

        // Label: clicking it toggles the checkbox (default browser behavior)
        const label = document.createElement('label');
        label.htmlFor = `alg-${index}`;
        label.textContent = nickname;
        // Prevent label click from toggling the dropdown
        label.addEventListener('click', (e) => e.stopPropagation());

        const arrowIcon = document.createElement('span');
        arrowIcon.className = 'arrow-icon';
        arrowIcon.textContent = ' ➢';

        // Attach click to the label-arrow container (but not the label itself)
        labelArrowContainer.addEventListener('click', () => {
            const twistyContainer = checkboxContainer.querySelector('.twisty-container') as HTMLElement;
            if (twistyContainer) {
                twistyContainer.style.display = twistyContainer.style.display === 'none' ? 'block' : 'none';
            } else {
                const newTwistyContainer = document.createElement('div');
                newTwistyContainer.className = 'twisty-container';
                newTwistyContainer.style.display = 'block';
                checkboxContainer.appendChild(newTwistyContainer);

                const twisty = new TwistyPlayer({
                    experimentalSetupAnchor: 'end',
                    puzzle: '3x3x3',
                });
                twisty.alg = algorithm;
                newTwistyContainer.appendChild(twisty);
            }
        });

        labelArrowContainer.appendChild(label);
        labelArrowContainer.appendChild(arrowIcon);

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(labelArrowContainer);
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
    const correctAlgorithm = ollAlgorithms[correctIndex];
    const correctReminder = algReminders[correctIndex]; // Get the reminder for the correct algorithm

    // Generate 3 random incorrect algorithms from the selected list
    const incorrectOptions: { index: number; algorithm: string }[] = [];
    while (incorrectOptions.length < 3) {
        const randomIndex = selectedAlgorithms[Math.floor(Math.random() * selectedAlgorithms.length)];
        if (randomIndex !== correctIndex) {
            incorrectOptions.push({ index: randomIndex, algorithm: ollAlgorithms[randomIndex] });
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
        const reminderText = algReminders[option.index];
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


