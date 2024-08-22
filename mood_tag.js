//function to save entries to local storage
function saveEntries(entries) {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
}

//function to load entries from local storage
function loadEntries() {
    const entries = localStorage.getItem('journalEntries');
    return entries ? JSON.parse(entries) : [];
}

// Display entries
function displayEntries(entries) {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = '';

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerHTML = `
            <p>${entry.text}</p>
            <div class="tags">Tags: ${entry.tags.join(', ')}</div>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        entriesContainer.appendChild(entryDiv);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', deleteEntry);
    });
}

// Filter entries based on mood tags
function filterEntries(filterTags) {
    const allEntries = loadEntries();
    const filteredEntries = allEntries.filter(entry => 
        filterTags.every(tag => entry.tags.includes(tag))
    );
    displayEntries(filteredEntries);
}

// Handle form submission
document.getElementById('entryForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const text = document.getElementById('entryText').value.trim();
    const tags = document.getElementById('moodTags').value.split(',').map(tag => tag.trim()).filter(tag => tag);

    if (text && tags.length > 0) {
        const entries = loadEntries();
        entries.push({ text, tags });
        saveEntries(entries);
        displayEntries(entries);

        // Clear the form fields
        document.getElementById('entryText').value = '';
        document.getElementById('moodTags').value = '';
    }
});

// Handle filter button click
document.getElementById('filterButton').addEventListener('click', () => {
    const filterTags = document.getElementById('filterTags').value.split(',').map(tag => tag.trim()).filter(tag => tag);
    filterEntries(filterTags);
});

// Delete an entry
function deleteEntry(event) {
    const index = event.target.getAttribute('data-index');
    const entries = loadEntries();
    entries.splice(index, 1);
    saveEntries(entries);
    displayEntries(entries);
}

// Initial display of entries
displayEntries(loadEntries());
