const inboxButton = document.querySelector('#menu_inbox'),
      todayButton = document.querySelector('#menu_today'),
      plansButton = document.querySelector('#menu_plans'),
      everButton = document.querySelector('#menu_ever');

const windowInbox = document.querySelector('.mainBlockInbox'),
      windowToday = document.querySelector('.mainBlockToday'),
      windowPlans = document.querySelector('.mainBlockPlans'),
      windowEver = document.querySelector('.mainBlockEver');

const content = document.querySelector('.content');
const blocks = document.querySelectorAll('.main_block');

const taskForm = document.querySelectorAll('.newTask');

let countPriority = 0;

inboxButton.addEventListener('click', (e) =>{
    inboxButton.classList.add('listItemFocus');
    todayButton.classList.remove('listItemFocus');
    everButton.classList.remove('listItemFocus');
    plansButton.classList.remove('listItemFocus');

    blocks.forEach((block) => {
      block.classList.remove('mainBlockActive');
    });
    windowInbox.classList.add('mainBlockActive');

    taskForm.forEach((elem) => {
      elem.querySelector('form').reset();
    });
    taskForm.forEach((elem) => {
        elem.classList.add('hidden');
    });
    countPriority = 0;
});

todayButton.addEventListener('click', (e) =>{
    inboxButton.classList.remove('listItemFocus');
    todayButton.classList.add('listItemFocus');
    everButton.classList.remove('listItemFocus');
    plansButton.classList.remove('listItemFocus');

    blocks.forEach((block) => {
      block.classList.remove('mainBlockActive');
    });
    windowToday.classList.add('mainBlockActive');

    taskForm.forEach((elem) => {
      elem.querySelector('form').reset();
    });
    taskForm.forEach((elem) => {
        elem.classList.add('hidden');
    });
    countPriority = 0;
});

plansButton.addEventListener('click', (e) =>{
    inboxButton.classList.remove('listItemFocus');
    todayButton.classList.remove('listItemFocus');
    everButton.classList.remove('listItemFocus');
    plansButton.classList.add('listItemFocus');

    blocks.forEach((block) => {
      block.classList.remove('mainBlockActive');
    });
    windowPlans.classList.add('mainBlockActive');

    taskForm.forEach((elem) => {
      elem.querySelector('form').reset();
    });
    taskForm.forEach((elem) => {
        elem.classList.add('hidden');
    });
    countPriority = 0;
});

everButton.addEventListener('click', (e) =>{
    inboxButton.classList.remove('listItemFocus');
    todayButton.classList.remove('listItemFocus');  
    plansButton.classList.remove('listItemFocus');
    everButton.classList.add('listItemFocus');

    blocks.forEach((block) => {
      block.classList.remove('mainBlockActive');
    });
    windowEver.classList.add('mainBlockActive');
    
    taskForm.forEach((elem) => {
      elem.querySelector('form').reset();
    });
    taskForm.forEach((elem) => {
        elem.classList.add('hidden');
    });
    countPriority = 0;
});