const menu1 = 'Grilled chicken';
const menu2 = 'Fried chicken';
const menu3 = 'Milk shake';
const menu4 = 'Yam chips';

const todos = ['mankind','women', 'marriage', 'God']; 
todos.push('Ghana')

function addTodo () {
    const element = document.createElement('div'); 
    element.innerText = menu1; 
    document.body.appendChild(element); 
}

addTodo(menu1); 

function arraySum (numArray) {
  let sum = 0; 

  numArray.forEach(function (num){
    sum = sum + num; 
  }); 
  console.log(sum); 
}
arraySum([2,4,39-4]); 

