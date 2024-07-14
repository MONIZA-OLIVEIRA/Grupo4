function abrirModal(){
    const janelaModal = document.getElementById('janela-modal')
    
    janelaModal.classList.add('abrir')

    janelaModal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar'|| e.targert.id =='janela-modal'){
            janelaModal.classList.remove('abrir')    
        }
})
}