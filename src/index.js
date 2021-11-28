
function handleFunc(evnet){
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    document.body.querySelector('.deviceorientation').innerHTML = JSON.stringify([alpha, beta, gamma])
    console.log(event);
}

window.addEventListener('deviceorientation', handleFunc, false);

function handleMotion(e){
    console.log(e);
    document.body.querySelector('.devicemotion').innerHTML = JSON.stringify(e)+`
    
    ${e.acceleration.x}
    ${e.acceleration.y}
    ${e.acceleration.z}
    ${e.rotationRate.alpha}
    ${e.rotationRate.beta}
    ${e.rotationRate.gamma}
    
    
    `;
    
}
window.addEventListener("devicemotion", handleMotion)