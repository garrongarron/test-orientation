const circle = document.querySelector('.circle')
function handleMotion(e) {
    let deg = (e.accelerationIncludingGravity.y/9.8)*90
    deg = Math.round(deg)
    circle.innerHTML = deg
    circle.style.transform  = `rotate(${deg}deg)`
    document.body.querySelector('.devicemotion').innerHTML = `
    accelerationIncludingGravity <br />
    x : ${e.accelerationIncludingGravity.x}<br />
    y : ${e.accelerationIncludingGravity.y}<br />
    z : ${e.accelerationIncludingGravity.z}<br />
    `;
}

window.addEventListener("devicemotion", handleMotion)
