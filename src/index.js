const holamundo =(name)=>{
    console.log('hola mundo: '+name);
}
const suma =(a,b)=>{
    console.log(a+b);}

    const peticion=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    }

module.exports = {holamundo, suma};