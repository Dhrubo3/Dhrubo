function updateClock(){

    const now = new Date();

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("current-date").innerHTML =
        now.toLocaleDateString("en-US", dateOptions);

    document.getElementById("current-time").innerHTML =
        now.toLocaleTimeString();
}

updateClock();

setInterval(updateClock,1000);