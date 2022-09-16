//Déclarer les attribut pour un article 
const artSchema = new mongoose.Schema({
    artTitle: {
      type: String,
      required: true
    },
    
    artLink: {
     type: link,
     required: true
    },
  })
  module.exports = mongoose.model('Art', artSchema)