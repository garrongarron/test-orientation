
function handleFunc(evnet){
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    document.body.innerHTML = JSON.stringify([alpha, beta, gamma])
    
    
    // JSON.stringify(event)
}

window.addEventListener('deviceorientation', handleFunc, false);