function showMessage(){
alert("All Internship Tasks Completed ✅");
}

// DARK MODE
function toggleMode(){
document.body.classList.toggle("dark");
}

// LIVE CLOCK
setInterval(()=>{
let time=new Date().toLocaleTimeString();
document.getElementById("clock").innerHTML="Time : "+time;
},1000);