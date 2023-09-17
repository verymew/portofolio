function menuShow(){
    let menuzinho = document.querySelector('.menu-mobile');
    if(menuzinho.classList.contains('open')){
        menuzinho.classList.remove('open');
    }else {
        menuzinho.classList.add('open');
    }
}