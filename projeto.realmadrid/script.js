let darkmode = document.querySelector('#darkmode');

darkmode.onclick = ()=>{
    //alert("Dark Mode Ativado!");

    if(darkmode.classList.contains('bx-moon')){
        //alert("Dark Mode Ativado!");
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color'); 
    } else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
}