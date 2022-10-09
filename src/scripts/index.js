let totalModelsCount
let loadedModelsCount = 0
let loadingStatus
let loaderBlur
let modelInfo
let modelNameContainer

document.addEventListener("DOMContentLoaded", () => {
    totalModelsCount = document.querySelectorAll("a-marker").length
    loadingStatus = document.querySelector(".loading-model-status")
    loaderBlur = document.querySelector(".preloader-blur")
    modelInfo = document.querySelector(".model-info-bar")
    modelNameContainer = modelInfo.querySelector("p")

    loadingStatus.textContent = `Загружено моделей: 0/${totalModelsCount}`
})

AFRAME.registerComponent('foo', {
    init: function () {
        this.el.addEventListener('model-loaded', e => {
            console.log(this.el.id, totalModelsCount)
            loadedModelsCount += 1
            if (loadedModelsCount == totalModelsCount) {
                loadingStatus.textContent = "Все модели загружены!"
                setTimeout(() => {
                    loaderBlur.classList.add("disabled")
                }, 2000)
            } else {
                loadingStatus.textContent = `Загружено моделей: ${loadedModelsCount}/${totalModelsCount}`
            }
        })
    }
})

AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.addEventListener("markerFound", () => {
            modelNameContainer.textContent = this.el.id
            modelInfo.classList.add("active")
        })
        this.el.addEventListener("markerLost", () => {
            modelInfo.classList.remove("active")
            modelNameContainer.textContent = ""
        })
    }
})

