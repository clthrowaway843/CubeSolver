import Chart from 'chart.js/auto';

export interface SolveDetails {
    totalTime: number;
    crossTime: number;
    f2lTime: number;
    ollTime: number;
    pllTime: number;
}

export class StatsManager {
    private solveDetailsHistory: SolveDetails[] = [];
    private crossGraphChart: Chart | null = null;
    // ...other chart refs

    addSolve(solve: SolveDetails) {
        this.solveDetailsHistory.push(solve);
        if (this.solveDetailsHistory.length > 5) {
            this.solveDetailsHistory.shift();
        }
    }

    updateCharts() {
        // ...use this.solveDetailsHistory to update charts
    }

    updateTable() {
        // ...use this.solveDetailsHistory to update the table
    }
}