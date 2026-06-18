// u nas ato modeli v nutri shemi(schema), ca sa fim conectati cu Baza de date trebuie de facut anumiti pasi, unul dintre care este sa crrem Model care ne va servi pentru Scheme
//accest file este un Model.
// toata aceasta informatie o gasim aici: https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose  
// acolo este direct structura de cod care trebuie sa o adaugam in file, nu e neaparat sa o cunoastem pederost
//un lucru foarte important ca acolo au utilizat var mongoose = ..... , dar noi o sa folosim const mongoos = ... , adica in loc de var o sa fie const


// Импортировать модуль mongoose
const mongoose = require("mongoose");


//Определяем схему
//var Schema = mongoose.Schema;

const menuSchema = new mongoose.Schema({
    name: {
        type: String, // primim informatia in formatul text
        require: true //  
    }
})


module.exports = mongoose.model("Menu", menuSchema);
//Первый аргумент ("Menu") - уникальное имя создаваемой для модели коллекции(Mongoose создаст коллекцию для модели Menu), 
// второй аргумент (menuSchema) - схема, которая используется для создания модели.