const profileButton = document.querySelector('#profileOptions'),
      notificationButtons = document.querySelectorAll('.notificationBlue'),
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
        notificationButtons.forEach((notificationButton) => {
            notificationButton.parentElement.querySelector('.notificationWindow').classList.remove('show');
        });
    }
    if (!e.target.closest('#reminder') && !e.target.closest('.reminder')) {
        reminderWindow.classList.remove('show');
    }
    if (!e.target.closest('.sort_button') && !e.target.closest('.sortButtonWindow')) {
        sortButtons.forEach((sortButton) => {
            sortButton.parentElement.querySelector('.sortButtonWindow').classList.remove('show');
        });
    }
});

profileButton.addEventListener('click', (e) => {  
    profileWindow.classList.toggle('show');
});

notificationButtons.forEach((notificationButton) => {
    notificationButton.addEventListener('click', (e) => {
        notificationButton.parentElement.querySelector('.notificationWindow').classList.toggle('show');
    });
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

