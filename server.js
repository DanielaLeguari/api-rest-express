//servidor
import app from './src/app.js';
const port = process.env.PORT || 3000; //diferenciação da porta ou ambiente de prod ou local

//definir a porta
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});

