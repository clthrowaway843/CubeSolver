import Chart from 'chart.js/auto';

interface SolveDetails {
    totalTime: number;
    crossTime: number;
    f2lTime: number;
    ollTime: number;
    pllTime: number;
}

var solveDetailsHistory: SolveDetails[] = [];

function updateSolveTimesUI() {
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

let crossGraphChart: Chart | null = null;
let f2lGraphChart: Chart | null = null;
let ollGraphChart: Chart | null = null;
let pllGraphChart: Chart | null = null;
function updateGraphs() {
    const labels = solveDetailsHistory.map((_, index) => `Solve ${index + 1}`);
    const crossTimes = solveDetailsHistory.map((solve) => solve.crossTime);
    const f2lTimes = solveDetailsHistory.map((solve) => solve.f2lTime);
    const ollTimes = solveDetailsHistory.map((solve) => solve.ollTime);
    const pllTimes = solveDetailsHistory.map((solve) => solve.pllTime);

    const createGraph = (ctx: string, label: string, data: number[], chartInstance: Chart | null): Chart => {
        // Destroy the existing chart instance if it exists
        if (chartInstance) {
            chartInstance.destroy();
        }

        return new Chart(document.getElementById(ctx) as HTMLCanvasElement, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label,
                        data: data.map((time) => time / 1000), // Convert to seconds
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true },
                },
                scales: {
                    //y: { beginAtZero: true },
                },
            },
        });
    };

    // Update each graph and store the new chart instance
    crossGraphChart = createGraph('cross-graph', 'Cross Times', crossTimes, crossGraphChart);
    f2lGraphChart = createGraph('f2l-graph', 'F2L Times', f2lTimes, f2lGraphChart);
    ollGraphChart = createGraph('oll-graph', 'OLL Times', ollTimes, ollGraphChart);
    pllGraphChart = createGraph('pll-graph', 'PLL Times', pllTimes, pllGraphChart);
}

export function addSolveDetails(solveDetails: SolveDetails) {
    solveDetailsHistory.push(solveDetails);

    // Keep only the 5 most recent solves
    if (solveDetailsHistory.length > 5) {
        solveDetailsHistory.shift();
    }

    console.log("Last 5 solve times:");
    solveDetailsHistory.forEach((solve, index) => {
        console.log(`Solve ${index + 1}: ${solve.totalTime}s`);
    });

    const averageSolveTime =
        solveDetailsHistory.reduce((sum, solve) => sum + solve.totalTime, 0) /
        solveDetailsHistory.length;
    console.log(`Average of the last 5 solves: ${averageSolveTime}s`);

    updateSolveTimesUI();
    updateGraphs();
}