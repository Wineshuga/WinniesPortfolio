// Javascript
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', ()=> {
  const sideBar = document.querySelector('.side-bar').classList
  sideBar.toggle('hidden')
  sideBar.toggle('block')
  const hamIcon = document.querySelector('.ham-icon').classList
  hamIcon.toggle('hidden')
  hamIcon.toggle('block')
  const closeIcon = document.querySelector('.close-icon').classList
  closeIcon.toggle('hidden')
  closeIcon.toggle('block')
})
