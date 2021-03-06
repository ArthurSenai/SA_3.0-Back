const router = require('express-promise-router')()
const usuarioController = require('../controllers/usuario.controller')

router.get('/usuario', usuarioController.findAll)
router.get('/usuario/:id', usuarioController.findById)

router.post('/usuario', usuarioController.create)
router.post('/login', usuarioController.login)

router.put('/usuario/:id', usuarioController.update)

router.delete('/usuario/:id', usuarioController.delete) 

module.exports = router

// como fazer o not found ?? - 404

// comandos pro Heroku

// heroku addons:create heroku-postgresql:hobby-dev
// heroku logs --tail
// heroku git:remote -a sa-3-back
