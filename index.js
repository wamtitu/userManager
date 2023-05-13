document.addEventListener('DOMContentLoaded',()=>{
     document.getElementById('submit').addEventListener('click', addUser)
    });

let users = [];
const addUser = (e)=>{
 e.preventDefault();
 let newUser = {
    name: document.getElementById('fname').value,
    identity: document.getElementById('idno').value,
    nationality: document.getElementById('country').value,
    Language: document.getElementById('language').value
 }
 users.push(newUser);
 console.log(newUser)
 document.querySelector('form').reset();

 const registeredUsers=document.querySelector('.registered-users');
 users.forEach((item, index)=>{
    const listItem = document.createElement('li');
    listItem.style.listStyle='none';
    listItem.textContent = item.name + '  ' + item.identity+" "+ item.nationality+' '+item.Language;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.style.float='right';
    deleteButton.addEventListener('click', ()=>{
        users.splice(index, 1);
        listItem.remove();
    })
    listItem.appendChild(deleteButton)
    registeredUsers.appendChild(listItem);

    //adding to local storage
    localStorage.setItem('registeredUsers', JSON.stringify(users));
 })
}