var mongojs = require('mongojs');
var db = mongojs('mongodb://Nishanth_Prabhuswamy:Avenger101@ds111489.mlab.com:11489/dev_imfit', ['users','trainer','client','athlete','workout','client_feedback','IntermediateWorkout_Template','latest_workout','workout_dates','response_dates','sent_dates']);

function validateTrainer(callback,email,password,membership)
{
  //var mycollection = db.collection('trainer');
  db.trainer.findOne({
    email: email,
    password: password
  }, function(err, doc) {
    callback(err, doc);
  });
}

function workoutDetails(callback,date,client)
{
  //var mycollection = db.collection('workout');
  db.latest_workout.findOne({
    date: date,
    client: client
  }, function(err, doc) {
    callback(err, doc);
  });
}

function getFeedback(callback,date,client)
{
    //var mycollection = db.collection('workout');
    db.client_feedback.findOne({
      date: date,
      client: client
    }, function(err, doc) {
      callback(err, doc);
    });

}

function getWorkoutDates(callback,client)
{
    //var mycollection = db.collection('workout');
    db.workout_dates.find({
      client: client
    }, function(err, doc) {
      callback(err, doc);
    });

}

function insertWorkoutDates(callback,workout_date,client){
  db.workout_dates.remove({
    "date":workout_date,
    "client" :client
  });
  var dates = {};
  dates['date'] = workout_date;
  dates['client'] = client;
  db.workout_dates.insert(dates, function(err, result) {
    console.log("Inside insert!!");

   if(err) { console.log(err); }
   else {
     console.log(" successfully Inserted workout");
   }
  });
}

function getResponseDates(callback,client)
{
    //var mycollection = db.collection('workout');
    db.response_dates.find({
      client: client
    }, function(err, doc) {
      callback(err, doc);
    });

}

function insertResponseDates(callback,feedback){
  db.response_dates.remove({
    "date":feedback['date'],
    "client" :feedback['client']
  });
  var dates = {};
  dates['date'] = feedback['date'];
  dates['client'] = feedback['client'];
  db.response_dates.insert(dates, function(err, result) {
    console.log("Inside insert!!");

   if(err) { console.log(err); }
   else {
     console.log(" successfully Inserted response");
   }
  });
}

function insertSentDates(callback,date,client){
  db.sent_dates.remove({
    "date":date,
    "client" :client
  });
  var dates = {};
  dates['date'] = date;
  dates['client'] = client;
  db.sent_dates.insert(dates, function(err, result) {
    console.log("Inside insert!!");

   if(err) { console.log(err); }
   else {
     console.log(" successfully Inserted response");
   }
  });
}

function getSentDates(callback,client)
{
    //var mycollection = db.collection('workout');
    db.sent_dates.find({
      client: client
    }, function(err, doc) {
      callback(err, doc);
    });

}

function validateClient(callback,email,password,membership)
{
  //var mycollection = db.collection('client');
  db.client.findOne({
    email: email,
    password: password
  }, function(err, doc) {
    callback(err, doc);
  });
}

function validateAthlete(callback,email,password,membership)
{
  //var mycollection = db.collection('athlete');
  db.athlete.findOne({
    email: email,
    password: password
  }, function(err, doc) {
    callback(err, doc);
  });
}

function listClients(callback,trainer)
{
  //var mycollection = db.collection('athlete');
  db.client.find({
    trainer_id : trainer
  }, function(err, doc) {
    callback(err, doc);
  });
}


function insertWorkouts(callback,new_workout){
  db.latest_workout.remove({
    "date":new_workout['date'],
    "client" :new_workout['client']
  });
  db.latest_workout.insert(new_workout, function(err, result) {
    console.log("Inside insert!!");

   if(err) { console.log(err); }
   else {
     console.log(" successfully Inserted workout");
   }
  });
}
function insertTemplate(callback,new_workout){
  db.IntermediateWorkout_Template.remove({
    "id":new_workout['id']
  });
  db.IntermediateWorkout_Template.insert(new_workout, function(err, result) {
   if(err) {
    console.log(err);
     callback(err); }
     else{
       callback("success");
       console.log("Inserted successfully");
     }
  });
}
function insertFeedback(callback,feedback){
  db.client_feedback.remove({
    "date":feedback['date'],
    "client" :feedback['client']
  });
  db.client_feedback.insert(feedback, function(err, result) {
   if(err) { callback(err); }
  });
}

function getTemplate(callback,id,client)
{
  //var mycollection = db.collection('workout');
  var int_id = parseInt(id);
  db.IntermediateWorkout_Template.findOne({
    id: int_id,
  }, function(err, doc) {
    callback(err, doc);
  });
}

function loadTemplates(callback)
{
  db.IntermediateWorkout_Template.find().sort({id:-1}, function(err, doc) {
    callback(err, doc);
  });
}

function retrieveMaxId(callback){
  db.IntermediateWorkout_Template.find().sort({id:-1},function(err,doc){

    callback(err,doc);
  });
}

exports.retrieveMaxId = retrieveMaxId;
exports.getTemplate=getTemplate;
exports.loadTemplates=loadTemplates;
exports.insertWorkouts = insertWorkouts;
exports.validateTrainer= validateTrainer;
exports.validateClient= validateClient;
exports.validateAthlete= validateAthlete;
exports.listClients= listClients;
exports.workoutDetails= workoutDetails;
exports.insertFeedback = insertFeedback;
exports.getFeedback = getFeedback;
exports.insertTemplate=insertTemplate;
exports.insertResponseDates = insertResponseDates;
exports.getResponseDates = getResponseDates;
exports.insertWorkoutDates = insertWorkoutDates;
exports.getWorkoutDates = getWorkoutDates;
exports.insertSentDates = insertSentDates;
exports.getSentDates = getSentDates;
