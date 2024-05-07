let personName :string = '';

personName = prompt('Sudais Khan') ||'';
let lowercase :string = personName.toLowerCase() ;
let uppercase :string = personName.toUpperCase() ;

let titlecase :string = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

if(personName !== null && personName !==''){
    alert(`Hello ${personName}, sudais khan:${lowercase}
LowerCase: ${lowercase} 
Uppercasw: ${uppercase}
Titlecase: ${titlecase}`)
}