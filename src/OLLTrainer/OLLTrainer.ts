import { TwistyPlayer } from 'cubing/twisty';
import { ollAlgorithms, algReminders, algorithmNicknames} from '../handlers/ollHandler';
import '../style.css'


const OLL_GROUPS: { [group: string]: number[] } = {
    "Dot Cases": [1, 2, 3, 4, 17, 18, 19, 20],
    "Block": [5, 6],
    "Cross": [21, 22, 23, 24, 25, 26, 27],
    "Fish": [9, 10, 35, 37],
    "Big L": [13, 14, 15, 16],
    "Small L": [47, 48, 49, 50, 53, 54],
    "Lightning": [7, 8, 11, 12, 39, 40],
    "Lightning + 1": [29, 30, 41, 42],
    "Line": [51, 52, 55, 56],
    "P": [31, 32, 43, 44],
    "C": [34, 46],
    "W": [36, 38],
    "T": [33, 45],
    "All corners": [28, 57]
};

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
const algorithmCheckboxes = document.getElementById('algorithm-checkboxes');
const selectAllButton = document.getElementById('select-all');
const deselectAllButton = document.getElementById('deselect-all');
const dropdownTwisties: { [index: number]: TwistyPlayer } = {};

// Load selected algorithms from localStorage or default to all selected
const savedAlgorithms = localStorage.getItem('selectedAlgorithms');
let selectedAlgorithms: number[] = savedAlgorithms ? JSON.parse(savedAlgorithms) : Object.keys(ollAlgorithms).map(Number);


const columnCountInput = document.getElementById('column-count') as HTMLInputElement;
let columnCount = Number(columnCountInput?.value) || 5; // Default to 5 columns

if (columnCountInput) {
    columnCountInput.addEventListener('change', () => {
        columnCount = Math.max(1, Math.min(6, Number(columnCountInput.value)));
        populateAlgorithmList();
    });
}

function populateAlgorithmList(): void {
    if (!algorithmCheckboxes) return;

    algorithmCheckboxes.innerHTML = '';
    //algorithmCheckboxes.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;

    // Track which OLLs have been rendered
    const rendered = new Set<number>();

    // Render each group
    Object.entries(OLL_GROUPS).forEach(([groupName, ollList]) => {
        // Group container
        const groupContainer = document.createElement('div');
        groupContainer.className = 'oll-group-container';
        groupContainer.id = `group-${groupName.replace(/\s+/g, '-').toLowerCase()}`; // Added ID for the group

        // Group header with checkbox
        const groupHeader = document.createElement('div');
        groupHeader.className = 'oll-group-header';

        const groupCheckbox = document.createElement('input');
        groupCheckbox.type = 'checkbox';
        groupCheckbox.checked = ollList.every(idx => selectedAlgorithms.includes(idx));
        groupCheckbox.className = 'oll-group-checkbox';

        groupCheckbox.addEventListener('change', () => {
            ollList.forEach(idx => {
                const checked = groupCheckbox.checked;
                const i = selectedAlgorithms.indexOf(idx);
                if (checked && i === -1) selectedAlgorithms.push(idx);
                if (!checked && i !== -1) selectedAlgorithms.splice(i, 1);
                // Update individual OLL checkboxes
                const cb = document.getElementById(`alg-checkbox-${idx}`) as HTMLInputElement;
                if (cb) cb.checked = checked;
            });
            localStorage.setItem('selectedAlgorithms', JSON.stringify(selectedAlgorithms));
        });

        const groupLabel = document.createElement('span');
        groupLabel.className = 'oll-group-label';
        groupLabel.textContent = groupName;

        groupHeader.appendChild(groupCheckbox);
        groupHeader.appendChild(groupLabel);
        groupContainer.appendChild(groupHeader);

        // OLLs in group
        const groupGrid = document.createElement('div');
        groupGrid.className = 'oll-group-grid';
        groupGrid.style.display = 'grid';
        groupGrid.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
        groupGrid.style.gap = '24px';

        ollList.forEach(idx => {
            groupGrid.appendChild(createOLLBox(idx));
            rendered.add(idx);
        });

        groupContainer.appendChild(groupGrid);
        algorithmCheckboxes.appendChild(groupContainer);

        // --- Collapse/Expand logic ---
        groupHeader.style.cursor = "pointer";
        groupHeader.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).classList.contains('oll-group-checkbox')) return;
            groupContainer.classList.toggle('collapsed');
            const groupGrid = groupContainer.querySelector('.oll-group-grid') as HTMLElement;
            if (groupContainer.classList.contains('collapsed')) {
                groupGrid.style.display = 'none';
            } else {
                groupGrid.style.display = 'grid';
            }
        });
    });


    // After rendering all groups:
    const groupNavigator = document.getElementById('group-navigator');
    if (groupNavigator) {
        groupNavigator.innerHTML = '';
        Object.keys(OLL_GROUPS).forEach(groupName => {
            const link = document.createElement('a');
            link.href = `#group-${groupName.replace(/\s+/g, '-').toLowerCase()}`;
            link.textContent = groupName;
            link.className = 'group-nav-link';
            groupNavigator.appendChild(link);
        });
    }
}

