// const Movie = require('../models/movie.model');
const Artist = require('../models/artist.model');

/**
 * Function used to create a movie in the Database
 */
exports.create = (req, res) => {
    const movieToCreate = new Movie({
        title: req.body.title,
        director: req.body.director,
        runningTime: req.body.runningTime,
        productionCompany:req.body.productionCompany,
        realeaseDate: req.body.realeaseDate,
        genres: req.body.genres,
        synopsis: req.body.synopsis,
    });

    movieToCreate.save((err, movie) => {
        if(err){
            res.send(err);
        }    
        res.json(movie);
    });
}

/**
 * Function used to fetch all the movies
 */
exports.getAll = (req, res) => {
    Movie.find({}, (err, movies) => {
        if(err){
            res.send(err);
        }    
        res.json({ data : movies});
    });
}

/**
 * Function used to get movie by his Id.
 */
exports.getById = (req, res) => {
    Movie.findById(req.params.movieId).populate('actors').exec((err, movie) => {
        if(err){
            res.send(err);
        }    
        res.json(movie);
    });
}

/**
 * Function used to add actors for a movie
 */
exports.addActor = (req, res) => {

    Artist.count({_id: req.body.artistId}, (err, count)=>{
        if (count==1) {
            Movie.findByIdAndUpdate(req.params.movieId, 
                { $addToSet: { actors: req.body.artistId }}, 
                { new: true}, 
                (err, movie) => {
                    if(err){
                        res.send(err);
                    }
                    res.json(movie);
                });
        } else{
            throw new Error(`The Artist with the id:
            ${req.body.artistId} has already been added to the actors list`) 
        }
    }) 
    
}

exports.removeActor = (req, res) => {

    Movie.findByIdAndUpdate(req.params.movieId, 
        { $pullAll: { actors: [req.params.actorId] } },
        { new: true},
        (err, movie) => {
            if(err){
                res.send(err);
            }
            res.json(movie);
        });
    
}

/**
 * Function used to delete by id a movie.
 */
exports.delete = (req, res) => {
    Movie.findByIdAndDelete(req.params.movieId,
        (err, rider) => {
        if(err){
            res.send(err);
        }
        res.json(rider);
    });
}