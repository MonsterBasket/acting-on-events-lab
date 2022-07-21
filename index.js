let airborne = false;

document.addEventListener("keydown", (event) => {
if (event.key === 'ArrowLeft'){
    moveDodger(-1)
}
else if (event.key === 'ArrowRight'){
    moveDodger(1)
}
else if (event.key === 'ArrowUp'){
    jump()
}
});

function moveDodger(direction){
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left <= 0) left = 0;
    if (left >= 360) left = 360;
    dodger.style.left = `${left + direction}px`;
}
function jump(){
    let ascend = false;
    let newDistance;
    if (!airborne){
    airborne = true;
    ascend = true;
    transition(20);
    }
    function transition(distance){
        clearTimeout();
        const bottomNumbers = dodger.style.bottom.replace("px", "");
        let bottom = parseInt(bottomNumbers, 10);
        dodger.style.bottom = `${bottom + distance}px`;
        if (ascend){
            newDistance = distance * 0.9;
        }
        else{
            newDistance = distance / 0.9;
        }
        if (distance - newDistance <= 0.1){
            ascend = false;
            newDistance = -newDistance;
        }
        if (bottomNumbers < 0){
            dodger.style.bottom = "0px";
            airborne = false;
            return;
        }
        setTimeout(() => transition(newDistance), 16)

        if (bottom <= 0) bottom = 0;
        if (bottom >= 360) bottom = 360;
        }
}