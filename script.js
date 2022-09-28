// ===== SEARCH BAR =====

let menu = document.querySelector('#menu-bars');

menu.onclick = () => {
  search.classList.toggle('active')
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}