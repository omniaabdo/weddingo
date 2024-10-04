const app = require('./app');

const PORT = process.env.PORT || 5003; // Change to a different port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});