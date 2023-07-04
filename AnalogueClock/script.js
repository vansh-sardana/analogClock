let clock= setInterval(() => {
    let time = new Date();
    let chour = time.getHours();
    let cmin = time.getMinutes();
    let csec = time.getSeconds();
    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let hTheta = chour * 30 + cmin * 0.5;
    // console.log(hTheta);
    let mTheta = cmin * 6 + 0.1 * csec;
    let sTheta = csec * 6;
    hour.style.transform = `rotate(${hTheta}deg)`;
    min.style.transform = `rotate(${mTheta}deg)`;
    sec.style.transform = `rotate(${sTheta}deg)`;
}, 1000)

