// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}); let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemsPerSlide = 3; // Number of items per slide

function showSlide(index) {
  // Adjust the current index to stay within bounds
  if (index >= Math.ceil(totalItems / itemsPerSlide)) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = Math.ceil(totalItems / itemsPerSlide) - 1;
  } else {
    currentIndex = index;
  }

  // Calculate the offset to slide items correctly
  const offset = -(currentIndex * 100);
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  updateDots();
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  showSlide(currentIndex);
  updateDots();
});

document.addEventListener("DOMContentLoaded", function () {
  const addSkillBtn = document.getElementById("addSkillBtn");
  const addSkillModal = document.getElementById("addSkillModal");
  const cancelBtn = document.querySelector(".cancel-btn");
  const addSkillForm = document.getElementById("addSkillForm");
  const skillContainer = document.querySelector(".skills-container");

  addSkillBtn.addEventListener("click", function () {
    addSkillModal.style.display = "flex";
  });

  cancelBtn.addEventListener("click", function () {
    addSkillModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === addSkillModal) {
      addSkillModal.style.display = "none";
    }
  });

  addSkillForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(addSkillForm);
    const domain = formData.get("domain");
    const skills = formData.getAll("skill[]");
    const proficiencies = formData.getAll("proficiency[]");

    let toAdd = false;
    const heading = document.createElement("h2");
    heading.innerText = domain;

    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.appendChild(heading);
    for (i = 0; i < 4; i++) {
      if (skills[i].length > 0 && proficiencies[i] > 0) {
        toAdd = true;
        const SkillBar = document.createElement("div");
        SkillBar.classList.add("skill-bar");
        const skillDetail = document.createElement("div");
        skillDetail.classList.add("skill-detail");
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        const skillName = document.createElement("span");
        skillName.classList.add("skill-name");
        const skillPercentage = document.createElement("span");
        skillPercentage.classList.add("skill-percentage");
        const progress = document.createElement("div");
        progress.classList.add("progress");

        skillName.innerText = skills[i];
        skillPercentage.innerText = proficiencies[i] + "%";

        skillDetail.appendChild(skillName);
        skillDetail.appendChild(skillPercentage);
        progress.style.width = proficiencies[i] + "%";
        progressBar.appendChild(progress);
        SkillBar.appendChild(skillDetail);
        SkillBar.appendChild(progressBar);

        skillCard.appendChild(SkillBar);
      }
    }

    if (toAdd) {
      skillContainer.appendChild(skillCard);
    }
    addSkillModal.style.display = "none";
  });
});
