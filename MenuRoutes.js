// aici scrim toate marsuruturile/marshrutizatia/link

const { Router } = require('express');
const { getMenu, saveMenu, deleteMenu, editMenu } = require('./MenuController');  //importirovali vsio ato is MenuController
const router =Router();

//soedineam loghicu cotoroia napisano v MenuController s Routes
router.get('/', getMenu);
router.post('/saveMenu', saveMenu)
router.delete('/deleteMenu', deleteMenu)  // router.post('/deleteMenu', deleteMenu) - deseori cind se lucreaza cu stergerea produsului se foloseste metodul:POST, nu metodul:DELETE. Lucreaza bine ambele, asa ca daca o sa vad post cind stergem nu este o greseala
router.put('/editMenu', editMenu) // se poate la fel de facut si cu metodul POST: router.post('/editMenu', editMenu) , o sa lucreze bine

module.exports = router;