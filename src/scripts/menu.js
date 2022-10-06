document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.querySelector(".models-list-open")
    const modelsMenu = document.querySelector(".models-list")

    openBtn.addEventListener("click", () => {
        modelsMenu.classList.toggle("open")
        openBtn.classList.toggle("active")
    })
})
