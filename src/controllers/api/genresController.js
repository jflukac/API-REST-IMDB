let db = require("../../database/models");
const { Op } = db.Sequelize;


module.exports = {
    list: (req,res) => {
        db.Genres.findAll()
        .then(genres => {
            res.json(genres)
        });
    },
    detail: (req,res) => {
        db.Genres.findByPk(req.params.id,{include:['movies']})
           .then(genre => res.json(genre));
    },
    create: (req,res) => {
        db.Genres.create(req.body)
        .then(newGenre => {
            res.json(newGenre)})
        .catch(error=>console.log(error));
    },
    update: (req,res) => {
        let _body = req.body
        db.Genres.update(_body,{
            where: {id: req.params.id}
        })
        .then(() => {
        db.Genres.findByPk(req.params.id,{include:['movies']})
           .then(genre => res.json(genre));
        })
        .catch(error=>console.log(error));
    },
    delete: (req,res) => {
        db.Genres.destroy({where: {id: req.params.id}})
            .then(() => res.send('Genre deleted correctly'))
            .catch(error=>console.log(error));
    }
}