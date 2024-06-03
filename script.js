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


// WELCOME
let type = document.getElementById('type')

function OnOff() {
  if (type.style.visibility === 'hidden') {
      type.style.visibility = 'visible'
  } else {
    type.style.visibility = 'hidden'
  }
}

setInterval(OnOff, 500)

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
let navTitle = document.getElementsById('.nav-item1');
navTitle.addEventListener('click', function() {
    alert('hello');
    document.body.style.backgroundColor = 'red';
    console.log('test')
});

// MOBILE NAV BAR
// let mobileNavPress = document.getElementById('mobileNavBarIcon');
// let mobileNavDisplay = mobileNavPress.addEventListener('click', showMobileNav);

// function showMobileNav() {
//   console.log('test');
// }

const mobileNavBarIcon = document.getElementsById('mobileNavBarIcon');
let navBarContent = document.getElemenstById('navBarContents')

mobileNavBarIcon.addEventListener('click', displayNavContents)

function displayNavContents() {
  navBarContent.style.display = 'block'
};

