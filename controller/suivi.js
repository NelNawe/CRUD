const Art = require('../models/articles')
const mongoose = require('mongoose')
//il recherche l'itinéraire  et une fois l'itinéraire  trouvé créée l'article et l'enregistre
function create(req,res,next){
  let artTitle = req.body.artTitle;
  let artLink = req.body.artLink;
  
  let art = new Art({
    artTitle,
    artLink,
  })
  art.save().then((data)=>{
    res.send(data)
  })
}
//fonction pour récupérer chaque élément de la liste d'article
function view(req,res,next){
    Art.find({}).then((data)=>{
      res.send(data)
    })
  }
module.exports.create = create
module.exports.view = view
//fonction pour mettre à jour un enregistrement d'un article
function update(req,res,next){
    Art.findByIdAndUpdate(req.params.id,req.body, (err,art)=>{
      if (err) {
        return res.status(500).send({error: "Problem with Updating the   Article  recored "})
      };
      res.send({success: "Updation successfull"});
    })
  }
  module.exports.update = update

  //supprimer un article 

  function remove(req,res,next){
    Art.findByIdAndDelete(req.params.id, (err,art)=>{
      if(err){
        return res.status(500).send({error: "Problem with Deleting the article recored "})
      }
      res.send({success: 'article deleted successfully'})
    })
  }
  module.exports.remove = remove