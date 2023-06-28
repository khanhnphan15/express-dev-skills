var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')
/* GET users listing. */
//GET/todos
router.get('/', skillsCtrl.index);
//GET/todos/new
router.get('/new', skillsCtrl.new);
//GET/todos/new --< this will need to be moved
router.get('/:id', skillsCtrl.show);
//GET/todos/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST /todos
router.post('/', skillsCtrl.create);  // add this route
//DELETE/todos/:id
router.delete('/:id', skillsCtrl.delete);
//PUT/todos/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;





