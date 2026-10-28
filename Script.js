document.getElementById("eventForm").addEventListener("submit",function(event){
event.preventDefault();
let name=document.getElementById("name").value;
let eventName=document.getElementById("event").value;
document.getElementById("message").textContent="Thank you, "+name+"! Registration successful for "+eventName+".";
this.reset();
});
