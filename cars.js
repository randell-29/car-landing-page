let pageIndex = 0;

const modelText = document.getElementById("car-model");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const videoPrev = document.getElementById("video-preview");
const audioBGM = document.getElementById("audio-bgm");
const logo = document.getElementById("logo");

const hpText = document.getElementById("hp-value");
const weightText = document.getElementById("weight-value");
const speedText = document.getElementById("speed-value");
const accelText = document.getElementById("accel-value");
const gripText = document.getElementById("grip-value");
const opText = document.getElementById("op-value");

const carDirectory = [
    {
        model: "BUGATTI BOLIDE",
        carID: "bugatti-bolide",
        preview: "./assets/preview/bugatti-bolide-prev.mp4",
        theme: "#152238",
        hoursePower: "1,578 bhp",
        weight: "3,197 lbs",
        topSpeed: "236 mph",
        acceleration: "--",
        grip: "10",
        overallPerformance: "98",
        logo: "./assets/brand/bugatti-logo.png"
    },
    {
        model: "LOTUS EMIRA",
        carID: "lotus-emira",
        preview: "./assets/preview/lotus-emira-prev.mp4",
        theme: "#2e6f40",
        hoursePower: "400 bhp",
        weight: "3,280 lbs",
        topSpeed: "181 mph",
        acceleration: "--",
        grip: "10",
        overallPerformance: "88",
        logo: "./assets/brand/lotus-logo.png"
    },
    {
        model: "CORVETTE ZR1",
        carID: "corvette-zr1",
        preview: "./assets/preview/corvette-zr1-prev.mp4",
        theme: "#e6cc00",
        hoursePower: "1,064 bhp",
        weight: "3,670 lbs",
        topSpeed: "233 mph",
        acceleration: "--",
        grip: "9",
        overallPerformance: "100",
        logo: "./assets/brand/corvette-logo.png"
    },
    {
        model: "MCLAREN W1",
        carID: "mclaren-w1",
        preview: "./assets/preview/mclaren-w1-prev.mp4",
        theme: "#e69b00",
        hoursePower: "1,258 bhp",
        weight: "3,084 lbs",
        topSpeed: "217 mph",
        acceleration: "--",
        grip: "10",
        overallPerformance: "99",
        logo: "./assets/brand/mclaren-logo.png"
    }
]

function CarouselStart() {
    PageUpdate();
    ThemeUpdate();
    SetActive();
    InitializeButtons();
}

function CarouselNext() {
    if (pageIndex < carDirectory.length - 1) {
        pageIndex++;
        PageUpdate();
        ThemeUpdate();
        SetInactive(pageIndex - 1);
        SetActive();
    } else {
        pageIndex = 0;
        PageUpdate();
        ThemeUpdate();
        SetInactive(carDirectory.length - 1);
        SetActive();
    }
}

function CarouselPrev() {
    if (pageIndex > 0) {
        pageIndex--;
        PageUpdate();
        ThemeUpdate();
        SetInactive(pageIndex + 1);
        SetActive();
    } else {
        pageIndex = carDirectory.length - 1;
        PageUpdate();
        ThemeUpdate();
        SetInactive(0);
        SetActive();
    }
}

function PageUpdate() {
    videoPrev.src = carDirectory[pageIndex].preview;
    modelText.textContent = carDirectory[pageIndex].model;
    logo.src = carDirectory[pageIndex].logo;

    hpText.textContent = carDirectory[pageIndex].hoursePower;
    weightText.textContent = carDirectory[pageIndex].weight;
    speedText.textContent = carDirectory[pageIndex].topSpeed;
    accelText.textContent = carDirectory[pageIndex].acceleration;
    gripText.textContent = carDirectory[pageIndex].grip;
    opText.textContent = carDirectory[pageIndex].overallPerformance;

    PLayBGM();
}

function ThemeUpdate() {
    document.documentElement.style.setProperty("--theme", carDirectory[pageIndex].theme);
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

function PLayBGM() {
    audioBGM.play();
}

CarouselStart();