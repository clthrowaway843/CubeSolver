//import Chart from 'chart.js/auto';

interface SolveDetails {
    totalTime: number;
    crossTime: number;
    f2lTime: number;
    ollTime: number;
    pllTime: number;
}

var solveDetailsHistory: SolveDetails[] = [];

// Allow user to set how many solves to keep (default 10)
let maxSolveHistory = 10;

// Create and insert a selector for number of solves to keep
function createSolveHistorySelector() {
    let container = document.getElementById('solve-times-container');
    if (!container) return;

    let existing = document.getElementById('solve-history-count-selector');
    if (existing) return; // Don't add twice

    const label = document.createElement('label');
    label.textContent = "Show last ";
    label.style.marginRight = "4px";
    label.htmlFor = "solve-history-count-selector";

    const select = document.createElement('select');
    select.id = "solve-history-count-selector";
    [5, 10, 20, 50, 100].forEach(val => {
        const option = document.createElement('option');
        option.value = val.toString();
        option.textContent = val.toString();
        if (val === maxSolveHistory) option.selected = true;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        maxSolveHistory = parseInt(select.value, 10);
        // Trim history if needed and update UI
        if (solveDetailsHistory.length > maxSolveHistory) {
            solveDetailsHistory = solveDetailsHistory.slice(-maxSolveHistory);
        }
        updateSolveTimesUI();
    });

    container.insertBefore(label, container.firstChild);
    container.insertBefore(select, label.nextSibling);
}

function updateSolveTimesUI() {
    createSolveHistorySelector();

    const tableBody = document.querySelector('#solve-times-table tbody')!;
    tableBody.innerHTML = ''; // Clear existing rows

    solveDetailsHistory.forEach((solve, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${solve.totalTime.toFixed(2)}s</td>
            <td>${solve.crossTime.toFixed(2)}s</td>
            <td>${solve.f2lTime.toFixed(2)}s</td>
            <td>${solve.ollTime.toFixed(2)}s</td>
            <td>${solve.pllTime.toFixed(2)}s</td>
        `;
        tableBody.appendChild(row);
    });
}

export function addSolveDetails(solveDetails: SolveDetails) {
    solveDetailsHistory.push(solveDetails);

    // Keep only the most recent solves as set by maxSolveHistory
    if (solveDetailsHistory.length > maxSolveHistory) {
        solveDetailsHistory = solveDetailsHistory.slice(-maxSolveHistory);
    }

    console.log(`Last ${maxSolveHistory} solve times:`);
    solveDetailsHistory.forEach((solve, index) => {
        console.log(`Solve ${index + 1}: ${solve.totalTime}s`);
    });

    const averageSolveTime =
        solveDetailsHistory.reduce((sum, solve) => sum + solve.totalTime, 0) /
        solveDetailsHistory.length;
    console.log(`Average of the last ${solveDetailsHistory.length} solves: ${averageSolveTime}s`);

    updateSolveTimesUI();
}