const priorityButtons = document.querySelectorAll('.priority');


priorityButtons.forEach(btn => {
    btn.addEventListener('click', () =>{
        countPriority++;
        console.log(countPriority);
        if (countPriority == 1) {
            btn.children[1].textContent = 'Низкий приоритет';
            btn.children[0].setAttribute('src', 'img/priority_blue.svg');
            btn.classList.add('priorityBlue');
            btn.classList.remove('priorityYellow');
            btn.classList.remove('priorityRed');
            btn.classList.remove('priorityNone');
        } else if (countPriority == 2) {
            btn.children[1].textContent = 'Средний приоритет';
            btn.children[0].setAttribute('src', 'img/priority_yellow.svg');
            btn.classList.remove('priorityBlue');
            btn.classList.add('priorityYellow');
            btn.classList.remove('priorityRed');
            btn.classList.remove('priorityNone');
        } else if (countPriority == 3) {
            btn.children[1].textContent = 'Высокий приоритет';
            btn.children[0].setAttribute('src', 'img/priority_red.svg');
            btn.classList.remove('priorityBlue');
            btn.classList.remove('priorityYellow');
            btn.classList.add('priorityRed');
            btn.classList.remove('priorityNone');
        } else if (countPriority == 4) {
            btn.children[1].textContent = 'Без приоритета';
            btn.children[0].setAttribute('src', 'img/priority_blue.svg');
            btn.classList.remove('priorityBlue');
            btn.classList.remove('priorityYellow');
            btn.classList.remove('priorityRed');
            btn.classList.add('priorityNone');
            countPriority = 0;
        } 
    });
});

resetButton.forEach(btnRes => {
    btnRes.addEventListener('click', () => {
        countPriority = 0;
        priorityButtons.forEach(btnPr => {
            console.log(btnPr);
            btnPr.children[1].textContent = 'Приоритет';
            btnPr.children[0].setAttribute('src', 'img/priority_blue.svg');
            btnPr.classList.remove('priorityBlue');
            btnPr.classList.remove('priorityYellow');
            btnPr.classList.remove('priorityRed');
            btnPr.classList.add('priorityNone');
        });
    });
});