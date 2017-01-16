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
};
