const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definition of the artist schema
let ArtistSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    birthDate: {type: Date, required: true},
    nationality:{type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Artist', ArtistSchema);