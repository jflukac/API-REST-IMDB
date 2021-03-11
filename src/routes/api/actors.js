var express = require('express');
var router = express.Router();
const actorsApiController = require('../../controllers/api/actorsController');

/***** LISTADO *****/
router.get('/', actorsApiController.list)

/***** DETALLE *****/
router.get('/:id', actorsApiController.detail)

/***** CREACIÓN *****/
router.post('/', actorsApiController.create)


/***** ACTUALIZACIÓN *****/
router.patch('/:id', actorsApiController.update)

/***** BORRADO *****/
router.delete('/:id', actorsApiController.delete)


module.exports = router;