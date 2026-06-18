const express =require('express');
const app= express();

const mongoose = require('mongoose'); // aici importa baza de data mongoose , pe care am instalato in terminal prin comanda npm i mongoose. o so folosim ca baza de data externa, si acum trebuie sa o unim cu proiectul dat pentru a o putea folosi
const routes = require('./MenuRoutes');
const cors = require('cors');

require('dotenv').config(); // unim cu baza de date, soedineam document so bazoi danih // asta este comanda standard care trebui sa o scriu ca sa funzioneze bine colegarea co baza de date
mongoose.set("strictQuery", false);  // aceasta functie ne instaleaza toate noutatile/obnovlenia ca sa functioneze bine unirea/legatura cu baza  de date

const PORT = process.env.port  || 4000; 
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK) // MONGODB_LINK este scris in file .env, de acolo am luat denumirea variabilei
.then(() => console.log('Sunt conectata la baza de date MOngo'))
.catch((err) => console.log(err))



app.use(routes)

app.listen(PORT, () => {
    console.log(`Eu lucree in portul ${PORT}`)
})



// name database: ntustraicu_db_user
// pasw: dNgS7bzm1rM2oDBr