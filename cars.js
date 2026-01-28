let pageIndex = 0;

const modelText = document.getElementById("car-model");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const videoPrev = document.getElementById("video-preview");

const carDirectory = [
    {
        model: "BUGATTI BOLIDE",
        carID: "bugatti-bolide",
        preview: "./assets/preview/bugatti-bolide-prev.mp4"
    },
    {
        model: "LOTUS EMIRA",
        carID: "lotus-emira",
        preview: "./assets/preview/lotus-emira-prev.mp4"
    },
    {
        model: "CORVETTE ZR1",
        carID: "corvette-zr1",
        preview: "./assets/preview/corvette-zr1-prev.mp4"
    },
    {
        model: "MCLAREN W1",
        carID: "mclaren-w1",
        preview: "./assets/preview/mclaren-w1-prev.mp4"
    }
]

function CarouselStart() {
    PageUpdate();
    SetActive();
    InitializeButtons();
}

function CarouselNext() {
    if (pageIndex < carDirectory.length - 1) {
        pageIndex++;
        PageUpdate();
        SetInactive(pageIndex - 1);
        SetActive();
    } else {
        pageIndex = 0;
        PageUpdate();
        SetInactive(carDirectory.length - 1);
        SetActive();
    }
}

function CarouselPrev() {
    if (pageIndex > 0) {
        pageIndex--;
        PageUpdate();
        SetInactive(pageIndex + 1);
        SetActive();
    } else {
        pageIndex = carDirectory.length - 1;
        PageUpdate();
        SetInactive(0);
        SetActive();
    }
}

function PageUpdate() {
    videoPrev.src = carDirectory[pageIndex].preview;
    modelText.textContent = carDirectory[pageIndex].model
}

function SetActive() {
    var active = document.getElementById(carDirectory[pageIndex].carID)
    active.classList.add("active");
}

function SetInactive(num) {
    var prev = document.getElementById(carDirectory[num].carID)
    prev.classList.remove("active");
}

function InitializeButtons() {
    nextButton.addEventListener("click", CarouselNext);
    prevButton.addEventListener("click", CarouselPrev);
}

CarouselStart();