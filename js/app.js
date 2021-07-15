const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item-active");

dark.addEventListener("click", () => {
    console.log("DARK")
    sidebar.className = "sidebar"
    activeListItem = "list-item active"
})

night.addEventListener("click", () => {
    console.log("NIGHT");
    sidebar.className = "sidebar night";
    activeListItem = "list-item active night";
})

light.addEventListener("click", () => {
    console.log("LIGHT")
    sidebar.className = "sidebar light"
    activeListItem = "list-item active light"
})