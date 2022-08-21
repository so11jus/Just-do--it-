const sequelize = require('../config/db');
const User = require('./user')
const Task = require('./task')

User.hasMany(Task, {
    foreignKey: 'user_id',
});
Task.belongsTo(User);

sequelize.sync().then((result) => {
    // console.log(result);
});