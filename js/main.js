// Select All Element 
let allSpans = document.querySelectorAll(".button span");
let results = document.querySelector(".results > span") // > span mean direct child span 
let theInput = document.getElementById("the-input");


allSpans.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-items")) {
            checkItems();
        }
                if (e.target.classList.contains("add-items")) {
            addItems();
        }
                if (e.target.classList.contains("delete-items")) {
            deleteItems();
        }
                if (e.target.classList.contains("show-items")) {
                    showItems(); 
        }
                if (e.target.classList.contains("remove")) {
                    remove(); 
        }
        
    })
})


// function checkItems() {
//     console.log("check");
//     checkInput();
// }
function addItems() {
        if (theInput.value !== '') {
            localStorage.setItem(theInput.value, "Test")
            results.innerHTML = ` Local storage Items <span>${theInput.value}</span> Add`
            theInput.value = '';
    } else {
        showMessage();
    }
}
function deleteItems() {
        if (theInput.value !== '') {
            if (localStorage.getItem(theInput.value)) {
                localStorage.removeItem(theInput.value);
                results.innerHTML = ` item in local storage with name <span>${theInput.value}</span> Deleted`
                theInput.value = '';
        } else {
            results.innerHTML = ` not found item in local storage with name <span>${theInput.value}</span>`
        }
    } else {
        showMessage();
    }
}
function showItems() {
    if (localStorage.length) {
        results.innerHTML = '';
        console.log(`Found ${localStorage.length} Items`)
        for (let [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span>${key}</span>`;
        }
    } else {
        results.innerHTML = "No Items Found From Clear Items";
    }

}

function showMessage() {
    if (theInput.value === '') {
        results.innerHTML = "the input can not be empty ";
    }
}
function checkItems() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            results.innerHTML = `found item in local storage with name <span>${theInput.value}</span>`
            theInput.value = '';
        } else {
            results.innerHTML = ` not found item in local storage with name <span>${theInput.value}</span>`
        }
    } else {
        showMessage();
    }
}
function remove() {
    if (localStorage.length) {
        localStorage.clear();
        results.innerHTML = "All Items Was Cleared ";
    } else {
        results.innerHTML = "No Items Found ";
    }
}
