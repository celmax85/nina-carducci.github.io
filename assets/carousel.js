let imgslide = document.getElementsByClassName("slide");
let step = 0;
let nbrslide = imgslide.length;
let btnnext = document.querySelector(".btnnext");
let btnprev = document.querySelector(".btnprev");
let intervalId = null;
let indicator = document.querySelectorAll(".indicator-dot");

function deleteActive() {
    for (let i = 0; i < nbrslide; i++) {
        imgslide[i].classList.remove("active");
    }
}

function updateIndicator() {
    for (let i = 0; i < indicator.length; i++) {
        indicator[i].classList.remove("active");
    }
    indicator[step].classList.add("active");
}

function startInterval() {
    intervalId = setInterval(function () {
        step++;
        if (step >= nbrslide) {
            step = 0;
        }
        deleteActive();
        imgslide[step].classList.add("active");
        updateIndicator();
    }, 5000);
}
startInterval();

btnnext.addEventListener("click", function () {
    step++;
    if (step >= nbrslide) {
        step = 0;
    }
    deleteActive();
    imgslide[step].classList.add("active");
    updateIndicator();
    clearInterval(intervalId);
    startInterval();
});

btnprev.addEventListener("click", function () {
    step--;
    if (step < 0) {
        step = nbrslide - 1;
    }
    deleteActive();
    imgslide[step].classList.add("active");
    updateIndicator();
    clearInterval(intervalId);
    startInterval();
});

for (let i = 0; i < indicator.length; i++) {
    indicator[i].addEventListener("click", function () {
        step = i;
        deleteActive();
        imgslide[step].classList.add("active");
        updateIndicator();
        clearInterval(intervalId);
        startInterval();
    });
}
a