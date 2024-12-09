function addNameValuePair() {
    const input = document.getElementById('nameValueInput').value.trim();
    const regex = /^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/;
    const match = input.match(regex);

    if (match) {
        const name = match[1];
        const value = match[2];
        const list = document.getElementById('nameValueList');

        const option = document.createElement('option');
        option.text = `${name} = ${value}`;
        list.add(option);
        document.getElementById('nameValueInput').value = ''; // Clear input
    } else {
        alert('Invalid format. Please use <name> = <value>');
    }
}

function sortByName() {
    sortList((a, b) => a.text.localeCompare(b.text));
}

function sortByValue() {
    sortList((a, b) => {
        const valueA = a.text.split('=').pop().trim();
        const valueB = b.text.split('=').pop().trim();
        return valueA.localeCompare(valueB);
    });
}

function sortList(compareFunction) {
    const list = document.getElementById('nameValueList');
    const items = Array.from(list.options);
    items.sort(compareFunction);
    list.innerHTML = ''; // Clear the list
    items.forEach(item => list.add(item)); // Re-add sorted items
}

function deleteSelected() {
    const list = document.getElementById('nameValueList');
    const selectedOptions = Array.from(list.selectedOptions);
    selectedOptions.forEach(option => list.remove(option.index));
}