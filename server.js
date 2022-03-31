const app = require('./app');

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})