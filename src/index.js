
function handleFunc(evnet) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    document.body.querySelector('.deviceorientation').innerHTML = JSON.stringify([alpha, beta, gamma]) + `<br />
    var alpha = ${event.alpha};<br />
    var beta = ${event.beta};<br />
    var gamma = ${event.gamma};<br />
    `
    console.log(event);
}

window.addEventListener('deviceorientation', handleFunc, false);

function handleMotion(e) {
    console.log(e);
    document.body.querySelector('.devicemotion').innerHTML = JSON.stringify(e) + `
    <br />
    <br />
    accelerationIncludingGravity <br />
    x : ${e.accelerationIncludingGravity.x}<br />
    y : ${e.accelerationIncludingGravity.y}<br />
    z : ${e.accelerationIncludingGravity.z}<br />
    <br />
    acceleration<br />
    x : ${e.acceleration.x}<br />
    y : ${e.acceleration.y}<br />
    z : ${e.acceleration.z}<br />
    <br />
    rotationRate<br />
    alpha : ${e.rotationRate.alpha}<br />
    beta : ${e.rotationRate.beta}<br />
    gamma : ${e.rotationRate.gamma}<br />
    <br />
    
    `;

}

window.addEventListener("devicemotion", handleMotion)







let abs = document.querySelector('.deviceorientationabsolute')

window.addEventListener("deviceorientationabsolute", (e)=>{
    let compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    abs.style.transform = ` rotate(${-compass}deg)`;
    abs.innerHTML = 'T-'+compass
})


