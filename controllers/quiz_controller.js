
var models = require('../models/models.js');


//exports.question = function(req, res){
//  res.render('quizes/question', {pregunta: 'Capital de Italia'});
//};

exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(
    function(quiz) {
      if (quiz) {
        req.quiz = quiz;
        next();
      } else { next(new Error('No existe quizId=' + quizId)); }
    }
  ).catch(function(error) { next(error);});
};

// GET /quizes
exports.index = function(req, res) {
  models.Quiz.findAll().then(
    function(quizes) {
      res.render('quizes/index', { quizes: quizes});
    }
  ).catch(function(error) { next(error);})
};

// GET /quizes/:id
exports.show = function(req, res) {
  res.render('quizes/show', { quiz: req.quiz});
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
  var resultado = 'Incorrecto';
  if (req.query.respuesta === req.quiz.respuesta) {
    resultado = 'Correcto';
  }
  res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};


// Multiples preguntas
//exports.show = function(req, res){
//  models.Quiz.find(req.params.quizId).then(function(quiz) {
//     res.render('quizes/show', { quiz: quiz});
//     })
//};

// 1 pregunta en DB.
//exports.question = function(req, res){
//  models.Quiz.findAll().success(function(quiz) {
//     res.render('quizes/question', {pregunta: quiz[0].pregunta});
//     })
//};

// Pregunta inside 
//exports.answer = function(req, res){
//  if (req.query.respuesta === 'Roma') {
//          res.render('quizes/answer', {respuesta: 'Correcto!'});
//} else {
//  res.render('quizes/answer', {respuesta: 'Incorrecto!'});
//}
//};

//Get quizes
//exports.index = function(req, res) {
//  models.Quiz.findAll().then(function(quizes) {
//     res.render('quizes/index.ejs', { quizes: quizes});
//  })
//};

//exports.answer = function(req, res){
//  models.Quiz.find(req.params.quizId).then(function(quiz) {
//  if (req.query.respuesta === quiz.respuesta) {
//          res.render('quizes/answer', { quiz: quiz, respuesta: 'Correcto!'});
//} else {
//  res.render('quizes/answer', {quiz: quiz, respuesta: 'Incorrecto!'});
//}
//})
//};

