const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills() {

    skillBars.forEach((bar) => {

        const barPosition = bar.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if (barPosition < screenPosition) {

            const width = bar.dataset.width;

            bar.style.width = width;
        }
    });
}

window.addEventListener("scroll", animateSkills);