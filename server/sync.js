const sequelize = require('./models');
const User = require('./models/user');

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
}).catch(error => {
    console.error('Error creating database:', error);
});