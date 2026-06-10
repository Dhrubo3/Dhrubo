// function openGoogle(){
//     window.open("https://www.google.com/", "_blank", "width=400", "height=300")
// }

// function openFacebook(){
//     window.open("https://www.facebook.com/",  "_blank", "width=400", "height=300");
// }

// function closeWindow(){
//     mywindow.close("https://www.facebook.com/");

// }

// function myFunction() {
//   alert('Hello');
// }

// let myVar = setInterval(myTimer ,3000);
// function myTimer() {
//   const d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
 

function updateBDTime(){
   const now = new Date();
    const options = {
        TimeZone: "Asia/Dhaka",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hours12: true
    
    };
    const bdTime = now.toLocaleString("en-BD", options);
    document.getElementById("bdDateTime").innerText = bdTime;
}
updateBDTime();
setInterval(updateBDTime, 1000);