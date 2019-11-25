const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definition of the movie schema
let MovieSchema = new Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    runningTime: {type: Number, required: true},
    productionCompany:{type: String, required: true},
    realeaseDate: {type: Date, required: true},
    genres:{type: [String], required: true},
    actors: [{ type: Schema.Types.ObjectId, ref: 'Artist', sparse: true}],
    synopsis:{type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Movie', MovieSchema);