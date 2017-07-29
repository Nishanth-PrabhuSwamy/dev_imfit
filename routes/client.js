var objectControl= require('../routes/dbConn');

exports.selectWorkout = function(req,res){

  res.render('selectWorkout');
};

exports.workoutDetails = function(req,res){
  var date = req.body.date;
  objectControl.workoutDetails(function(err,results)
  {
    if(err || results === null)
    {
      res.render('error');
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  },date,req.session.ClientEmail);
};

exports.viewProgress = function(req, res){
res.render('viewAllResponses');
}

exports.clientDiet = function(req, res){
  res.render("clientDiet");
};

exports.getWorkoutDates = function(req,res){
  objectControl.getWorkoutDates(function(err,results)
  {
    if(err || results === null)
    {
      res.render('error');
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  },req.session.ClientEmail)
}

exports.getDiet = function(req,res){
  objectControl.getDiet(function(err,results)
  {
    if(err || results === null)
    {
      res.send(err);
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  },req.session.ClientEmail)
}

exports.getResponseDates = function(req,res){
  objectControl.getResponseDates(function(err,results)
  {
    if(err || results === null)
    {
      res.render('error');
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  },req.session.ClientEmail)
}


exports.submitFeedback = function(req,res){
  var date = req.body.date;
  var feedback = req.body;
  feedback['client']=req.session.ClientEmail;
  feedback['date']=date;

    objectControl.insertResponseDates(function(err){
      if(err)
      {
          res.render('error');
      }
      else
      {
        console.log('Inserted successfully');
      }
    },feedback);


  objectControl.insertFeedback(function(err){
    if(err)
    {
        res.render('error');
    }
    else
    {
      console.log('Inserted successfully');

    }
  },feedback);
res.status(200).json({status:"ok"});
};

exports.paypal = function(req, res){
res.render('paypal');
}

exports.viewPayment = function(req, res){
res.render('viewPayment');
}

exports.viewYourResponse = function(req, res){
res.render('viewYourResponse');
}

exports.resetPassword = function(req, res){
res.render('reset_password');
}

exports.getPayment = function(req,res){
  objectControl.getPayment(function(err,results)
  {
    if(err || results === null)
    {
      res.render('error');
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  },req.session.ClientEmail);
}
exports.getClientResponse = function(req,res){
  var date = req.body.date;
  objectControl.getFeedback(function(err,results)
  {
    if(err || results === null)
    {
      res.render('error');
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  },date,req.session.ClientEmail);
};
exports.submitPassword = function(req,res){
  var password = req.body.password;
  objectControl.submitPassword(function(err,results)
  {
    if(err || results === null)
    {
      res.render('error');
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  },password,req.session.ClientEmail);
  res.render('client_landingPage');
};
