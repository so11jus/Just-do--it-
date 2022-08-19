const profileButton = document.querySelector('#profileOptions'),
      notificationButton = document.querySelector('.notificationBlue'),
      reminderButton = document.querySelector('#reminder'),
      sortButtons = document.querySelectorAll('.sort_button');

const reminderExitButtton = document.querySelector('.thanks'),
      notificationAddButton = document.querySelector('#buttonAdd'),
      notificationRemoveButton = document.querySelector('#buttonDelete');

const profileWindow = document.querySelector('.profile'),
      notificationWindow = document.querySelector('.notificationWindow'),
      reminderWindow = document.querySelector('.reminder'),
      sortWindow = document.querySelector('.sortButtonWindow');    

window.addEventListener('click', (e) => {
    if (!e.target.closest('#profileOptions') && !e.target.closest('.profile')) {
        profileWindow.classList.remove('show');
    }
    if (!e.target.closest('.notificationBlue') && !e.target.closest('.notificationWindow')) {
        notificationWindow.classList.remove('show');
    }
    if (!e.target.closest('#reminder') && !e.target.closest('.reminder')) {
        reminderWindow.classList.remove('show');
    }
    if (!e.target.closest('.sort_button') && !e.target.closest('.sortButtonWindow')) {
        sortWindow.classList.remove('show');
    }
});

profileButton.addEventListener('click', (e) => {  
    profileWindow.classList.toggle('show');
});

notificationButton.addEventListener('click', (e) => {
    notificationWindow.classList.toggle('show');
});

reminderButton.addEventListener('click', (e) => {
    reminderWindow.classList.toggle('show');
});

sortButtons.forEach((sortButton) => {
    sortButton.addEventListener('click', (e) => {
        sortButton.parentElement.querySelector('.sortButtonWindow').classList.toggle('show');
    });
});


reminderExitButtton.addEventListener('click', (e) => {
    reminderWindow.classList.remove('show');
});

notificationAddButton.addEventListener('click', (e) => {
    notificationWindow.classList.remove('show');
}); 

notificationRemoveButton.addEventListener('click', (e) => {
    notificationWindow.classList.remove('show');
    document.querySelectorAll('.notificationCheckbox').forEach((e) => {
        let checkbox = e.querySelector('.checkbox');
        console.log(checkbox);
        checkbox.checked = false;
    });
}); 

