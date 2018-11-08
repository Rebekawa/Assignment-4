var brushProperties = {
    color: 'black',
    width: 6,
    height: 6,
}

var colorButtons = document.getElementsByClassName('color');

for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', chooseColors);

}

var clickCanvas = document.getElementById('screen');
clickCanvas.addEventListener('mousemove', draw);


function chooseColors(e) {
    brushProperties.color = e.target.id;


};
function draw(e) {
    if (event.buttons == 1) {
        var pencil = document.getElementById('screen');
        var newElement = document.createElement('div');
        pencil.appendChild(newElement);
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        console.log(x, y);
        newElement.style.height = brushProperties.height + 'px';
        newElement.style.width = brushProperties.width + 'px';
        newElement.style.backgroundColor = brushProperties.color;
        newElement.style.position = 'absolute';
        newElement.style.left = x + 'px';
        newElement.style.top = y + 'px';
    }

}

function petitEraser(e) {
    brushProperties.color = 'white';
        brushProperties.width = 5;
        brushProperties.height = 5;
        console.log('-');
   

}

var smallEraserButton = document.querySelector('#smallEraser');
smallEraserButton.addEventListener('click', petitEraser);

function grandEraser(e) {
    brushProperties.color = 'white';
        brushProperties.width = 30;
        brushProperties.height = 30;
        console.log('+');
   

}

var bigEraserButton = document.querySelector('#bigEraser');
bigEraserButton.addEventListener('click', grandEraser);

function minus() {

    if (brushProperties.width > 6 && brushProperties.height > 6) {
        brushProperties.width = brushProperties.width - 5;
        brushProperties.height = brushProperties.height - 5;

    }
    else {
        brushProperties.width = brushProperties.width;
        brushProperties.height = brushProperties.height;
    }


}

function plus() {

    if (brushProperties.width < 50 && brushProperties.height < 50) {
        brushProperties.width = brushProperties.width + 5;
        brushProperties.height = brushProperties.height + 5;

    }
    else {
        brushProperties.width = brushProperties.width;
        brushProperties.height = brushProperties.height;
    }

}

var minusButton = document.querySelector('#minusButton');
minusButton.addEventListener('click', minus);

var plusButton = document.querySelector('#plusButton');
plusButton.addEventListener('click', plus);



