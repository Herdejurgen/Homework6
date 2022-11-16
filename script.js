anime({
    targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});

let choreographer = new Choreographer({
    animations: [
        {
            range: [-1, window.innerWidth / 2],
            selector: '#box',
            type: 'change',
            style: 'transform:translateY',
            to: 300,
            unit: 'px'
        }
    ]
})

document.body.addEventListener('mousemove', (e) => {
    choreographer.runAnimationsAt(e.clientX)
})