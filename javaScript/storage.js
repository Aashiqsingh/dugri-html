var a = 15;
var b = 20;


function addUser(){
    localStorage.setItem("a",a);
    localStorage.setItem("b",b);

    // location.reload()
    
}
window.onstorage = ()=>{
    alert("changed");
}
console.log(localStorage.getItem("a"));
console.log(localStorage.getItem("b"));
