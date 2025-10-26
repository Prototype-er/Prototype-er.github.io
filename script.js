// --- REVEAL LOGIC ---
window.addEventListener("load", () => {
    // Set the target date
    const revealDate = new Date("2025-11-1T00:00:00");
    const now = new Date();


    if (now >= revealDate) {

        const hiddenContent = document.getElementById("hidden-content");
        if (hiddenContent) {
            hiddenContent.style.display = "block";
        }

        const scrollPrompt = document.getElementById("scroll-prompt");
        if (scrollPrompt) {
            scrollPrompt.style.display = "block";
        }

        confetti({
            particleCount: 500,
            spread: 70,
            origin: { x: 0.7, y: 1 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 500,
                spread: 70,
                origin: { x: 0.3, y: 1 }
            });
        }, 1000);

    } else {
        
        const revealChecker = setInterval(() => {
            const checkNow = new Date();
            if (checkNow >= revealDate) {

                clearInterval(revealChecker); 
                location.reload();           
            }
        }, 1000); 
    }
});
// --- END REVEAL LOGIC ---

const header = document.getElementById("header");
const title = document.getElementById("title");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

/* TIMER */
const startDate = new Date("2005-11-01T00:00:00");

function updateTimer() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonth;
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Weeks and remaining days
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    // Hours, minutes, seconds (from today's time)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update HTML
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = remainingDays;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

/* SLIDE */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}