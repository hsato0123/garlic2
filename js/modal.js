'use strict'

const shapes = ['22dot5','30','36','45','60'];

const createModal = (shape) =>{
  const modal = document.getElementById('modal_' + shape);
  const show = document.getElementById('modal__show_' + shape);
  const close = document.getElementById('modal__close_' + shape);
  const backGround = document.getElementById('modal__background_' + shape);
  

  show.addEventListener('click', () => {
    modal.classList.add('is-show');
    backGround.classList.add('is-show');
    document.body.style.overflowY = 'hidden';
  })

  close.addEventListener('click', () => {
    modal.classList.remove('is-show');
    backGround.classList.remove('is-show');
    document.body.style.overflowY = 'auto';
  })

  backGround.addEventListener('click', () => {
    close.click();
  })

}

for (let shape of shapes){
  createModal(shape);
}

