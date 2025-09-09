let userList = JSON.parse(localStorage.getItem('userList')) || [];
displayNotes();


let userInputElement = document.querySelector('.js-userinput');
let notesAddedElement = document.querySelector('.js-notesadd');

userInputElement.addEventListener('keydown', (event) => {enterButton(event)});
notesAddedElement.addEventListener('click', () => {notesAdded()});

function enterButton(event){
    let input = document.querySelector('.user-input').value;
    if(event.key === 'Enter' && input){
        notesAdded();
    }
}

function notesAdded(){
   let userInputElement = document.querySelector('.user-input');
   let userInputValue = userInputElement.value;

   if(userInputValue){
    userList.push(userInputValue);
    document.querySelector('.user-input').value = '';
   }
   displayNotes();
   localStorage.setItem('userList', JSON.stringify(userList));
}

function displayNotes(){
    let userListHTMLString = '';
    userList.forEach(function(todoValues, index){
        // const { name, value } = todoValues;    
        let userListValue = todoValues;
        let userListHTML = functionUserListHTML(userListValue, index);
        userListHTMLString += userListHTML;
    })

    document.querySelector('.notes-output-grid').innerHTML = userListHTMLString;
    
}

function functionUserListHTML(userListValue, index){
    return `<div class="notes-output-grid-card">
                <div class="output-text">
                    <p>${userListValue}</p>
                </div>
                <div class="del-flex">
                    <button class="notes-del" onclick="userList.splice(${index}, 1); displayNotes(); localStorage.setItem('userList', JSON.stringify(userList));">Delete</button>
                </div>
            </div>`;
}