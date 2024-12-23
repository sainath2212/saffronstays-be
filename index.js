const express = require('express');
const app = express();

const roomRoutes = require('./src/routes/roomRoutes');

app.use('/', roomRoutes);

app.use('/',(req,res)=>{
    res.status(200).json({"message" : "Welcome to SaffronStays"})
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
