var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/LoginController');
var CadastroController = require('../controllers/CadastroController');
var JogosController = require('../controllers/JogosController');
var TimesController = require('../controllers/TimesController');
var CadastroTimesController = require('../controllers/CadastroTimesController');
var passwordController = require('../controllers/passwordController');
const perfilJogadorController = require('../controllers/perfilJogadorController');
const pesquisaController = require('../controllers/pesquisaController');
const auth = require ('../configs/auth.js')
const upload = require('../configs/uploads')




/* GET home page. */
router.get('/', LoginController.login);
router.post('/', LoginController.store);
router.get('/sair', LoginController.sair);

router.get('/consulta', LoginController.consulta);

router.post('/forgot_password', passwordController.forgotPass);
router.get('/reset_password/:token', passwordController.resetPassword_get);
router.post('/reset_password', passwordController.resetPassword_post);

router.get('/cadastro', CadastroController.cadastro);
router.post('/cadastro', CadastroController.store);

router.get('/atualizar',auth,CadastroController.atualizar);
router.post('/atualizar',upload.any(),auth, CadastroController.update);


router.get('/jogos', auth, JogosController.index);


router.get('/times', auth, TimesController.index);
router.get('/times/:id/ingressar', auth, TimesController.ingressar);

router.get('/time/cadastro', auth, CadastroTimesController.cadastro);
router.post('/time/cadastro', auth, upload.any(), CadastroTimesController.store);

router.get('/time/editar/:id', auth, CadastroTimesController.editar);
router.post('/time/editar/:id', auth, upload.any(), CadastroTimesController.atualizar);

router.get('/time/exibir/:id', auth, TimesController.exibir);

router.get('/perfilJogador/:id?',auth, perfilJogadorController.index);
router.post('/perfilJogador/comentario',auth, perfilJogadorController.createComentario);
router.post('/perfilJogador/like',auth, perfilJogadorController.likePostPerfilJogador);

router.post('/perfilJogador/seguir',auth, perfilJogadorController.seguirPerfilJogador);
router.post('/perfilJogador/deixarseguir',auth, perfilJogadorController.deixarSeguirPerfilJogador);

router.get('/pesquisa',auth, pesquisaController.index);


//Abaixo temos o codigo inicial criado pelo express generator
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
