const express = require('express');
const router = express.Router();
const Task = require('../models/task')
const User = require('../models/user')


router.post('/create-task', async (req, res, next) => {
    let user
    if (req.user.email) {
        user = await User.findOne({
            where: {
                email: req.user.username
            }
        })
    } else {
        user = await User.findOne({
            where: {
                id: req.user.id
            }
        })
    }
    
    await Task.create({
        user_id: user.id,
        title: req.body.newTaskTitle,
        description: req.body.newTaskDescription
    })
    res.redirect('/')
})

router.post('/delete-task', async (req, res, next) => {
    let user
    if (req.user.email) {
        user = await User.findOne({
            where: {
                email: req.user.username
            }
        })
    } else {
        user = await User.findOne({
            where: {
                id: req.user.id
            }
        })
    }
    let task = await Task.findOne({ where: {
        id: req.body.taskId
    }})
    if (user.id == await task.user_id) {
        if (task.isActive) {
            await Task.update( {isActive: false}, { where: {
                id: req.body.taskId
            }})
        } else {
            await Task.update( {isActive: true}, { where: {
                id: req.body.taskId
            }})
        }
        let tasksNumber = await user.countTasks({where: {isActive: true}});
        res.send(`${tasksNumber}`)
    }W
})

module.exports = router;