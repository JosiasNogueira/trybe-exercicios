// const btcBgc = document.getElementById('BackGround-Color');

// const btcFz = document.getElementById('Font-size"');
// const btcLs = document.getElementById('Line-space');
// const btcFf = document.getElementById('Font-family');

// function trocaCorFundo() {
//     btcBgc.style.backgroundColor = 'red';
// } não era esssa a desejada e nem a de baixo mas vamos seguir em frente
const btcBgc = () => {
    const randomColor =
    Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
BackColor.addEventListener('click', btcBgc);
btcBgc();


const parag = document.querySelector('#para');
const CorTexto = document.getElementById('TextColor');

btcTc.addEventListener('click', function(){
   parag.style.color = 'red';
 });
