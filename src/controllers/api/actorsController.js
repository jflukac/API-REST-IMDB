let db = require("../../database/models");
const { Op } = db.Sequelize;


module.exports = {
    list: (req,res) => {
        db.Actors.findAll()
        .then(actors => {
            console.log(actors);
            res.json(actors)
        });
    },
    detail: (req,res) => {
        db.Actors.findByPk(req.params.id,{include:['favorite','movies']})
           .then(actor => res.json(actor));
    },
    create: (req,res) => {
        db.Actors.create(req.body)
        .then(newActor => {
            res.json(newActor)})
        .catch(error=>console.log(error));
    },
    update: (req,res) => {
        let _body = req.body
        db.Actors.update(_body,{
            where: {id: req.params.id}
        })
        .then(() => {
        db.Actors.findByPk(req.params.id,{include:['favorite','movies']})
           .then(actor => res.json(actor));
        })
        .catch(error=>console.log(error));
    },
    delete: (req,res) => {
        db.Actors.destroy({where: {id: req.params.id}})
            .then(() => res.send('Actor deleted correctly'))
            .catch(error=>console.log(error));
    }
}