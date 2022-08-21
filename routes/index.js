const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Task = require('../models/task');
const sequelize = require('sequelize');
const { Op } = require("sequelize");

router.get('/', async (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/users/login')
  } else {
    let user
    if (req.user.id) {
      user = await User.findOne({ where: {id: req.user.id} })
    } else {
      user = await User.findOne({ where: {email: req.user.username} })
    }
    tasks_number = await user.countTasks({where: {isActive: true}})
    tasks_list = await user.getTasks({
      order: [
        ['isActive', 'DESC'],
        ['createdAt', 'DESC']
      ]
    })
    Date.prototype.addDays = function(days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
  
    today = new Date()
    tomorrow = today.addDays(1)
    yestarday = today.addDays(-1)
    today_tasks_number = await user.countTasks({where: {createdAt: {[Op.between]: [yestarday, tomorrow]}}})
    res.render('index', {
      tasks_list: tasks_list,
      tasks_number: tasks_number,
      today_tasks_number: today_tasks_number,
      user: user
    });
  }
});

module.exports = router;