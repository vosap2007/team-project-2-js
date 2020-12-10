console.log(555);
const refs = {
  openModalBtn: document.querySelector('[data-exit]'),
  closeModalBtn: document.querySelector('[data-modal-logout-close]'),
  backdrop: document.querySelector('[data-modal-logout]'),
};

console.log(refs.backdrop);
console.log(refs.openModalBtn);
console.log(refs.closeModalBtn);

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}
// let response = fetch('https://callboard-backend.herokuapp.com/auth/logout', {
//   method: 'POST',
// });