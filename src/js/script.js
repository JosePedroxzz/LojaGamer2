// arraay de imagens
let imagens=[
    "src/assets/carro1.jpeg",
    "src/assets/carro2.jpeg",
    "src/assets/carro3.jpeg"
];
//posicao que vai criar as imagens
let index=0;
//tempo para trocar as imagens
let tempo = 3000;
//funcao do slideshow
function SlideShow(){
    document.getElementById("imgbanner").src=imagens[index];
//incremento das imagens
    index++;
//estrutura condicional if
    if(index == imagens.length){
        index=0;
    }


    setTimeout("SlideShow()",tempo)
}

SlideShow();






const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})