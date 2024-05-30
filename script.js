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

function toggleProjectTemplate() {
    let projectTemplate = document.getElementById('projectTemplate');
    if (projectTemplate.style.display === 'none' || projectTemplate.style.display === '') {
        projectTemplate.style.display = 'flex';
        for (const projectTitle of projectColumns) {
            projectTitle.classList.remove('enlarged');
        }

    } else {
        projectTemplate.style.display = 'none';
    }
}

function toggleProjectTemplate2() {
    let projectTemplate = document.getElementById('projectTemplate2');
    if (projectTemplate.style.display === 'none' || projectTemplate.style.display === '') {
        projectTemplate.style.display = 'flex';
        for (const projectTitle of projectColumns) {
            projectTitle.classList.remove('enlarged');
        }

    } else {
        projectTemplate.style.display = 'none';
    }
}

