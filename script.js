// --- REVEAL LOGIC ---
window.addEventListener("load", () => {
    // Set the target date
    const revealDate = new Date("2025-11-01T00:00:00");
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
                origin: { x: 1, y: 1 }
            });
        }, 300);

        setTimeout(() => {
            confetti({
                particleCount: 500,
                spread: 70,
                origin: { x: 0.3, y: 1 }
            });
        }, 500);

        setTimeout(() => {
            confetti({
                particleCount: 500,
                spread: 70,
                origin: { x: 0, y: 1 }
            });
        }, 700);

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

    // Hours, minutes, seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const yearsElement = document.getElementById("years");
    yearsElement.textContent = years;

    if (years === 20) {
        yearsElement.style.color = "#d51616ff";
    } else {
        yearsElement.style.color = "black";
    }

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

    if (dots.length > 0) { 
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
    }

    slides[slideIndex - 1].style.display = "block";
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

/* === NEW IMAGE MODAL LOGIC === */

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("fullImage");
const closeImageBtn = document.querySelector(".image-modal-close");

const galleryImages = document.querySelectorAll(".box.center-box4 .pos:not(.no-popup)");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        imageModal.style.display = "block"; 
        modalImage.src = img.src; 
    });
});

function closeImageModal() {
    imageModal.style.display = "none";
}

closeImageBtn.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        closeImageModal();
    }
});
/* === END NEW IMAGE MODAL LOGIC === */
