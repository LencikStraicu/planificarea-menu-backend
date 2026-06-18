// toata informatia petru ce ne trebuie CONTROLLER o gasim aici : https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes
// Контроллеры -функции для получения запрашиваемых данных из моделей, создание HTML страницы, отображающей данные, и возращение их пользователю для просмотра в браузере.


// ca sa lucreze bine, trebuie sa unim Cotroller cu Model
const MenuModel = require('./MenuModel'); // soedineam- unim cu model care la creat,  si il numiesc in baza la numele Model din file MenuModel 

// GET loghika dlea get

module.exports.getMenu = async (req, res) => {
    const myMenu = await MenuModel.find(); // soedineam i iscem v MenuModel
    res.send(myMenu) // poluciaem dostum k tomu cito zdesi napisano v myMeny
}


//POST

module.exports.saveMenu = async (req, res) => {
    const { name } = req.body;                 // {name} ea beru s file MenuModel.   req.body - dlea togo citobi pomeneati/izmeniti
    MenuModel.create({ name })        //sozdodime novoie nazvanie dlea nasego menu, cotoroe dabavim v menu
    .then((data) =>  { console.log("Menu added")
    res.send(data)
    })     // posle izmenenia  hociu poluciti vsiu informaziu cotoroia saderjitisea vo documente
}

//DELETE

module.exports.deleteMenu = async (req, res) => {
    const {_id} = req.body;
    MenuModel.findByIdAndDelete(_id)  // scrie _id, deoarece vreau sa sterd din lista del menu produsul in baza la id, dar in postman id e scris in modul dat  _id , si deaceea trebuie sa fie fix ca in postman,
    .then(() => res.send('Deleted a menu'))
}

//PUT EDIT MODIFICARE

module.exports.editMenu = async (req, res) => {
    const {_id, name} = req.body;   // am scris _id si name, deoarece cind vrem sa modificam ceva trebuie sa avem acces fie la partea care trebuie modificata(in cazul nostru name), si id produsului(_id)
    MenuModel.findByIdAndUpdate(_id, { name })
    .then(() => res.send('Menu Modificat'))
}
