// Your JS code here
function addBook() {
    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate inputs
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row
    const tableBody = document.getElementById('book-list');
    const newRow = tableBody.insertRow();

    // Insert cells
    const titleCell = newRow.insertCell(0);
    const authorCell = newRow.insertCell(1);
    const isbnCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    // Set cell values
    titleCell.textContent = title;
    authorCell.textContent = author;
    isbnCell.textContent = isbn;

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function () {
        tableBody.deleteRow(newRow.rowIndex);
    };

    actionCell.appendChild(deleteButton);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
