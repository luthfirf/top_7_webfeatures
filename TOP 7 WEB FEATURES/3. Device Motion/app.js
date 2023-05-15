window.addEventListener('devicemotion', function(event) {
    const el = document.getElementById('motion');
    console.log(event);
    el.innerText = (Math.round((event.acceleration.x + Number.EPSILON) * 100) / 100) + ' m/s2';
    // el.innerText = event.rotationRate.beta;
});

window.navigator.geolocation.getCurrentPosition(console.log)