let db = require("../../database/models");
const { Op } = db.Sequelize;


module.exports = {
    list: (req,res) => {
        db.Movies.findAll()
            .then(movies => res.json(movies));
    },
    detail: (req,res) => {
        db.Movies.findByPk(req.params.id,{include:['genre','actors']})
           .then(movie => res.json(movie));
    },
    create: (req,res) => {
        db.Movies.create(req.body)
        .then(newMovie => {
            console.log(newMovie);
            res.json(newMovie)})
        .catch(error=>console.log(error));
    },
    update: (req,res) => {
        let _body = req.body
        db.Movies.update(_body,{
            where: {id: req.params.id}
        })
        .then(() => {
        db.Movies.findByPk(req.params.id,{include:['genre','actors']})
           .then(movie => res.json(movie));
        })
        .catch(error=>console.log(error));
    },
    delete: (req,res) => {
        db.Movies.destroy({where: {id: req.params.id}})
            .then(() => res.send('Movie deleted correctly'))
            .catch(error=>console.log(error));
    },
    addActor: async (req, res) => {
        let movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.body.actor_id);
        await movie.addActors(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        movie = await db.Movies.findByPk(req.params.id);
        res.json(movie);
    },
    updateActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.params.actor_id);
        console.log(req.body.screentime);
        await movie.addActors(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        movie = await db.Movies.findByPk(req.params.id);
        res.json(movie); 
    },
    removeActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.params.actor_id);
        movie.removeActor(actor);
        res.send('Actor removed correctly');
    },
}