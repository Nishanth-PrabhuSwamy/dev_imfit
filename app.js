/**
 *
 Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , trainer = require('./routes/trainer')
  , client = require('./routes/client')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
//app.set('port', process.env.PORT || 80);
app.set('port', process.env.PORT || 3000);

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.cookieParser());
app.use(express.session({secret: 'team_imfit'}));

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/login', user.login);
app.post('/getFeedback',trainer.getFeedback);
app.post('/validate_login', user.validate_login);
app.post('/listClients',trainer.listClients);
app.get('/selectClientId/:id', trainer.selectClient);
app.get('/EnterWorkout', trainer.EnterWorkout);
app.get('/MonitorProgress', trainer.MonitorFeedback);
app.get('/beginnerWorkout', trainer.beginnerWorkout);
app.get('/intermediateWorkout', trainer.intermediateWorkout);
app.get('/advancedWorkout', trainer.advancedWorkout);
app.post('/recieveWorkout',trainer.recieveWorkout);
app.post('/recieveTemplate',trainer.recieveTemplate);
app.get('/getWorkoutDates',trainer.getWorkoutDates);
app.get('/getResponseDates',trainer.getResponseDates);
app.get('/getSentDates',trainer.getSentDates);
app.post('/clientWorkoutDetails',trainer.clientWorkoutDetails);
app.get('/getClientWorkoutDates',client.getWorkoutDates);
app.get('/getClientResponseDates',client.getResponseDates);
app.post('/submitFeedback',client.submitFeedback);
app.get('/selectWorkout',client.selectWorkout);
app.get('/viewAllResponses',trainer.viewAllResponses);
app.get('/viewProgress',client.viewProgress);
app.post('/workoutDetails',client.workoutDetails);
app.post('/getTemplate',trainer.getTemplate);
app.get('/updateTemplate',trainer.updateTemplate);
app.get('/copyTemplate',trainer.copyTemplate);
app.get('/addClient',trainer.addClient);
app.post('/addClient_data',trainer.addClient_data);
app.get('/dietLink',trainer.dietLink);
app.post('/addDietForm',trainer.addDietForm);
app.get('/logout',user.logout);
app.get('/questionnaire',user.questionnaire);
app.get('/retrieveMaxId',trainer.retrieveMaxId);
app.get('/viewTemplates',trainer.viewTemplates);
app.get('/loadTemplates',trainer.loadTemplates);
app.get('/enterTemplate',trainer.enterTemplate);
app.get('/workoutEntered',trainer.workoutEntered);
app.get('/sendToMultiple',trainer.sendToMultiple);
app.get('/clientDiet',client.clientDiet);
app.get('/lowCarb',trainer.lowCarb);
app.get('/mediumCarb',trainer.mediumCarb);
app.get('/highCarb',trainer.highCarb);
app.get('/getDiet',client.getDiet);
app.get('/dietOptions',trainer.dietOptions);
app.post('/addLowCarb',trainer.addLowCarb);
app.post('/addMedCarb',trainer.addMidCarb);
app.post('/addHighCarb',trainer.addHighCarb);
app.get('/refeed',trainer.refeed);
app.post('/refeedDiet',trainer.refeedDiet);
app.get('/mealPlanResponse',trainer.mealPlanResponse);
app.get('/getClientDiet',trainer.getClientDiet);
app.get('/addPaymentLink',trainer.addPaymentLink);
app.get('/paypal',client.paypal);
app.post('/clientPayment',trainer.clientPayment);
app.get('/viewSentWorkout',trainer.viewSentWorkout);
app.post('/clientWorkoutDetails',trainer.clientWorkoutDetails);
app.get('/viewPayment',client.viewPayment);
app.get('/getPayment',client.getPayment);
app.get('/resetPassword',client.resetPassword);
app.post('/submitPassword',client.submitPassword);
app.get('/viewYourResponse',client.viewYourResponse);
app.post('/getClientResponse',client.getClientResponse);
app.post('/deleteWorkout',trainer.deleteWorkout);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
