const app = require('./app');

const PORT = process.env.PORT || 5002; // Change to a different port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
