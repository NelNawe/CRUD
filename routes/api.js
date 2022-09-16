//creer les itinéraire vers les articles 

const express = require('express')
var router = express()
const create = require('../controller/suivi')
const view = require('../controller/suivi')
const bodyparser = require('body-parser');
const update = require('../controller/suivi')
const remove = require('../controller/suivi')
router.use(bodyparser.json())
router.post('/create',create.create)
//récuperer les données stockées dans la base de données 
router.get('/',view.view)
//mettre à jour un enregistrement
router.patch('/:id',update.update)
//supprimer un article
router.delete('/delete/:id',remove.remove)

module.exports = router





