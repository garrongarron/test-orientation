const circle = document.querySelector('.circle')

function handleMotion(e) {
    const deg = (e.accelerationIncludingGravity.y/9.8)*90
    circle.style.transform = `translate: transform: rotateY(${deg}deg);`
    document.body.querySelector('.devicemotion').innerHTML = `
    accelerationIncludingGravity <br />
    x : ${e.accelerationIncludingGravity.x}<br />
    y : ${e.accelerationIncludingGravity.y}<br />
    z : ${e.accelerationIncludingGravity.z}<br />
   
    `;

}

window.addEventListener("devicemotion", handleMotion)