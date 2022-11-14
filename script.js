const sections = document.querySelectorAll("section");
const searchInput = document.querySelector("[data-search]");
let content = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value;
  console.log(value);
})

  const search = sections.forEach().textContent.trim();
  console.log(search);

const re = /All/g;

const matches = search.matchAll(re);

for (const match of matches) {
  console.log(match);
}



// function search() {
//   let textToSearch = document.getElementById("search-box").value;
//   let paragraph = document.getElementsByClassName("paragraph");
//   content.classList.add("paragraph");
  
//   textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
//   let pattern = new RegExp(`${textToSearch}`,"gi");
  
//   paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
// }

// let content = document.getElementsByTagName("p").textContent;
// console.log(content);


