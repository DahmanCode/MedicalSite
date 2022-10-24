// const body = document.querySelector("[data-container]");
// const searchInput = document.querySelector("[data-search]");
// let content = [];

// searchInput.addEventListener("input", e => {
//   const value = e.target.value;
//   console.log(value);
// })

// const search = body.textContent;

// console.log(search);

function search() {
  let textToSearch = document.getElementById("search-box").value;
  let paragraph = document.getElementsByClassName("paragraph");
  content.classList.add("paragraph");
  
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  let pattern = new RegExp(`${textToSearch}`,"gi");
  
  paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}

let content = document.getElementsByTagName("p").textContent;
console.log(content);