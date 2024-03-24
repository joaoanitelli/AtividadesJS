var body = document.querySelector('body');

body.style.width = "100%";
body.style.height = "100vh";
body.style.overflow = "hidden";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";

const main = document.createElement("div");
main.classList.add('main');
main.style.height = '480px';
main.style.width = '400px';
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
main.style.position = 'relative';
main.style.overflow = 'hidden';
body.append(main);

const titulo = document.createElement('h1');
titulo.classList.add('titulo');
titulo.innerHTML = 'Total';
titulo.style.fontFamily = 'Sans-serif';
main.append(titulo);

const recarregar = document.createElement('button');
recarregar.classList.add('recarregar');
recarregar.style.backgroundImage = 'url("../images/reload.png")'
recarregar.style.backgroundSize = 'cover';
recarregar.style.backgroundPostion = 'center';
recarregar.style.height = '22px';
recarregar.style.width = '22px';
recarregar.style.border = 'none';
recarregar.style.cursor = 'pointer';
recarregar.style.backgroundColor = 'transparent';
recarregar.style.position = 'absolute';
recarregar.style.right = '48px'
recarregar.style.top = '28px'
main.append(recarregar);

const total = document.createElement('input');
total.style.padding = '10px'
total.style.width = '64px';
total.disabled = true;
total.value = '0';
total.style.border = '2px solid black';
total.style.borderRadius = '8px';
total.style.fontWeight = 'bold';
main.append(total);

const recurso = document.createElement('div');
recurso.classList.add('recurso');
recurso.style.display = 'flex';
recurso.style.width = '100%';
recurso.style.justifyContent = 'space-around';
recurso.style.marginTop = '28px';
main.append(recurso);

const left = document.createElement('div');
left.classList.add('left');
left.style.display = 'flex';
left.style.flexDirection = 'column';
left.style.alignItems = 'center';
left.style.gap = '28px';
recurso.append(left);

const man = document.createElement('img');
man.classList.add('man');
man.src = '../images/man.png'
man.style.width = '100px'
left.append(man);

const buttonLeft = document.createElement('div');
buttonLeft.style.display = 'flex';
buttonLeft.style.width = '100%';
buttonLeft.style.justifyContent = 'space-around';
buttonLeft.classList.add('buttonLeft');


const moreLeft = document.createElement('button');
moreLeft.innerHTML = '+';
moreLeft.style.fontSize = '16px';
moreLeft.style.backgroundColor = 'green';
moreLeft.style.fontWeight = 'bold';
moreLeft.style.padding = '12px 16px';
moreLeft.style.color = 'white';
moreLeft.style.border = '0';
moreLeft.style.cursor = 'pointer';
moreLeft.style.borderRadius = '100%'
buttonLeft.append(moreLeft);

const lessLeft = document.createElement('button');
lessLeft.innerHTML = '-';
lessLeft.style.fontSize = '16px';
lessLeft.style.fontWeight = 'bold';
lessLeft.style.backgroundColor = 'red';
lessLeft.style.padding = '12px 18px';
lessLeft.style.color = 'white';
lessLeft.style.border = '0';
lessLeft.style.cursor = 'pointer';
lessLeft.style.borderRadius = '100%'
buttonLeft.append(lessLeft);

function more() {
    valueLeft.value = parseInt(valueLeft.value) + 1;
};

left.append(buttonLeft);

function less() {
    if(valueLeft.value > 0) {
        valueLeft.value = parseInt(valueLeft.value) - 1;
    }
};

left.append(buttonLeft);

const textLeft = document.createElement('p');
textLeft.innerHTML = 'Homens';
textLeft.style.fontWeight = 'bold';
textLeft.style.fontFamily = 'Sans-serif';
left.append(textLeft);

const valueLeft = document.createElement('input');
valueLeft.classList.add('valueLeft');
valueLeft.min = '0';
valueLeft.value = '0';
valueLeft.style.padding = '10px';
valueLeft.style.width = '64px'
left.append(valueLeft);

const right = document.createElement('div');
right.classList.add('right');
right.style.display = 'flex';
right.style.flexDirection = 'column';
right.style.alignItems = 'center';
right.style.gap = '28px';
recurso.append(right);


const woman = document.createElement('img');
woman.classList.add('woman');
woman.src = '../images/woman.png';
woman.style.width = '100px'
right.append(woman);

const buttonRight = document.createElement('div');
buttonRight.style.display = 'flex';
buttonRight.style.width = '100%';
buttonRight.style.justifyContent = 'space-around';
buttonRight.classList.add('buttonRight');

const moreRight = document.createElement('button');
moreRight.innerHTML = '+';
moreRight.style.fontSize = '16px';
moreRight.style.backgroundColor = 'green';
moreRight.style.fontWeight = 'bold';
moreRight.style.padding = '12px 16px';
moreRight.style.color = 'white';
moreRight.style.border = '0';
moreRight.style.cursor = 'pointer';
moreRight.style.borderRadius = '100%'
buttonRight.append(moreRight);

function moreR() {
    valueRight.value = parseInt(valueRight.value) + 1;
}

function lessR() {
    if(valueRight.value > 0) {
        valueRight.value = parseInt(valueRight.value) - 1;
    }
}




const lessRight = document.createElement('button');
lessRight.innerHTML = '-';
lessRight.style.fontSize = '16px';
lessRight.style.fontWeight = 'bold';
lessRight.style.backgroundColor = 'red';
lessRight.style.padding = '12px 18px';
lessRight.style.color = 'white';
lessRight.style.border = '0';
lessRight.style.cursor = 'pointer';
lessRight.style.borderRadius = '100%'
buttonRight.append(lessRight);
right.append(buttonRight);



const textRight = document.createElement('p');
textRight.innerHTML = 'Mulheres';
textRight.style.fontWeight = 'bold';
textRight.style.fontFamily = 'Sans-serif';
right.append(textRight);

const valueRight = document.createElement('input');
valueRight.style.padding = '10px'
valueRight.type = 'number';
valueRight.min = '0';
valueRight.value = '0';
valueRight.style.width = '64px';

right.append(valueRight)

function calcularTotal() {
    const valorEsquerda = parseInt(valueLeft.value);
    const valorDireita = parseInt(valueRight.value);
    const resultado = valorEsquerda + valorDireita;

    total.value = resultado.toString();
}

recarregar.addEventListener('click', function () {
    valueLeft.value = 0;
    valueRight.value = 0;
    calcularTotal();
});

moreLeft.addEventListener('click',function() {
    more();
    calcularTotal();
})

lessLeft.addEventListener('click',function() {
    less();
    calcularTotal();
})

moreRight.addEventListener('click',function() {
    moreR();
    calcularTotal();
})

lessRight.addEventListener('click',function() {
    lessR();
    calcularTotal();
})