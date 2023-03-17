const squares = document.querySelectorAll(".container div");

squares.forEach((ev) => {
    ev.addEventListener('mouseover', (ev) => {
        ev.style.backgroundColor = "blue";
    })
})

function turnBlue()