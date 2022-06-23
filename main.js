const btn = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")
const searchBtn = document.querySelector(".bx-search-alt")
const activeStatus = "active"

btn.addEventListener("click", activeSidebar)

searchBtn.addEventListener("click", () => {
  if(!sidebar.classList.contains(activeStatus)){
    sidebar.classList.add(activeStatus)
  }
})

function activeSidebar(){
  sidebar.classList.toggle(activeStatus)
}