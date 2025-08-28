// Web Storage

// Session Storage
// Save data to session storage
document.querySelector('#saveName').addEventListener("click", function(){
    let name = document.querySelector('#username').value;
    /*
    sessionStorage.setItem("username", name);
    window.alert("Name saved in sessionStorage");
    */
   localStorage.setItem("username", name);
    window.alert("Name saved in localStorage");
    
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