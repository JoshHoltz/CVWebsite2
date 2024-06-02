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

// ANCHOR LINKS
// const anchors = document.getElementsByClassName('anchor');
    
// for (let i = 0; i < anchors.length; i++) {
//   anchors[i].addEventListener('click', function() {

//   });
// }

//   MAV BAR
let navTitle = document.getElementsById('.nav-item1');
navTitle.addEventListener('click', function() {
    alert('hello');
    document.body.style.backgroundColor = 'red';
    console.log('test')
});
