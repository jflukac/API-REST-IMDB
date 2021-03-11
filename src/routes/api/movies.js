var express = require('express');
var router = express.Router();
const moviesApiController = require('../../controllers/api/moviesController');

/***** LISTADO *****/
router.get('/', moviesApiController.list)

/***** DETALLE *****/
router.get('/:id', moviesApiController.detail)

/***** CREACIÓN *****/
router.post('/', moviesApiController.create)
router.post("/:id/actor",moviesApiController.addActor)

/***** ACTUALIZACIÓN *****/
router.patch('/:id', moviesApiController.update)

/***** BORRADO *****/
router.delete('/:id', moviesApiController.delete)
router.delete("/:id/actor/:actor_id", moviesApiController.removeActor);

module.exports = router;