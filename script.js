document.getElementById("red").textContent = "Goodbye world!"

document.getElementById("cuerpo").style.color = "orange"

const click = document.getElementById(`click`);
click.addEventListener(`click`, function () {
    this.style.color = `brown`;
})
