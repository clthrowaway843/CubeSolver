export function updateTable(solveDetailsHistory: SolveDetails[]) {
    const tableBody = document.querySelector('#solve-times-table tbody')!;
    tableBody.innerHTML = '';
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