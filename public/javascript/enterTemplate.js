var template_id;
function main_function(){
    var workout=0;
    var set=0;
    var setLen1,setLen2,setLen3,setLen4,setLen5,setLen6,setLen7,setLen8 = 0;
    var setCount = 4;

      $("button[name=addWorkout]").click(function(){
        workout=workout+1;
        set=0;

          $(".workouts").append('<div class="workout'+workout+'"><br/> '+
          '<a class="list-group-item custom" ><span class="glyphicon glyphicon-minus"   name="collapse" id="collapse'+workout+'"  data-selector="'+workout+'"></span><span class="glyphicon glyphicon-plus"   name="expand" id="expand'+workout+'" data-selector="'+workout+'"></span>&nbsp;&nbsp;<b>Enter  Workout: '+ workout+' </b></a>'+
          '<div class="subWorkout'+workout+'"><b> Workout '+workout+': </b></br><textarea rows="2" cols="35" id= "workout_name'+workout+'" name= "workout_name'+workout+'" required></textarea>'+
          '<br/><br/><div class="notes'+workout+'"></div>'+
          '</br> <b> Video Link '+workout+': </b></br><textarea rows="2" cols="35" id= "link'+workout+'" name= "workout_link'+workout+'" required></textarea> <br/>'+
          '</br><p> <b>Target Muscle: </b>'+
            '<select class="right" id="target_muscle'+workout+'" required>'+
               '<option value="Quads">Quads</option>'+
               '<option value="Glutes">Glutes</option>'+
               '<option value="Hamstrings">Hamstrings</option>'+
               '<option value="Chest">Chest</option>'+
               '<option value="Lats">Lats</option>'+
               '<option value="Back">Back</option>'+
               '<option value="Traps">Traps</option>'+
               '<option value="Deltoids">Deltoids</option>'+
               '<option value="Core">Core</option>'+
               '<option value="Forearms">Forearms</option>'+
               '<option value="Biceps">Biceps</option>'+
               '<option value="Triceps">Triceps</option>'+
                '<option value="Calves">Calves</option>'+
                '<option value="Core">Core</option>'+
           '</select></p>'+
           '<p><br/><b>Workout Equipment: </b><select class="right" id= "equipment'+workout+'"><option value="free_weight">Free Weight</option><option value="smith_machine">Smith Machine</option><option value="iso_plate">iso plate</option><option value="iso_pin">iso pin</option><option value="machine">machine</option></select></p>'+
          '<p><br/><b>Workout Type:</b> <select class="right" id= "wk_type'+workout+'"> <option value="maxout">Maxout</option><option value="dropset">Dropset</option></select></p>'+
          '<br/><p><b>Max Weight: </b><input class="number" type="number" id= "max_val'+workout+'" min="1" max="800" required>'+
             ' <select class="right" id="type'+workout+'" name="type'+workout  +'" required>'+
                '<option value="Pin">Pin</option>'+
                '<option value="Pin Per Side">Pin Per Side</option>'+
                '<option value="Dumbbell">Dumbbell</option>'+
                '<option value="Plates">Plates</option>'+
                '<option value="Plates Per Side">Plates Per Side</option>'+
                '<option value="Preset ez bar">Preset Ez Bar</option>'+
                '<option value="Preset straight bar">Preset Straight Bar</option>'+
             '</select></p><br/>'+
             '<p><b>Unit of Weight: </b><select class="right" id= "unit'+workout+'" name="unit'+workout+'" required>'+
                   '<option value="Lbs">Lbs</option>'+
                   '<option value="Kgs">Kgs</option>'+
                '</select></p><br/>'+
          '<p><b>Max Reps: </b><input class="number"  type="number" id= "max_reps'+workout+'" min="1" max="50" required></p><br/>'+
          '<p><b>Rest Time (seconds): </b><input class="number"  type="number" id= "rest'+workout+'" min="1" max="200" required></p><br/>'+
         '<p><b>Weight Increase/ Decrease :</b>'+
           '<select class="right_sm" id="increment'+workout+'" name="increment'+workout+'" required>'+
           '<option value="0">0</option>'+
              '<option value="2.5">2.5</option>'+
              '<option value="5">5</option>'+
              '<option value="7.5">7.5</option>'+
              '<option value="10">10</option>'+
              '<option value="12.5">12.5</option>'+
              '<option value="15">15</option>'+
              '<option value="17.5">17.5</option>'+
              '<option value="20">20</option>'+
              '<option value="22.5">22.5</option>'+
              '<option value="25">25</option>'+
              '<option value="27.5">27.5</option>'+
              '<option value="30">30</option>'+
              '<option value="32.5">32.5</option>'+
              '<option value="35">35</option>'+
              '<option value="37.5">37.5</option>'+
              '<option value="40">40</option>'+
              '<option value="42.5">42.5</option>'+
              '<option value="45">45</option>'+
              '<option value="47.5">47.5</option>'+
              '<option value="50">50</option>'+
              '<option value="52.5">52.5</option>'+
              '<option value="55">55</option>'+
              '<option value="57.5">57.5</option>'+
              '<option value="60">60</option>'+
              '<option value="62.5">62.5</option>'+
              '<option value="65">65</option>'+
              '<option value="67.5">67.5</option>'+
              '<option value="70">70</option>'+
              '<option value="72.5">22.5</option>'+
              '<option value="75">25</option>'+
              '<option value="77.5">27.5</option>'+
              '<option value="80">30</option>'+
              '<option value="82.5">32.5</option>'+
              '<option value="85">35</option>'+
              '<option value="87.5">37.5</option>'+
              '<option value="90">90</option>'+
           '</select>'+
         '</p><br/>'+

         '<p> <b>Reps Increase/Decrease  :</b>'+
           '<select class="right_sm" id="decrement'+workout+'" name="decrement'+workout+'" required>'+
             '<option value="0">0</option>'+
              '<option value="1">1</option>'+
              '<option value="2">2</option>'+
              '<option value="3">3</option>'+
              '<option value="4">4</option>'+
              '<option value="5">5</option>'+
           '</select></br><br/>'+
           '<button id="update'+workout+'" class="update"><b>Update Values</b></button></br></br>'+
           '<button type="button" class="custom-silver" aria-label="Left Align" name="addSet'+workout+'" id="addSet'+workout+'">'+
              '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Set'+
           '</button>&nbsp;&nbsp;'+
           '<button type="button" class="custom-silver" aria-label="Left Align" name="removeSet'+workout+'" id="removeSet'+workout+'">'+
             '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Set'+
           '</button><br/>'+
         '</p>');

        $("#expand"+workout).hide();


        $("span[name = 'expand']").click(function(){

           var wkt = $(this).data('selector');

           $("#expand"+wkt).hide();
           $("#collapse"+wkt).show();
           $(".subWorkout"+wkt).show();
           $(".set"+wkt).show();
         })
         $("span[name = 'collapse']").click(function(){

            var wkt = $(this).data('selector');

            $("#expand"+wkt).show();
            $("#collapse"+wkt).hide();
            $(".subWorkout"+wkt).hide();
            $(".set"+wkt).hide();
          })


         if(workout == 1){
           $(".notes1").append('<p><b> Notes About Grip/ Variation:</b>'+
           ' <textarea rows="4" cols="35" id="notes1" required></textarea></p>');
           $(".workout1").append('<div class="set1"></div></div>');
            setLen1 = setCount;
           for(k = 0; k < setLen1; k++) {
             var curr = k+1;
             var p=workout;
             var set_id = "set1"+curr;
             set = curr;
              $(".set1").append('<div class='+set_id+'><div class="list-group">'+
                           '<br/><a class="list-group-item custom-grey"> <b>Set: '+ curr +'</b></a>'+
                           '<a class="list-group-item"><b> Weight: </b></br><input class="number"  type="number" id= "weight1'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit1'+curr+'" name="unit1'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type1'+curr+'" name="type'+curr+'" required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"> <b>Reps: </b></br><input class="number"  type="number" id="rep1'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest1'+curr+'" min="1" max="200" required >'+
                           '</a></br>'+
                          '</div></div>');
            }
            $("#update1").click(function(){
              var init_weight_1 = $("#max_val1").val();
              var init_reps_1=$("#max_reps1").val();
              var init_type=$("#type1").val();
              var init_unit=$("#unit1").val();
              var init_rest = $("#rest1").val();
              var wk_type=$("#wk_type1").val();
              var incr = $("#increment1").val();
              var decr = $("#decrement1").val();

              var count = setLen1-1;

              for(l=1;l<=setLen1;l++){
                if(wk_type=="maxout")
                {
                   $("#weight1"+l).val(parseFloat(init_weight_1)-(parseFloat(incr)*count));
                   $("#rep1"+l).val(parseFloat(init_reps_1)-(parseFloat(decr)*(l-1)));
                   $("#type1"+l).val(init_type);
                   $("#unit1"+l).val(init_unit);
                   $("#rest1"+l).val(init_rest);

                 }
                 else if (wk_type=="dropset") {
                   set = setLen1;
                   $("#weight1"+(set-l+1)).val(parseFloat(init_weight_1) - (parseFloat(incr)*count));
                   $("#rep1"+(set-l+1)).val(parseFloat(init_reps_1) - (parseFloat(decr)*(l-1)));
                   $("#type1"+l).val(init_type);
                   $("#unit1"+l).val(init_unit);
                   $("#rest1"+l).val(init_rest);
                 }
                 count=count-1;
              }
            })
            $("button[name=addSet1]").click(function(){
            var j = parseInt(setLen1) + 1;
            var set = 'weight1'+j;
            var rep = 'rep1'+j;
            var unit = 'unit1'+j;
            var type = 'type1'+j;
            var rest = 'rest1'+j
            $(".set1").append('<div class="set'+1+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'" ></a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'
            );
            setLen1 = j;
            });


           $("button[name=removeSet1]").click(function(){
           var j = setLen1;
           $("div").remove(".set1"+j);
           setLen1 = parseInt(j) -1;
           });

         }
         if(workout == 2){
           $(".notes2").append('<p><b> Notes About Grip/ Variation:</b></p>'+
           ' <textarea rows="4" cols="30" id="notes2" required></textarea> <br/>');
           $(".workout2").append('<div class="set2"></div></div>');
            setLen2 = setCount;
           for(k = 0; k < setLen2; k++) {
             var curr = k+1;
             var p=workout;
             var set_id = "set2"+curr;
             set = curr;
              $(".set2").append('<div class='+set_id+'><div class="list-group">'+
                           '<a class="list-group-item"><b> Set: '+ curr +' </b></a>'+
                           '<a class="list-group-item"><b> Weight: </b></br><input type="number" id= "weight2'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit2'+curr+'" name="unit2'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type2'+curr+'" name="type2'+curr+'" required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"><b> Reps: </b></br><input type="number" id="rep2'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest2'+curr+'" min="1" max="200" required >'+
                           '</a>'+
                          ' </br></div></div>');
            }
            $("#update2").click(function(){
              var init_weight_2 = $("#max_val2").val();
              var init_reps_2=$("#max_reps2").val();
              var init_type=$("#type2").val();
              var init_unit=$("#unit2").val();
              var init_rest = $("#rest2").val();
              var incr = $("#increment2").val();
              var decr = $("#decrement2").val();
              var count = setLen2-1;
              var wk_type=$("#wk_type2").val();
              for(l=1;l<=setLen2;l++){
                if(wk_type=="maxout")
                {
                   $("#weight2"+l).val(parseFloat(init_weight_2)-(parseFloat(incr)*count));
                   $("#rep2"+l).val(parseFloat(init_reps_2)-(parseFloat(decr)*(l-1)));
                   $("#type2"+l).val(init_type);
                   $("#unit2"+l).val(init_unit);
                   $("#rest2"+l).val(init_rest);

                 }
                 else if (wk_type=="dropset") {
                   set = setLen2;
                   $("#weight2"+(set-l+1)).val(parseFloat(init_weight_2) - (parseFloat(incr)*count));
                   $("#rep2"+(set-l+1)).val(parseFloat(init_reps_2) - (parseFloat(decr)*(l-1)));
                   $("#type2"+l).val(init_type);
                   $("#unit2"+l).val(init_unit);
                   $("#rest2"+l).val(init_rest);
                 }
                 count=count-1;

              }
            })
            $("button[name=addSet2]").click(function(){
            var j = parseInt(setLen2) + 1;
            var set = 'weight2'+j;
            var rep = 'rep2'+j;
            var unit = 'unit2'+j;
            var type = 'type2'+j;
            var rest = 'rest2'+j;
            $(".set2").append('<div class="set'+2+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select class="right-set" id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'" ></a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'

            );
            setLen2 = j;
            });


           $("button[name=removeSet2]").click(function(){
           var j = setLen2;
           $("div").remove(".set2"+j);
           setLen2 = parseInt(j) -1;
           });
         }
         if(workout == 3){
           $(".notes3").append('<p> <b>Notes About Grip/ Variation:</b></p>'+
           ' <textarea rows="4" cols="30" id="notes3" required></textarea> <br/>');
           $(".workout3").append('<div class="set3"></div></div>');
            setLen3 = setCount;
           for(k = 0; k < setLen3; k++) {
             var curr = k+1;
             var p=workout;
             var set_id = "set3"+curr;
             set = curr;
              $(".set3").append('<div class='+set_id+'><div class="list-group">'+
                           '<a class="list-group-item"><b> Set: '+ curr +' </b></a>'+
                           '<a class="list-group-item"><b> Weight: </b></br><input type="number" id= "weight3'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit3'+curr+'" name="unit3'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type3'+curr+'" name=type3'+curr+' " required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"><b> Reps: </b></br><input type="number" id="rep3'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest3'+curr+'" min="1" max="200" required >'+
                           '</a>'+
                          ' </br></div></div>');
            }
            $("#update3").click(function(){
              var init_weight_3 = $("#max_val3").val();
              var init_reps_3=$("#max_reps3").val();
              var init_type=$("#type3").val();
              var init_unit=$("#unit3").val();
              var init_rest = $("#rest3").val();
              var incr = $("#increment3").val();
              var decr = $("#decrement3").val();
              var count = setLen3-1;
              var wk_type=$("#wk_type3").val();
              for(l=1;l<=setLen3;l++){
                if(wk_type=="maxout")
                {
                   $("#weight3"+l).val(parseFloat(init_weight_3)-(parseFloat(incr)*count));
                   $("#rep3"+l).val(parseFloat(init_reps_3)-(parseFloat(decr)*(l-1)));
                   $("#type3"+l).val(init_type);
                   $("#unit3"+l).val(init_unit);
                   $("#rest3"+l).val(init_rest);

                 }
                 else if (wk_type=="dropset") {
                   set = setLen3;
                   $("#weight3"+(set-l+1)).val(parseFloat(init_weight_3) - (parseFloat(incr)*count));
                   $("#rep3"+(set-l+1)).val(parseFloat(init_reps_3) - (parseFloat(decr)*(l-1)));
                   $("#type3"+l).val(init_type);
                   $("#unit3"+l).val(init_unit);
                   $("#rest3"+l).val(init_rest);
                 }
                 count=count-1;
              }
            })

            $("button[name=addSet3]").click(function(){
            var j = parseInt(setLen3) + 1;
            var set = 'weight3'+j;
            var rep = 'rep3'+j;
            var unit = 'unit3'+j;
            var type = 'type3'+j;
            var rest = 'rest3'+j;
            $(".set3").append('<div class="set'+3+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select class="right-set" id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'" ></a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'
            );
            setLen3 = j;
            });


           $("button[name=removeSet3]").click(function(){
           var j = setLen3;
           $("div").remove(".set3"+j);
           setLen3 = parseInt(j) -1;
           });
         }

         if(workout == 4){
           $(".notes4").append('<p> <b>Notes About Grip/ Variation:</b></p>'+
           ' <textarea rows="4" cols="30" id="notes4" required></textarea> <br/>');
           $(".workout4").append('<div class="set4"></div></div>');
            setLen4 = setCount;
           for(k = 0; k < setLen4; k++) {
             var curr = k+1;
             var p=workout;
            var set_id = "set4"+curr;
             set = curr;
              $(".set4").append('<div class='+set_id+'><div class="list-group">'+
                           '<a class="list-group-item"><b> Set: '+ curr +' </b></a>'+
                           '<a class="list-group-item"><b> Weight: </b></br><input type="number" id= "weight4'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit4'+curr+'" name="unit4'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type4'+curr+'" name="type4'+curr+'" required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"><b> Reps: </b></br><input type="number" id="rep4'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest4'+curr+'" min="1" max="200" required >'+
                           '</a>'+
                          ' </br></div></div>');
            }
            $("#update4").click(function(){
              var init_weight_4 = $("#max_val4").val();
              var init_reps_4=$("#max_reps4").val();
              var init_type=$("#type4").val();
              var init_unit=$("#unit4").val();
              var init_rest = $("#rest4").val();
              var incr = $("#increment4").val();
              var decr = $("#decrement4").val();
              var count = setLen4-1;
              var wk_type=$("#wk_type4").val();
              for(l=1;l<=setLen4;l++){

                if(wk_type=="maxout")
                {
                   $("#weight4"+l).val(parseFloat(init_weight_4)-(parseFloat(incr)*count));
                   $("#rep4"+l).val(parseFloat(init_reps_4)-(parseFloat(decr)*(l-1)));
                   $("#type4"+l).val(init_type);
                   $("#unit4"+l).val(init_unit);
                   $("#rest4"+l).val(init_rest);

                 }
                 else if (wk_type=="dropset") {
                   set = setLen4;
                   $("#weight4"+(set-l+1)).val(parseFloat(init_weight_4) - (parseFloat(incr)*count));
                   $("#rep4"+(set-l+1)).val(parseFloat(init_reps_4) - (parseFloat(decr)*(l-1)));
                   $("#type4"+l).val(init_type);
                   $("#unit4"+l).val(init_unit);
                   $("#rest4"+l).val(init_rest);
                 }
                 count=count-1;
              }
            })

            $("button[name=addSet4]").click(function(){
            var j = parseInt(setLen4) + 1;
            var set = 'weight4'+j;
            var rep = 'rep4'+j;
            var unit = 'unit4'+j;
            var type = 'type4'+j;
            var rest = 'rest4'+j;
            $(".set4").append('<div class="set'+4+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select class="right-set" id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'" ></a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'
            );
            setLen4 = j;
            });


           $("button[name=removeSet4]").click(function(){
           var j = setLen4;
           $("div").remove(".set4"+j);
           setLen4 = parseInt(j) -1;
           });
         }
         if(workout == 5){
           $(".notes5").append('<p><b> Notes About Grip/ Variation:</b></p>'+
           ' <textarea rows="4" cols="30" id="notes5" required></textarea> <br/>');
          $(".workout5").append('<div class="set5"></div></div>');
            setLen5 = setCount;
           for(k = 0; k < setLen5; k++) {
             var curr = k+1;
             var p=workout;
              var set_id = "set5"+curr;
             set = curr;
              $(".set5").append('<div class='+set_id+'><div class="list-group">'+
                           '<a class="list-group-item"><b> Set: '+ curr +'</b> </a>'+
                           '<a class="list-group-item"<b> Weight: </b></br><input type="number" id= "weight5'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit5'+curr+'" name="unit5'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type5'+curr+'" name="type5'+curr+'" required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"><b> Reps: </b></br><input type="number" id="rep5'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest5'+curr+'" min="1" max="200" required >'+
                           '</a>'+
                          ' </br></div></div>');
            }
            $("#update5").click(function(){
              var init_weight_5 = $("#max_val5").val();
              var init_reps_5=$("#max_reps5").val();
              var init_type=$("#type5").val();
              var init_unit=$("#unit5").val();
              var init_rest = $("#rest5").val();
              var incr = $("#increment5").val();
              var decr = $("#decrement5").val();
              var wk_type=$("#wk_type5").val();
              var count = setLen5-1;
              for(l=1;l<=setLen5;l++){

                if(wk_type=="maxout")
                {
                   $("#weight5"+l).val(parseFloat(init_weight_5)-(parseFloat(incr)*count));
                   $("#rep5"+l).val(parseFloat(init_reps_5)-(parseFloat(decr)*(l-1)));
                   $("#type5"+l).val(init_type);
                   $("#unit5"+l).val(init_unit);
                   $("#rest5"+l).val(init_rest);

                 }
                 else if (wk_type=="dropset") {
                   set = setLen5;
                   $("#weight5"+(set-l+1)).val(parseFloat(init_weight_5) - (parseFloat(incr)*count));
                   $("#rep5"+(set-l+1)).val(parseFloat(init_reps_5) - (parseFloat(decr)*(l-1)));
                   $("#type5"+l).val(init_type);
                   $("#unit5"+l).val(init_unit);
                   $("#rest5"+l).val(init_rest);
                 }
                 count=count-1;
              }
            })
            $("button[name=addSet5]").click(function(){
            var j = parseInt(setLen5) + 1;
            var set = 'weight5'+j;
            var rep = 'rep5'+j;
            var unit = 'unit5'+j;
            var type = 'type5'+j;
            var rest = 'rest5'+j;
            $(".set5").append('<div class="set'+5+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select class="right-set" id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'"> </a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'
            );
            setLen5 = j;
            });


           $("button[name=removeSet5]").click(function(){
           var j = setLen5;
           $("div").remove(".set5"+j);
           setLen5 = parseInt(j) -1;
           });
         }
         if(workout == 6){
           $(".notes6").append('<p> <b>Notes About Grip/ Variation:</b></p>'+
           ' <textarea rows="4" cols="30" id="notes6" required> </textarea><br/>');
           $(".workout6").append('<div class="set6"></div></div>');
            setLen6 = setCount;
           for(k = 0; k < setLen6; k++) {
             var curr = k+1;
             var p=workout;
              var set_id = "set6"+curr;
             set = curr;
              $(".set6").append('<div class='+set_id+'><div class="list-group">'+
                           '<a class="list-group-item"><b> Set: '+ curr +' </b></a>'+
                           '<a class="list-group-item"><b> Weight: </b></br><input type="number" id= "weight6'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit6'+curr+'" name="unit6'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type6'+curr+'" name="type6'+curr+'" required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"><b> Reps: </b></br><input type="number" id="rep6'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest6'+curr+'" min="1" max="200" required >'+
                           '</a>'+
                          ' </br></div></div>');
            }
            $("#update6").click(function(){
              var init_weight_6 = $("#max_val6").val();
              var init_reps_6=$("#max_reps6").val();
              var init_type=$("#type6").val();
              var init_unit=$("#unit6").val();
              var init_rest = $("#rest6").val();
              var incr = $("#increment6").val();
              var decr = $("#decrement6").val();
              var count = setLen6-1;
              var wk_type=$("#wk_type6").val();
              for(l=1;l<=setLen6;l++){
                if(wk_type=="maxout")
                {
                   $("#weight6"+l).val(parseFloat(init_weight_6)-(parseFloat(incr)*count));
                   $("#rep6"+l).val(parseFloat(init_reps_6)-(parseFloat(decr)*(l-1)));
                   $("#type6"+l).val(init_type);
                   $("#unit6"+l).val(init_unit);
                   $("#rest6"+l).val(init_rest);

                 }
                 else if (wk_type=="dropset") {
                   set = setLen6;
                   $("#weight6"+(set-l+1)).val(parseFloat(init_weight_6) - (parseFloat(incr)*count));
                   $("#rep6"+(set-l+1)).val(parseFloat(init_reps_6) - (parseFloat(decr)*(l-1)));
                   $("#type6"+l).val(init_type);
                   $("#unit6"+l).val(init_unit);
                   $("#rest6"+l).val(init_rest);
                 }
                 count=count-1;
              }
            })
            $("button[name=addSet6]").click(function(){
            var j = parseInt(setLen6) + 1;
            var set = 'weight6'+j;
            var rep = 'rep6'+j;
            var unit = 'unit6'+j;
            var type = 'type6'+j;
            var rest = 'rest6'+j;
            $(".set6").append('<div class="set'+6+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select class="right-set" id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'" ></a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'
            );
            setLen6 = j;
            });


           $("button[name=removeSet6]").click(function(){
           var j = setLen6;
           $("div").remove(".set6"+j);
           setLen6 = parseInt(j) -1;
           });
         }
         if(workout == 7){
           $(".notes7").append('<p> <b>Notes About Grip/ Variation:</b></p>'+
           ' <textarea rows="4" cols="30" id="notes7" required></textarea> <br/>');
           $(".workout7").append('<div class="set7"></div></div>');
            setLen7 = setCount;
           for(k = 0; k < setLen7; k++) {
             var curr = k+1;
             var p=workout;
              var set_id = "set7"+curr;
             set = curr;
              $(".set7").append('<div class='+set_id+'><div class="list-group">'+
                           '<a class="list-group-item"><b> Set: '+ curr +' </b></a>'+
                           '<a class="list-group-item"><b> Weight: </b></br><input type="number" id= "weight7'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit7'+curr+'" name="unit7'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type7'+curr+'" name="type7'+curr+'" required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"><b> Reps: </b></br><input type="number" id="rep7'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest7'+curr+'" min="1" max="200" required >'+
                           '</a>'+
                          ' </br></div></div>');
            }
            $("#update7").click(function(){
              var init_weight_7 = $("#max_val7").val();
              var init_reps_7=$("#max_reps7").val();
              var init_type=$("#type7").val();
              var init_unit=$("#unit7").val();
              var init_rest = $("#rest7").val();
              var incr = $("#increment7").val();
              var decr = $("#decrement7").val();
              var count = setLen7-1;
              var wk_type=$("#wk_type7").val();
              for(l=1;l<=setLen7;l++){

                if(wk_type=="maxout")
                {
                   $("#weight7"+l).val(parseFloat(init_weight_7)-(parseFloat(incr)*count));
                   $("#rep7"+l).val(parseFloat(init_reps_7)-(parseFloat(decr)*(l-1)));
                   $("#type7"+l).val(init_type);
                   $("#unit7"+l).val(init_unit);
                   $("#rest7"+l).val(init_rest);

                 }
                 else if (wk_type=="dropset") {
                   set = setLen7;
                   $("#weight7"+(set-l+1)).val(parseFloat(init_weight_7) - (parseFloat(incr)*count));
                   $("#rep7"+(set-l+1)).val(parseFloat(init_reps_7) - (parseFloat(decr)*(l-1)));
                   $("#type7"+l).val(init_type);
                   $("#unit7"+l).val(init_unit);
                   $("#rest7"+l).val(init_rest);
                 }
                 count=count-1;
              }
            })
            $("button[name=addSet7]").click(function(){
            var j = parseInt(setLen7) + 1;
            var set = 'weight7'+j;
            var rep = 'rep7'+j;
            var unit = 'unit7'+j;
            var type = 'type7'+j;
            var rest = 'rest7'+j;
            $(".set7").append('<div class="set'+7+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select class="right-set" id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'" ></a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'
            );
            setLen7 = j;
            });


           $("button[name=removeSet7]").click(function(){
           var j = setLen7;
           $("div").remove(".set7"+j);
           setLen7 = parseInt(j) -1;
           });

         }
         if(workout == 8){
           $(".notes8").append('<p> <b>Notes About Grip/ Variation:</b></p>'+
           ' <textarea rows="4" cols="30" id="notes8" required></textarea> <br/>');
           $(".workout8").append('<div class="set8"></div></div>');
           setLen8 = setCount;
           for(k = 0; k < setLen8; k++) {
             var curr = k+1;
             var p=workout;
             var set_id = "set8"+curr;
             set = curr;
              $(".set8").append('<div class='+set_id+'><div class="list-group">'+
                           '<a class="list-group-item"><b> Set: '+ curr +' </b></a>'+
                           '<a class="list-group-item"><b> Weight: </b></br><input type="number" id= "weight8'+curr+'" min="1" max="400" required>'+
                            ' <select id= "unit8'+curr+'" name="unit8'+curr+'" required>'+
                                  '<option value="Lbs">Lbs</option>'+
                                  '<option value="Kgs">Kgs</option>'+
                               '</select>&nbsp;&nbsp;'+
                               '<select class="right-set" id="type8'+curr+'" name="type8'+curr+'" required>'+
                                  '<option value="Pin">Pin</option>'+
                                  '<option value="Pin Per Side">Pin Per Side</option>'+
                                  '<option value="Dumbbell">Dumbbell</option>'+
                                  '<option value="Plates">Plates</option>'+
                                  '<option value="Plates Per Side">Plates Per Side</option>'+
                                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
                               '</select>'+
                             '</a>'+
                           '<a class="list-group-item"><b> Reps:</b></br><input type="number" id="rep8'+curr+'" min="1" max="25" required >'+
                           '</a>'+
                           '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input class="number"  type="number" id="rest8'+curr+'" min="1" max="200" required >'+
                           '</a>'+
                          ' </br></div></div>');
            }
            $("#update8").click(function(){
              var init_weight_8 = $("#max_val8").val();
              var init_reps_8=$("#max_reps8").val();
              var init_type=$("#type8").val();
              var init_unit=$("#unit8").val();
              var init_rest = $("#rest8").val();
              var incr = $("#increment8").val();
              var decr = $("#decrement8").val();
              var count = setLen8-1;
              var wk_type=$("#wk_type8").val();
              for(l=1;l<=setLen8;l++){

                if(wk_type=="maxout")
                {
                   $("#weight8"+l).val(parseFloat(init_weight_8)-(parseFloat(incr)*count));
                   $("#rep8"+l).val(parseFloat(init_reps_8)-(parseFloat(decr)*(l-1)));
                   $("#type8"+l).val(init_type);
                   $("#unit8"+l).val(init_unit);
                   $("#rest8"+l).val(init_rest);
                 }


                 else if (wk_type=="dropset") {
                   set = setLen8;
                   $("#weight8"+(set-l+1)).val(parseFloat(init_weight_8) - (parseFloat(incr)*count));
                   $("#rep8"+(set-l+1)).val(parseFloat(init_reps_8) - (parseFloat(decr)*(l-1)));
                   $("#type8"+l).val(init_type);
                   $("#unit8"+l).val(init_unit);
                   $("#rest8"+l).val(init_rest);
                 }
                 count=count-1;
              }
            })

            $("button[name=addSet8]").click(function(){
            var j = parseInt(setLen8) + 1;
            var set = 'weight8'+j;
            var rep = 'rep8'+j;
            var unit = 'unit8'+j;
            var type = 'type8'+j;
            var rest = 'rest8'+j;
            $(".set8").append('<div class="set'+8+''+j+'">'+
            '<a class="list-group-item"> Set:'+ j +' </a>'+
            '<a class="list-group-item"> Weight: </br><input style="height:30px;width:60px"  id="'+set+'" required >'+
            ' <select id= '+unit+' name='+unit+' required>'+
                  '<option value="Lbs">Lbs</option>'+
                  '<option value="Kgs">Kgs</option>'+
               '</select>&nbsp;&nbsp;'+
               '<select class="right-set" id='+type+' name='+type+' required>'+
                  '<option value="Pin">Pin</option>'+
                  '<option value="Pin Per Side">Pin Per Side</option>'+
                  '<option value="Dumbbell">Dumbbell</option>'+
                  '<option value="Plates">Plates</option>'+
                  '<option value="Plates Per Side">Plates Per Side</option>'+
                  '<option value="Preset ez bar">Preset Ez Bar</option>'+
                  '<option value="Preset straight bar">Preset Straight Bar</option>'+
               '</select>'+
            '</a>'+
            '<a class="list-group-item"> Reps: </br><input style="height:30px;width:60px"  id="'+rep+'" ></a>'+
            '<a class="list-group-item"> <b>Rest Time in Secs: </b></br><input style="height:30px;width:60px"  type="number" id="'+rest+'" min="1" max="200" required >'+
            '</a>'+'</br>'
            );
            setLen8 = j;
            });


           $("button[name=removeSet8]").click(function(){
           var j = setLen8;
           $("div").remove(".set8"+j);
           setLen8 = parseInt(j) -1;
           });


         }

       });


      $("button[name=removeWorkout]").click(function(){
       $("div").remove(".workout"+workout);
       workout=workout-1;
    });

    function reset_color()
    {
      $("#submit").removeClass("btn-info").addClass("btn-danger");
      $("#submit").removeClass("btn-warning").addClass("btn-danger");
    }

   $("#submit").click(function(){
    var myObject = {};
    myObject['total_workout']=workout;

    myObject['id']=parseInt(template_id);
    myObject['skill'] = $('#skill').val();
    myObject['primary'] = $("#primary").val();
    myObject['secondary'] = $("#secondary").val();
    myObject['tertiary'] = $("#tertiary").val();
    myObject['quaternary'] = $("#quaternary").val();

    for(l=1;l<=workout;l++)
    {
      myObject["workout"+l] =  $("#workout_name"+l).val();
      myObject["notes"+l]=$("#notes"+l).val();
      myObject["link"+l]=$("#link"+l).val();
      myObject["wk_type"+l]=$("#wk_type"+l).val();
      myObject["target_muscle"+l] =  $("#target_muscle"+l).val();
      myObject["equipment"+l] =  $("#equipment"+l).val();

      var setLen= 0;

      if(l==1){
        setLen = setLen1;
        myObject['setLen1']=setLen1;

      }
      else if (l==2) {
        setLen = setLen2;
        myObject['setLen2']=setLen2;
      }
      else if (l==3) {
        setLen = setLen3;
        myObject['setLen3']=setLen3;
      }
      else if (l==4) {
        setLen = setLen4;
        myObject['setLen4']=setLen4;
      }
      else if (l==5) {
        setLen = setLen5;
        myObject['setLen5']=setLen5;
      }
      else if (l==6) {
        setLen = setLen6;
        myObject['setLen6']=setLen6;
      }
      else if (l==7) {
        setLen = setLen7;
        myObject['setLen7']=setLen7;
      }
      else if (l==8) {
        setLen = setLen8;
        myObject['setLen8']=setLen8;
      }

      for(k=1;k<=setLen;k++)
      {
        var st="set"+l+""+k;
        var ut="unit"+l+""+k;
        var tp="type"+l+""+k;
        var rp="rep"+l+""+k;
        var rs="rest"+l+""+k;
        myObject[st] =  $("#weight"+l+k).val();
        myObject[ut] =  $("#unit"+l+k).val();
        myObject[tp] =  $("#type"+l+k).val();
        myObject[rp] =  $("#rep"+l+k).val();
        myObject[rs] = $("#rest"+l+k).val();
      }
    }
    console.log(JSON.stringify(myObject));
    $.ajax({
      type: "POST",
      url: '/recieveTemplate',
      data: myObject,
      dataType: JSON,
      success: function (response){
        reset_color();
        if(response.status==200){
        var property = document.getElementById("submit");
        $("#submit").removeClass("btn-danger").addClass("btn-info");
        }
        else
        {
          var property = document.getElementById("submit");
          $("#submit").removeClass("btn-danger").addClass("btn-warning");

        }
      },
      error: function(response){
        reset_color();
        if(response.status==200){
        var property = document.getElementById("submit");
        $("#submit").removeClass("btn-danger").addClass("btn-info");
        }
        else
        {
          var property = document.getElementById("submit");
          $("#submit").removeClass("btn-danger").addClass("btn-warning");

        }
      }
    })
   });

}
function getMaxId(){
  $.ajax({
    type: "GET",
    url: '/retrieveMaxId',
    success: function (response){
      console.log(JSON.stringify(response[0].id));
      template_id = parseInt(response[0].id) + 1;
      main_function();

    },
    error: function(response){
      alert("Failure to load");
    }
  })
}

$(document).ready(function(){
  getMaxId()
});
