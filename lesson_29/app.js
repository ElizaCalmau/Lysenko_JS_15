const body = document.querySelector('body');

function createDot(){
    const dot = document.createElement('div');
    dot.classList.add('dotted');
    document.body.append(dot);
    return dot;
}

const target = body.addEventListener('click', (event) => {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    const myDot = createDot();
    myDot.style.position = 'absolute';
    myDot.style.left = offsetX + 'px';
    myDot.style.top = offsetY + 'px';
    console.log(clickCoordinates);
    console.log(event);
}
)