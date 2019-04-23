const mongoose = require("../connectionToServer");

var flashcardSchema = new mongoose.Schema({
  tags : {
    type : [{
      key : {
        type : String,
        required : true
      }
    }],
    default : [{
      key : "general"
    }]
  },
  answers : {
    type : [{
      answer : {
        type : String,
        required : true
      },
      correct : {
        type : Boolean,
        defauld : false
      }
    }],
    default : []
  },
  difficulty : {
    type : Number,
    default : 5,
    min : [0, 'difficulty in range 1 - 10'],
    max : [10, 'difficulty in range 1 - 10']
  }
});

flashcardSchema.statics.addFlashCards = async function(flashcards){
  try {
    for(let i=0; i<flashcards.length;i++) {
      var newFlashcard = await new Flashcard(f);
      await newFlashcard.save();
    }
    Promise.resolve();
  } catch(err) {
    return Promise.reject(err);
  }
};

var Flashcard = mongoose.model("Flashcard", flashcardSchema);

module.exports = Flashcard;
