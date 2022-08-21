const addButtons = document.querySelectorAll('.addTaskButton'),
      resetButton = document.querySelectorAll('#reseteButton');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        taskForm.forEach((elem) => {
            elem.classList.remove('hidden');
        });
        const blockHeight = btn.closest('.main_block').scrollHeight;
        if (blockHeight >= 700) {
            btn.classList.add('addTaskButtonFixed');
        } else {
            btn.classList.remove('addTaskButtonFixed');
        }
    });
});

resetButton.forEach(element => {
    element.addEventListener('click', () => {
        taskForm.forEach((elem) => {
            elem.querySelector('form').reset();
        });
        taskForm.forEach((elem) => {
            elem.classList.add('hidden');
        });
    });
});


