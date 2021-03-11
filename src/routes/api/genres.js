var express = require('express');
var router = express.Router();
const genresApiController = require('../../controllers/api/genresController');

/***** LISTADO *****/
router.get('/', genresApiController.list)

/***** DETALLE *****/
router.get('/:id', genresApiController.detail)

/***** CREACIÓN *****/
router.post('/', genresApiController.create)


/***** ACTUALIZACIÓN *****/
router.patch('/:id', genresApiController.update)

/***** BORRADO *****/
router.delete('/:id', genresApiController.delete)


module.exports = router;