const tasks = document.querySelectorAll('.task2')

tasks.forEach((task) => {
    task.querySelector('input').addEventListener('change', (click) => {
        let taskId = task.querySelector('.task-id').textContent
        const request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                task.classList.toggle('disabled_task')
                if (this.response != '0') {
                    document.querySelector('.notificationNumber').textContent = this.response
                } else {
                    document.querySelector('.notificationNumber').textContent = ''
                }
            }
        }
        
        request.open('POST','http://localhost:3000/api/delete-task', true);
        request.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
        request.send(`taskId=${taskId}`) 
    })
})