// Helper to create a single OLL box (your existing code, but with id for checkbox)
function createOLLBox(idx: number): HTMLDivElement {
    const alg = ollAlgorithms[idx];
    const nicknameText = algorithmNicknames?.[alg] || '';
    const algBox = document.createElement('div');
    algBox.className = 'alg-box';

    // --- Header: Checkbox + OLL label ---
    const header = document.createElement('label');
    header.className = 'alg-header';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `alg-checkbox-${idx}`;
    checkbox.checked = selectedAlgorithms.includes(idx);
    checkbox.className = 'alg-checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            if (!selectedAlgorithms.includes(idx)) selectedAlgorithms.push(idx);
        } else {
            selectedAlgorithms = selectedAlgorithms.filter(i => i !== idx);
        }
        localStorage.setItem('selectedAlgorithms', JSON.stringify(selectedAlgorithms));
    });

    const labelSpan = document.createElement('span');
    labelSpan.className = 'alg-label';
    labelSpan.textContent = `OLL ${idx}`;

    header.appendChild(checkbox);
    header.appendChild(labelSpan);

    // --- TwistyPlayer preview ---
    const twistyContainer = document.createElement('div');
    twistyContainer.className = 'twisty-inline';
    const twisty = new TwistyPlayer({
        experimentalSetupAnchor: 'end',
        puzzle: '3x3x3',
        background: 'none',
        controlPanel: 'none',
        hintFacelets: 'none',
        cameraDistance: 4.7,
        experimentalDragInput: 'none',
    });
    const rotation = customAlgorithms[idx]?.rotation || "";
    twisty.alg = rotation ? `${rotation} ${alg}` : alg;
    dropdownTwisties[idx] = twisty;
    twistyContainer.appendChild(twisty);

    // --- Nickname (below twisty, small/italic) ---
    let nicknameElem: HTMLDivElement | null = null;
    if (nicknameText) {
        nicknameElem = document.createElement('div');
        nicknameElem.className = 'alg-nickname';
        nicknameElem.textContent = nicknameText;
    }

    // --- Inputs ---
    const customAlgInput = document.createElement('textarea');
    customAlgInput.className = 'custom-alg-input';
    customAlgInput.value = customAlgorithms[idx]?.alg || alg;
    customAlgInput.title = 'Edit algorithm for this case';
    customAlgInput.placeholder = 'Algorithm';
    customAlgInput.rows = 2;
    customAlgInput.style.resize = 'vertical';
    customAlgInput.addEventListener('change', () => {
        customAlgorithms[idx] = {
            ...customAlgorithms[idx],
            alg: customAlgInput.value
        };
        localStorage.setItem('customAlgorithms', JSON.stringify(customAlgorithms));
    });

    const rotationSelect = document.createElement('select');
    ['', "U", "U2", "U'"].forEach(rot => {
        const opt = document.createElement('option');
        opt.value = rot;
        opt.textContent = rot === '' ? 'Default' : rot;
        if (customAlgorithms[idx]?.rotation === rot) opt.selected = true;
        rotationSelect.appendChild(opt);
    });
    rotationSelect.className = 'rotation-select';
    rotationSelect.title = 'Set default U rotation for this case';
    rotationSelect.addEventListener('change', () => {
        let selectedRotation = rotationSelect.value;
        customAlgorithms[idx] = {
            ...customAlgorithms[idx],
            rotation: selectedRotation
        };
        localStorage.setItem('customAlgorithms', JSON.stringify(customAlgorithms));
        const twisty = dropdownTwisties[idx];
        if (twisty) {
            twisty.alg = selectedRotation ? `${selectedRotation} ${alg}` : alg;
        }
    });

    const customNoteInput = document.createElement('textarea');
    customNoteInput.className = 'custom-note-input';
    customNoteInput.placeholder = 'Add a note or reminder...';
    customNoteInput.value = customNotes[idx] ?? (algReminders[idx] ?? '');
    customNoteInput.title = 'Edit note for this case';
    customNoteInput.rows = 2;
    customNoteInput.addEventListener('change', () => {
        customNotes[idx] = customNoteInput.value;
        localStorage.setItem('customNotes', JSON.stringify(customNotes));
    });

    // --- Compose the box ---
    algBox.appendChild(header);
    algBox.appendChild(twistyContainer);
    if (nicknameElem) algBox.appendChild(nicknameElem);

    const inputsWrapper = document.createElement('div');
    inputsWrapper.className = 'alg-inputs';
    inputsWrapper.appendChild(customAlgInput);
    inputsWrapper.appendChild(rotationSelect);
    inputsWrapper.appendChild(customNoteInput);

    algBox.appendChild(inputsWrapper);

    return algBox;
}


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

function updateScrollPadding() {
    const nav = document.getElementById('group-navigator');
    if (nav) {
        const navHeight = nav.offsetHeight + 5; // Add a small margin
        document.documentElement.style.scrollPaddingTop = navHeight + 'px';
    }
}

// Run on load and on resize
window.addEventListener('DOMContentLoaded', updateScrollPadding);
window.addEventListener('resize', updateScrollPadding);

const jumpInput = document.getElementById('jump-oll-input') as HTMLInputElement;
const jumpBtn = document.getElementById('jump-oll-btn');

if (jumpBtn && jumpInput) {
    jumpBtn.addEventListener('click', () => {
        const ollNum = Number(jumpInput.value);
        if (!ollNum || !ollAlgorithms[ollNum]) {
            jumpInput.classList.add('input-error');
            setTimeout(() => jumpInput.classList.remove('input-error'), 1000);
            return;
        }
        // Find the OLL box
        const ollBox = document.getElementById(`alg-checkbox-${ollNum}`)?.closest('.alg-box');
        if (ollBox) {
            // Expand the group if it's collapsed
            const groupContainer = ollBox.closest('.oll-group-container');
            if (groupContainer && groupContainer.classList.contains('collapsed')) {
                groupContainer.classList.remove('collapsed');
                const groupGrid = groupContainer.querySelector('.oll-group-grid') as HTMLElement;
                if (groupGrid) groupGrid.style.display = 'grid';
            }
            ollBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            ollBox.classList.add('highlight-oll');
            setTimeout(() => ollBox.classList.remove('highlight-oll'), 1200);
        }
    });
}