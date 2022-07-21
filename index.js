document.addEventListener("keydown", (event) => {
if (event.key === 'ArrowLeft'){
    moveDodger(-1)
}
else if (event.key === 'ArrowRight'){
    moveDodger(1)
}
});

function moveDodger(direction){
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left <= 0) left = 0;
    if (left >= 360) left = 360;
    dodger.style.left = `${left + direction}px`;
}