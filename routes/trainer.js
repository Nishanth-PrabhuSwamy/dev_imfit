var objectControl= require('../routes/dbConn');
exports.listClients = function(req, res){
  objectControl.listClients(function(err,results)
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
  },req.session.TrainerEmail);
};

exports.selectClient = function(req,res){
  req.session.clientName = req.param('id');
  console.log(req.session.clientName);
  res.render('clientFunction');
};

exports.workoutEntered = function(req, res){
res.render('workoutEntered');
}

exports.viewAllResponses = function(req, res){
res.render('viewAllResponses');
}

exports.getFeedback = function(req,res){
  var date = req.body.date;
  console.log(req.session.clientName);
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
  },date,req.session.clientName);
};


exports.recieveWorkout = function(req,res){
  var new_workout = req.body;
  console.log(new_workout['client']);
  if(!(new_workout['client'])){

    new_workout['client']=req.session.clientName;
  }
  if(new_workout['date_sent'])
  {
    console.log("Date_sent: ",new_workout['date_sent']);
    objectControl.insertSentDates(function(err){
      if(err)
      {
          res.render('error');
      }
      else
      {
        console.log('Inserted successfully');
      }
    },new_workout['date_sent'],req.session.clientName);

  }
  var workout_date = new_workout['date'];
  console.log("new workout: ",new_workout);

  objectControl.insertWorkoutDates(function(err){
    if(err)
    {
        res.render('error');
    }
    else
    {
      console.log('Inserted successfully');
    }
  },workout_date,new_workout['client']);

  objectControl.insertWorkouts(function(err){
    if(err)
    {
        res.render('error');
    }
    else
    {
      console.log('Inserted successfully');
    }
  },new_workout);
  res.send(200);
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
  },req.session.clientName)
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
  },req.session.clientName)
}

exports.getSentDates = function(req,res){
  objectControl.getSentDates(function(err,results)
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
  },req.session.clientName)
}
exports.recieveTemplate = function(req,res){
  var new_workout = req.body;
  var id = parseInt(new_workout.id);
  console.log("id: ",typeof(id));
  new_workout.id = id;
  objectControl.insertTemplate(function(err){
    if(err)
    {
       console.log(err);
      res.render('error');
    }
    else
    {
      console.log('Inserted successfully');
    }
  },new_workout);
  res.send(200);
};

exports.getTemplate = function(req,res){
  var id = req.body.id;
  objectControl.getTemplate(function(err,results)
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
  },id);
};

exports.enterTemplate = function(req,res){
  res.render('enterTemplate');
};

exports.viewTemplates = function(req,res){
  res.render('viewTemplates');
}
exports.loadTemplates = function(req,res){
  objectControl.loadTemplates(function(err,results)
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
  })
}

exports.retrieveMaxId = function(req,res){
  objectControl.retrieveMaxId(function(err,results)
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
  })
}

exports.clientWorkoutDetails = function(req,res){
  var date = req.body.date;
  var client = req.session.clientName;
  console.log("Client: ",client);
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
  },date,client);
};

exports.sendToMultiple = function(req,res){
//  res.render('intermediateWorkout');
  res.render('sendToMultiple');
};

exports.intermediateWorkout = function(req,res){
//  res.render('intermediateWorkout');
  res.render('sendWorkout');
};
exports.beginnerWorkout = function(req,res){
  res.render('beginnerWorkout');
};
exports.advancedWorkout = function(req,res){
  res.render('advancedWorkout');
};
exports.MonitorFeedback = function(req,res){
  res.render('MonitorFeedback');
};
exports.EnterWorkout = function(req,res){
  res.render('EnterWorkout');
};
