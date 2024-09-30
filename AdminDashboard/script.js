// Function to view employee details
function viewEmployee(name) {
    alert("Viewing employee: " + name);
}

// Function to edit employee details
function editEmployee(name) {
    alert("Editing employee: " + name);
}

// Function to delete an employee
function deleteEmployee(name) {
    if (confirm("Are you sure you want to delete " + name + "?")) {
        alert(name + " has been deleted.");
        // Optionally remove the employee from the list after deletion
        const employeeElement = document.getElementById(name);
        if (employeeElement) {
            employeeElement.remove();
        }
    }
}

// Function to add a new employee
function addEmployee() {
    // Prompt for new employee's name
    const newName = prompt("Enter the name of the new employee:");

    if (newName) {
        // Create new employee element
        const employeeList = document.querySelector('.employee-list');
        const newEmployeeDiv = document.createElement('div');
        newEmployeeDiv.classList.add('employee');
        newEmployeeDiv.setAttribute('id', newName); // Set an ID for the new employee

        // Add employee name
        const employeeNameSpan = document.createElement('span');
        employeeNameSpan.textContent = newName;
        newEmployeeDiv.appendChild(employeeNameSpan);

        // Add action buttons (View, Edit, Delete)
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const viewButton = document.createElement('button');
        viewButton.textContent = '👁️';
        viewButton.onclick = () => viewEmployee(newName);

        const editButton = document.createElement('button');
        editButton.textContent = '✏️';
        editButton.onclick = () => editEmployee(newName);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.onclick = () => deleteEmployee(newName);

        actionsDiv.appendChild(viewButton);
        actionsDiv.appendChild(editButton);
        actionsDiv.appendChild(deleteButton);

        // Add action buttons to the employee div
        newEmployeeDiv.appendChild(actionsDiv);

        // Append the new employee to the employee list
        employeeList.appendChild(newEmployeeDiv);
    } else {
        alert("Employee name cannot be empty.");
    }
}
