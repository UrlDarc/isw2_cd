// src/server.js
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Lab06 API activa en el puerto ${PORT}`);
});