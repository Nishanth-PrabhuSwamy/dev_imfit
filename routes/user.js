
/*
 * GET users listing.
 */
var objectControl= require('../routes/dbConn');

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res){
  res.render("login");
};

exports.logout = function(req, res){
req.session.destroy();
res.render('logout');
}

exports.questionnaire = function(req, res){
  res.render("questionnaire");
};

exports.validate_login = function(req, res){
  var email=req.body.email;
  var password=req.body.password;
  var login_type = req.body.login_type;
  if(login_type == 'trainer'){
    objectControl.validateTrainer(function(err,results)
    {
      if(err || results === null)
      {
        res.render('error');
      }
      else
      {
        console.log(results);
        req.session.TrainerEmail = results.email;
        req.session.TrainerFirstname = results.firstname;
        req.session.TrainerLastname = results.lastname;
        console.log(req.session.TrainerEmail);
        res.render('trainer_landingPage');
      }
    },email,password,login_type);
  }
  else if (login_type == 'client') {
    objectControl.validateClient(function(err,results)
    {
      if(err || results === null)
      {
        res.render('error');
      }
      else
      {
        console.log(results);
        req.session.ClientEmail = results.email;
        req.session.ClientFirstname = results.firstname;
        req.session.ClientLastname = results.lastname;
        console.log(req.session.ClientEmail);
        res.render('client_landingPage');
      }
    },email,password,login_type);
  }
  else if (login_type == 'athlete') {
    objectControl.validateAthlete(function(err,results)
    {
      if(err || results === null)
      {
        res.render('error');
      }
      else
      {
        console.log(results);
        req.session.AthleteEmail = results.email;
        req.session.AthleteFirstname = results.firstname;
        req.session.AthleteLastname = results.lastname;
        console.log(req.session.AthleteEmail);
        res.render('athlete_landingPage');
      }
    },email,password,login_type);
  }
};
