const express = require('express')
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-09-09&sortBy=publishedAt&apiKey=c0dc81845eb8429c9e2243bb9fa8b124');

   
    const primeraNoticia = response.data.articles[0];
    const { title, description } = primeraNoticia;

    res.json({ title, description });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener noticias');
  }
  
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});