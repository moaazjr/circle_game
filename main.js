// keydown event
var circle = document.querySelector('.circle');
var counterx = 0;
var countery = 0;
document.body.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowLeft') {
    counterx--;
    circle.style.left = counterx * 10 + 'px';
    }
    else if (e.code === 'ArrowRight') {
        counterx++;
    circle.style.left = counterx * 10 + 'px';
    }
    else if (e.code === 'ArrowUp') {
    countery--;
    circle.style.top = countery * 10 + 'px';
    }
    else if (e.code === 'ArrowDown') {
        countery++;
        circle.style.top = countery * 10 + 'px';
    }
})

