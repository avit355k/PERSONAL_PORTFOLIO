//typing animation
var Typed = new Typed('.typing', {
    strings: ['Web Developer', 'Ui Ux Designer', 'Full Stack Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// This script handles the functionality of the project images and their corresponding information display.
document.querySelectorAll('.project-img').forEach((img) => {
    img.addEventListener('click', function () {
        const info = this.parentElement.querySelector('.project-info');
        info.classList.toggle('hidden');
    });
});

//sidebar
const nav = document.querySelector('.nav');
navlist = nav.querySelectorAll('li');
totalNavList = navlist.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector('a');
    a.addEventListener('click', function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section');
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navlist[j].querySelector('a').classList.contains('active')) {
                allSection[j].classList.add('back-section');
            }
            navlist[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglelerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');

}


function updateNav(element) {

    for (let i = 0; i < totalNavList; i++) {
        navlist[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (navlist[i].querySelector('a').getAttribute('href').split('#')[1] === target) {
            navlist[i].querySelector('a').classList.add('active');
        }
    }
}
// more-about-me button
// more-about-me button using data-section-index
document.querySelector('.about-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index');
    console.log("Navigating to section index:", sectionIndex);
    showSection(this);
    updateNav(this);
});

//hire-me button
document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index');
    console.log(sectionIndex);
    showSection(this);
    updateNav(this);
})
// download cv button
document.getElementById('downloadCvBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = './asset/AVIJIT_RESUME.pdf';
    link.download = 'Avijit_Rakshit_CV.pdf'; // Optional: Name the downloaded file
    link.click(); // Simulate a click to trigger the download
});

//navtoggler
const navTogglerBtn = document.querySelector('.nav-toggler'),
    sidebar = document.querySelector('.sidebar');

navTogglerBtn.addEventListener('click', () => {

    asideSectionTogglelerBtn();
})
function asideSectionTogglelerBtn() {
    sidebar.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}
// This script handles the functionality of the contact form submission using Web3Forms API.
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  status.innerHTML = "Sending...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.status === 200) {
      status.innerHTML = "<span style='color:green;'>✔ Message sent successfully!</span>";
      form.reset();
    } else {
      status.innerHTML = `<span style='color:red;'>✖ ${result.message}</span>`;
    }
  } catch (error) {
    status.innerHTML = "<span style='color:red;'>✖ Something went wrong. Please try again later.</span>";
  }
});

// Initialize with all projects visible
const tabs = document.querySelectorAll('.tab');
const dropdown = document.querySelector('.filter-dropdown');
const projects = document.querySelectorAll('.project-item');

// Tab buttons
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    filterProjects(tab.dataset.category);
    dropdown.value = tab.dataset.category; // Sync dropdown with tab
  });
});

// Dropdown change
dropdown.addEventListener('change', () => {
  const category = dropdown.value;
  filterProjects(category);
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.category === category) {
      tab.classList.add('active'); // Sync tab with dropdown
    }
  });
});

function filterProjects(category) {
  projects.forEach(project => {
    project.style.display = (category === 'all' || project.dataset.category === category) ? 'block' : 'none';
  });
}

// JavaScript
document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "index.html"; // Replace with your homepage file name or URL
});
