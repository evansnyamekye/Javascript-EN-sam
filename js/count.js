let count = 0; 

function countUp (){
    count += 1; 
    upDateCount(); 
}
function countDown (){
    count -= 1; 
    upDateCount(); 
}


function upDateCount () {
    let counter = document.getElementById('counter'); 
   counter.innerText = count;
}

function displayTitle() {
    let textbox = document.getElementById('todo-list')
    let title = textbox.value; 


    let div = document.createElement('div'); 
    div.innerText = title;
    document.body.appendChild(div); 

}


