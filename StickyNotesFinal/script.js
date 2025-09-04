let userList = [];

function notesAdded(){
   let userInputElement = document.querySelector('.user-input');
   let userInputValue = userInputElement.value;

   if(userInputValue){
    userList.unshift(userInputValue);
    document.querySelector('.user-input').value = '';
   }
   displayNotes();
}

function displayNotes(){
    let userListHTMLString = '';
    for(let i=0;i<=userList.length-1;i++){
        let userListValue = userList[i];
        let userListHTML = functionUserListHTML(userListValue, i);
        userListHTMLString += userListHTML;
    }
    document.querySelector('.notes-output-grid').innerHTML = userListHTMLString;
    
}

function functionUserListHTML(userListValue, index){
    return `<div class="notes-output-grid-card">
                <div class="output-text">
                    <p>${userListValue}</p>
                </div>
                <div class="del-flex">
                    <button class="notes-del" onclick="userList.splice(${index}, 1); displayNotes()">Delete</button>
                </div>
            </div>`;
}