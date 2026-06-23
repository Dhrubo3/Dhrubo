function updateDateTime(){
    const now = new Date();
    document.getElementById(`timeDate`).innerText = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 100);