let time = document.getElementById('clock');

let bt = document.getElementById('btn');


function updateTime() {
    let now = new Date();

    let hrs = String(now.getHours()).padStart(2,'0');
    let mins = String(now.getMinutes()).padStart(2,'0');
    let secs = String(now.getSeconds()).padStart(2,'0');

    time.textContent = `${hrs} : ${mins} : ${secs}`;

}


setInterval(updateTime,1000);
updateTime();

