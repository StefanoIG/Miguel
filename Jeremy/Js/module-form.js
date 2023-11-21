



document.addEventListener('DOMContentLoaded', function() {
    const moduleThemeSelect = document.getElementById('module-theme');
    moduleThemeSelect.addEventListener('change', updateFormFields);

    const form = document.getElementById('module-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implementar lógica para manejar el envío del formulario.
        // Usa SweetAlert para la alerta
        Swal.fire({
            title: 'Success!',
            text: 'Module added successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    });
});

function updateFormFields() {
    const theme = document.getElementById('module-theme').value;
    const additionalFields = document.getElementById('additional-fields');

    additionalFields.innerHTML = ''; // Limpiar campos previos

    if (theme === 'story') {
        addStoryField(additionalFields);
    } else if (theme === 'lessons' || theme === 'story-lessons') {
        addLessonObjectivesField(additionalFields);
        addQuestionField(additionalFields); // Añade la primera pregunta

        // Agregar el botón de "Agregar pregunta" al final
        additionalFields.appendChild(createAddQuestionButton());

        if (theme === 'story-lessons') {
            addStoryField(additionalFields); // Añade campo de texto de historia para 'Story with Lessons'
        }
    }else if (theme === 'listening') {
        addListeningField(additionalFields); // Añade campo para subir audio
        addQuestionField(additionalFields); // Añade la primera pregunta
        additionalFields.appendChild(createAddQuestionButton());
    }
}

function addStoryField(container) {
    container.innerHTML += `
        <div class="form-group">
            <label for="story-text">Story Text</label>
            <textarea id="story-text" class="form-control" placeholder="Enter the story text" required></textarea>
        </div>
        <div class="form-group">
        <label for="story-audio">Story Audio (optional)</label>
        <input type="file" id="story-audio" class="form-control" accept="audio/*">
    </div>

    `;
}

function addLessonObjectivesField(container) {
    container.innerHTML += `
        <div class="form-group">
            <label for="lesson-objectives">Lesson Objectives</label>
            <textarea id="lesson-objectives" class="form-control" placeholder="Enter the lesson objectives" required></textarea>
        </div>
    `;
}

function addQuestionField(container) {
    const questionNumber = document.querySelectorAll('.lesson-question').length + 1;
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('form-group', 'lesson-question');
    questionDiv.innerHTML = `
        <label class='arriba' for="lesson-question-${questionNumber}">Lesson Question ${questionNumber}</label>
        <input type="text" id="lesson-question-${questionNumber}" class="form-control" placeholder="Enter the lesson question" required>
        <label>Answer Choices</label>
        <div class="choices">
            <div>
                <input type="radio" id="choiceA" name="answer" value="A" required>
                <label for="choiceA">A</label>
                <input type="text" class="form-control" placeholder="Choice A" required>
            </div>
            <div>
                <input type="radio" id="choiceB" name="answer" value="B" required>
                <label for="choiceB">B</label>
                <input type="text" class="form-control" placeholder="Choice B" required>
            </div>
            <div>
                <input type="radio" id="choiceC" name="answer" value="C" required>
                <label for="choiceC">C</label>
                <input type="text" class="form-control" placeholder="Choice C" required>
            </div>
            <div>
                <input type="radio" id="choiceD" name="answer" value="D" required>
                <label for="choiceD">D</label>
                <input type="text" class="form-control" placeholder="Choice D" required>
            </div>
        </div>
    `;
    const buttonDiv = container.querySelector('.add-question-btn');
    container.insertBefore(questionDiv, buttonDiv);
}

function createAddQuestionButton() {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('form-group', 'add-question-btn');
    buttonDiv.innerHTML = `
        <button class="btn" type="button" onclick="addQuestionField(this.parentNode.parentNode)">Add Another Question</button>
    `;
    return buttonDiv;
}

function addListeningField(container) {
    container.innerHTML += `
        <div class="form-group">
            <label for="listening-audio">Listening Audio</label>
            <input type="file" id="listening-audio" class="form-control" accept="audio/*" required>
        </div>
    `;
}