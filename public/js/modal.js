
function abrirModal(){
    const janelaModal = document.getElementById('janela-modal')
    
    janelaModal.classList.add('abrir')

    janelaModal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar'){
            janelaModal.classList.remove('abrir')    
        }
})
}

document.addEventListener('DOMContentLoaded', () => {
   
    abrirModal();
});