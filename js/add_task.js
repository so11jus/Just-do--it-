const addButton = document.querySelectorAll('.addTaskButton'),
      reseteButton = document.querySelectorAll('#reseteButton');

console.log(addButton, taskForm);

addButton.forEach(element => {
    element.addEventListener('click', () => {
        taskForm.forEach((elem) => {
            elem.classList.remove('hidden');
        });
    });
});

reseteButton.forEach(element => {
    element.addEventListener('click', () => {
        taskForm.forEach((elem) => {
            elem.querySelector('form').reset();
        });
        taskForm.forEach((elem) => {
            elem.classList.add('hidden');
        });
    });
});