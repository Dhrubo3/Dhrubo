// eita most important 

function updateDateTime(){
    const  now = new Date();
    document.getElementById("bdTime").innerText = now.toLocaleString() 
}
updateDateTime();
setInterval(updateDateTime, 100)