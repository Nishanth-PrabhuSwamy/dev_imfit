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
exports.viewSentWorkout = function(req, res){
res.render('viewSentWorkout');
}
exports.mealPlanResponse = function(req, res){
res.render('mealPlanResponse');
}

exports.viewAllResponses = function(req, res){
res.render('viewAllResponses');
}
exports.addClient = function(req, res){
res.render('addClient');
}
exports.updateTemplate = function(req, res){
res.render('updateTemplate');
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
  //res.send(200);
  res.status(200).json({status:"ok"});
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
  console.log("id: ",id);
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
  },new_workout)
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
exports.copyTemplate = function(req,res){
//  res.render('intermediateWorkout');
  res.render('copyTemplate');
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
exports.dietLink = function(req,res){
  res.render('dietLink');
};
exports.lowCarb = function(req,res){
  res.render('lowCarb');
};

exports.mediumCarb = function(req,res){
  res.render('medCarb');
};
exports.highCarb = function(req,res){
  res.render('highCarb');
};
exports.refeed = function(req,res){
  res.render('refeed');
};
exports.dietOptions = function(req,res){
  res.render('dietOptions');
};
exports.addPaymentLink = function(req,res){
  res.render('addPaymentLink');
};
exports.addDietForm = function(req, res){
  var diet_link=req.body.diet_link;
  var client = req.session.clientName;

  objectControl.insertDiet(function(err){
    if(err)
    {
       console.log(err);
      res.render('error');
    }
    else
    {
      alert("Inserted successfully");
      console.log('Inserted successfully');
    }
  },diet_link,client);
  res.render('trainer_landingPage');
 };

 exports.addLowCarb = function(req, res){
   var diet_link=req.body.diet_link;
   var client = req.session.clientName;

   objectControl.insertLowDiet(function(err){
     if(err)
     {
        console.log(err);
       res.render('error');
     }
     else
     {
       alert("Inserted successfully");
       console.log('Inserted successfully');
     }
   },diet_link,client);
   res.render('trainer_landingPage');
  };

  exports.addMidCarb = function(req, res){
    var diet_link=req.body.diet_link;
    var client = req.session.clientName;

    objectControl.insertMidDiet(function(err){
      if(err)
      {
         console.log(err);
        res.render('error');
      }
      else
      {
        alert("Inserted successfully");
        console.log('Inserted successfully');
      }
    },diet_link,client);
    res.render('trainer_landingPage');
   };

   exports.addHighCarb = function(req, res){
     var diet_link=req.body.diet_link;
     var client = req.session.clientName;

     objectControl.insertHighDiet(function(err){
       if(err)
       {
          console.log(err);
         res.render('error');
       }
       else
       {
         alert("Inserted successfully");
         console.log('Inserted successfully');
       }
     },diet_link,client);
     res.render('trainer_landingPage');
    };


    exports.refeedDiet = function(req, res){
      var diet_link=req.body.diet_link;
      var client = req.session.clientName;

      objectControl.insertRefeedDiet(function(err){
        if(err)
        {
           console.log(err);
          res.render('error');
        }
        else
        {
          alert("Inserted successfully");
          console.log('Inserted successfully');
        }
      },diet_link,client);
      res.render('trainer_landingPage');
     };

     exports.clientPayment = function(req, res){
       var paymentLink=req.body.paymentLink;
       var client = req.session.clientName;

       objectControl.addClientPayment(function(err){
         if(err)
         {
            console.log(err);
           res.render('error');
         }
         else
         {
           alert("Inserted successfully");
           console.log('Inserted successfully');
         }
       },paymentLink,client);
       res.render('trainer_landingPage');
      };

exports.addClient_data = function(req, res){
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  var email=req.body.email;
  var password=req.body.password;
  var trainer= req.session.TrainerEmail;

  objectControl.insertClient(function(err){
    if(err)
    {
       console.log(err);
      res.render('error');
    }
    else
    {
      alert("Inserted successfully");
      console.log('Inserted successfully');

    }
  },firstname,lastname,email,password,trainer);
  res.render('trainer_landingPage');
 };

 exports.getClientDiet = function(req,res){
   var client = req.session.clientName;
   objectControl.getDiet(function(err,results)
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
   },client);
 };

 exports.deleteWorkout = function(req,res){
  var date = req.body.date;
   var client = req.session.clientName;
   console.log(date, client);
     objectControl.deleteWorkoutDates(function(err){
       if(err)
       {
           res.render('error');
       }
       else
       {
         console.log('Deleted Date successfully');
       }
     },date,client);


   objectControl.deleteWorkout(function(err){
     if(err)
     {
         res.render('error');
     }
     else
     {
       console.log('Deleted successfully');
     }
   },date,client);

   res.status(200).json({status:"ok"});
 };
