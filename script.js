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
let navTitle = document.getElementsById('.nav-item1');
navTitle.addEventListener('click', function() {
    alert('hello');
    document.body.style.backgroundColor = 'red';
    console.log('test')
});
