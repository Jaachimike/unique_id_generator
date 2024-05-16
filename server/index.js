const express = require('express');
const cors = require('cors');
const sequelize = require('./models');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(express.json());
app.use(cors())

app.use('/', userRoutes);

// Syncs the database and starts the server
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});