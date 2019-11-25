const Artist = require('../models/artist.model');

/**
 * Function used to create an artist in the Database
 */
exports.create = (req, res) => {
    const artistToCreate = new Artist({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        nationality: req.body.nationality
    });

    artistToCreate.save((err, artist) => {
        if(err){
            res.send(err);
        }    
        res.json(artist);
    });
}

/**
 * Function used to fetch all the artists
 */
exports.getAll = (req, res) => {
    Artist.find({}, (err, artists) => {
        if(err){
            res.send(err);
        }    
        res.json({ data : artists});
    });
}

/**
 * Function used to get artist by his Id.
 */
exports.getById = (req, res) => {
    Artist.findById(req.params.artistId, (err, artists) => {
        if(err){
            res.send(err);
        }    
        res.json(artists);
    });
}

/**
 * Function used to delete by id an artist.
 */
exports.delete = (req, res) => {
    Artist.findByIdAndDelete(req.params.artistId,
        (err, rider) => {
        if(err){
            res.send(err);
        }
        res.json(rider);
    });
}