// Web Storage

// Session Storage
// Save data to session storage
document.querySelector('#saveName').addEventListener("click", function(){
    let name = document.querySelector('#username').value;
    /*
    sessionStorage.setItem("username", name);
    window.alert("Name saved in sessionStorage");
    */
    if (!name) {
        window.alert('Please enter a name before saving.');
        return;
    }

    // Read existing array from localStorage (or start empty)
    let existing = localStorage.getItem('usernames');
    let names = existing ? JSON.parse(existing) : [];
    names.push(name);
    localStorage.setItem('usernames', JSON.stringify(names));
    window.alert('Name saved in localStorage');
    document.querySelector('#username').value = '';
    

// Get and display all names
document.querySelector('#getName').addEventListener('click', function(){
    const list = document.querySelector('#nameList');
    list.innerHTML = '';
    let existing = localStorage.getItem('usernames');
    if (!existing) {
        list.innerHTML = '<li>No names saved.</li>';
        return;
    }
    let names = JSON.parse(existing);
    names.forEach(n => {
        let li = document.createElement('li');
        li.textContent = n;
        list.appendChild(li);
    });
});

// Clear storage and UI
document.querySelector('#clearName').addEventListener('click', function(){
    // Use clear() to remove all keys from localStorage (per instructions)
    localStorage.clear();
    const list = document.querySelector('#nameList');
    list.innerHTML = '';
    window.alert('Local storage cleared.');
});
})

// Class work
/* 
    Using the getitem() and the clear() methods of web storage apply the above methods to the below;
    1. Enter in three diffeent names and click on save each time a name get entered inside the  input element.
    2.With the use of the getitem() ensure that when you click on the get button it grabs all the data in the
    local storage and displays it inside the html document as a list
    3. Finally make use of the clear() to ensure that once a click event occurs on the clear button, all names that are being stored in the local storage should be removed.

    Note : After implementation you can try this out using session storage

*/