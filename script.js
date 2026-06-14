document.addEventListener('DOMContentLoaded', () => {
    const editableCells = document.querySelectorAll('td[contenteditable="true"]');

    // 1. Load saved data when the page opens
    editableCells.forEach(cell => {
        const id = cell.getAttribute('data-id');
        const savedValue = localStorage.getItem(id);
        
        if (savedValue !== null) {
            cell.textContent = savedValue;
        }

        // 2. Save data whenever you stop typing in a cell
        cell.addEventListener('blur', () => {
            localStorage.setItem(id, cell.textContent);
        });
    });
});