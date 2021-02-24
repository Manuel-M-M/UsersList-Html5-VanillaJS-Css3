// CLASS:

class User {
    constructor (name, firstLastName, secondLastName, email, age, city){
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.nProducts = 0;
    }

    incrementProduct() {
        this.nProducts ++;
    }

    emptyProduct() {
        this.nProducts = 0;
    }
}

// DATA:

const users = [
    new User("Pedro", "Lopez", "Santos", "pls@gmail.com", 54, "Madrid"),
    new User("María", "Trillo", "Torres", "mtt@gmail.com", 31, "Granada"),
    new User("Luis", "Lorite", "Molina", "llm@gmail.com", 25, "Vigo")
]

// SELECTORS:

const userSelect = document.querySelector("#userSelect");
const userList = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

// EVENTS:

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);
userSelect.addEventListener("change", changeUser);

// FUNCTIONS:

// fill select. Declare new variable wich is an array with the values i want to show in HTML.
    selectUsers = ["Pedro Lopez Santos", "María Trillo Torres", "Luís Lorite Molina"];
// Iterate over the new array and crete options for select.
function fillSelect() {
    userSelect.innerHTML = "";
    for(let i = 0; i < selectUsers.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = selectUsers[i];
        opt.value = selectUsers[i];
        userSelect.appendChild(opt);
    }
}

// fill list. Iterate over objects from array users and create li with each user
function fillList(userList, object) {
    userList.innerHTML = ""; 
    for (const property in object) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<b>${property}: </b>${object[property]}`;
        listItem.classList.add("list-group-item");
        userList.appendChild(listItem);
    }
}

// Call to functions
fillSelect(userSelect, users.map( user => user.name));

fillList(userList, users[0]);

// Event Handlers

let selectedUser = users[userSelect.selectedIndex];

function processProducts(e) { // Take the event click. If click incrementButton call function
    if (e.target.id === "incrementButton") // incrementProduct else call function emptyProduct.
        selectedUser.incrementProduct();
     else if (e.target.id === "emptyButton") 
        selectedUser.emptyProduct();
    
    fillList(userList, selectedUser); // Function fillList take userList and selectedUser to in
                                      // increment or empty products.
}

function changeUser(params) {
    selectedUser = users[userSelect.selectedIndex];
    fillList(userList, selectedUser);
}
