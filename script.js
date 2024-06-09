// ANCHORS
let navItems = document.querySelectorAll('.nav-item');

navItems.forEach((navItem) => { //apply a EL to each navItem
    navItem.addEventListener('mouseover', showAnchorTitle);
    navItem.addEventListener('mouseout', hideAnchorTitle);
});

function showAnchorTitle(event) {
    let targetId = event.target.getAttribute('href').substring(1);
    let anchorTitle = document.querySelector(`.${targetId}`);
    // anchorTitle.style.display = 'block';
    anchorTitle.classList.add('slide-in');
}

function hideAnchorTitle(event) {
    let targetId = event.target.getAttribute('href').substring(1);
    let anchorTitle = document.querySelector(`.${targetId}`);
    // anchorTitle.style.display = 'none';
    anchorTitle.classList.remove('slide-in');
}


// WELCOME TYPING TEXT
window.onload = function() {
  const text = "<h2> And I'm A Web Development & Cyber Security Student! </h2>";
  let index = 0;
  const timeoutSpeed = 100; 
  const typingElement = document.getElementById("typingEffect");

  function typeEffect() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeEffect, timeoutSpeed);
      }
  }

  typingElement.addEventListener("click", replayEffect);

  function replayEffect() {
    typingElement.innerHTML = "";
    index = 0;
    typeEffect();
}

  typeEffect();
};

// ABOUT ME
document.getElementById('mobileAboutMePara').addEventListener('click', function() {
  const aboutMeSection = document.getElementById('infoSectionMe');
  const skillsSection = document.getElementById('infoSectionSkills');
  aboutMeSection.style.display = aboutMeSection.style.display === 'block' ? 'none' : 'block';
  skillsSection.style.display = 'none';
});

document.getElementById('mobileSkillsMe').addEventListener('click', function() {
  const aboutMeSection = document.getElementById('infoSectionMe');
  const skillsSection = document.getElementById('infoSectionSkills');
  skillsSection.style.display = skillsSection.style.display === 'block' ? 'none' : 'block';
  aboutMeSection.style.display = 'none';
});


// PROJECT
let projectColumns = document.querySelectorAll('.column');

for (const project of projectColumns) {
    project.addEventListener('mouseover', function () {
        for (const projectTitle of projectColumns) {
            projectTitle.classList.remove('enlarged');
        }
        project.classList.add('enlarged');
        
    });
}

function toggleProjectTemplate(templateId) {
    let projectTemplate = document.getElementById(templateId);
    if (projectTemplate.style.display === 'none' || projectTemplate.style.display === '') {
      projectTemplate.style.display = 'flex';
      for (const projectTitle of projectColumns) {
        projectTitle.classList.remove('enlarged');
    }
    } else 
    {
      projectTemplate.style.display = 'none';
    }
  }

//   MAV BAR
const Navicon = document.getElementById('mobileNavBarIcon');
const navBarContents = document.getElementById('navBarContents');
let isDisplayed = false;

Navicon.addEventListener('click', () => {
  if (isDisplayed) {
    navBarContents.style.display = 'none';
    isDisplayed = false;
  } else {
    navBarContents.style.display = 'block';
    isDisplayed = true;
  }
});


// ABOUT ME JS

document.getElementById('mobileAboutMePara').addEventListener('click', function() {
  const aboutMeSection = document.querySelector('.infoSectionMe');
  const skillsSection = document.querySelector('.infoSectionSkills');
  aboutMeSection.style.display = aboutMeSection.style.display === 'block' ? 'none' : 'block';
  skillsSection.style.display = 'none';
});

document.getElementById('mobileSkillsMe').addEventListener('click', function() {
  const aboutMeSection = document.querySelector('.infoSectionMe');
  const skillsSection = document.querySelector('.infoSectionSkills');
  skillsSection.style.display = skillsSection.style.display === 'block' ? 'none' : 'block';
  aboutMeSection.style.display = 'none';
});

// EMAIL PROCESS
function processForm(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const subjectInput = document.getElementById('subject').value;
  const bodyInput = document.getElementById('body').value;

  // REPLKACE
  const subjectProcessed = subjectInput.replace(/\+/g, ' ');

  const subjectEncoded = encodeURIComponent(subjectProcessed);
  const bodyEncoded = encodeURIComponent(bodyInput);

  // MAILTO
  const mailtoLink = `mailto:contact@jholtz.co.uk?subject=${subjectEncoded}&body=${bodyEncoded}`;

  // OPEN USER MAIL CLIENT
  window.location.href = mailtoLink;
}
