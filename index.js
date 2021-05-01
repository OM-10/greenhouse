// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "domain_name",
  databaseURL: "url",
  projectId: "id",
  storageBucket: "id",
  messagingSenderId: "id",
  appId: "id",
  measurementId: "id"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


(function () {

  //Create reference

  //reference for 6 cards
  dbRefObject_temp = firebase.database().ref().child('api_key').child('eEnvironment').child('currentData').child('Temperature');
  dbRefObject_humid = firebase.database().ref().child('api_key').child('eEnvironment').child('currentData').child('Humidity');
  dbRefObject_co2 = firebase.database().ref().child('api_key').child('eEnvironment').child('currentData').child('CO2');
  dbRefObject_light = firebase.database().ref().child('api_key').child('eEnvironment').child('currentData').child('lightLux');
  dbRefObject_water = firebase.database().ref().child('api_key').child('eEnvironment').child('currentData').child('soilMoisture');
  dbRefObject_fert = firebase.database().ref().child('api_key').child('eEnvironment').child('currentData').child('Fertilizer');


  //reference to make changes in ui
  dbRefObject_temp_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain').child('Temperature');
  dbRefObject_humid_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain').child('Humidity');
  dbRefObject_co2_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain').child('CO2');

  dbRefObject_light_blue_m_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Light').child('Blue');
  dbRefObject_light_red_m_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Light').child('Red');
  dbRefObject_light_white_m_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Light').child('White');

  dbRefObject_light_ui_s_time = firebase.database().ref().child('api_key').child('eEnvironment').child('Light').child('startMillis');
  dbRefObject_light_ui_e_time = firebase.database().ref().child('api_key').child('eEnvironment').child('Light').child('endMillis');

  dbRefObject_water_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain').child('soilMoisture');
  dbRefObject_fert_ui = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain').child('Fertilizer');


  //refernce to make changes in firebase
  dbRefObject_temp_m = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain');
  dbRefObject_humid_m = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain');
  dbRefObject_co2_m = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain');
  dbRefObject_light_m = firebase.database().ref().child('api_key').child('eEnvironment').child('currentData');
  dbRefObject_light_m_blue = firebase.database().ref().child('api_key').child('eEnvironment').child('Light');
  dbRefObject_light_m_red = firebase.database().ref().child('api_key').child('eEnvironment').child('Light');
  dbRefObject_light_m_white = firebase.database().ref().child('api_key').child('eEnvironment').child('Light');
  dbRefObject_light_m_s_time = firebase.database().ref().child('api_key').child('eEnvironment').child('Light');
  dbRefObject_light_m_e_time = firebase.database().ref().child('api_key').child('eEnvironment').child('Light');
  dbRefObject_water_m = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain');
  dbRefObject_fert_m = firebase.database().ref().child('api_key').child('eEnvironment').child('Maintain');


  //define variable to set timer
  var date = new Date();
  var myyear = date.getFullYear(); //get year
  var mymonth = date.getMonth() + 1; //get month
  var mydate = date.getDate(); //get date
  //console.log(date,myyear,mymonth,mydate);

  // get value
  var ans = new Date(mymonth + "/" + mydate + "/" + myyear + " 00:00:00");
  var myans = ans.getTime();



  // UI CHANGES
  //temperature ui change (current)
  dbRefObject_temp.on('value', snap => {

    document.getElementById("c_temp").innerHTML = snap.val();
    slider_tin.setValue(snap.val());

  });

  //temperature ui change (maintain)
  dbRefObject_temp_ui.on('value', snap => {

    document.getElementById("m_temp").innerHTML = snap.val() + " °C";
    slider_t.setValue(snap.val());

  });

  //humidity ui change (current)
  dbRefObject_humid.on('value', snap => {

    document.getElementById("c_humid").innerHTML = snap.val();
    slider_hin.setValue(snap.val());

  });

  //humidity ui change (maintain)
  dbRefObject_humid_ui.on('value', snap => {

    document.getElementById("m_humid").innerHTML = snap.val() + " %";
    slider_h.setValue(snap.val());

  });

  //CO2 ui change (current)
  dbRefObject_co2.on('value', snap => {

    document.getElementById("c_co2").innerHTML = snap.val();
    slider_cin.setValue(snap.val());

  });

  //CO2 ui change (maintain)
  dbRefObject_co2_ui.on('value', snap => {

    document.getElementById("m_co2").innerHTML = snap.val() + " ppm";
    slider_c.setValue(snap.val());

  });

  //light ui change (current)
  dbRefObject_light.on('value', snap => {

    document.getElementById("c_light").innerHTML = snap.val();
    document.getElementById("m_light").innerHTML = snap.val() + " lx";

  });

  //blue light ui change (current)
  dbRefObject_light_blue_m_ui.on('value', snap => {

    slider_b.setValue(snap.val() / 2.55);

  });

  //red light ui change (current)
  dbRefObject_light_red_m_ui.on('value', snap => {

    slider_r.setValue(snap.val() / 2.55);

  });

  //white light ui change (current)
  dbRefObject_light_white_m_ui.on('value', snap => {

    slider_wh.setValue(snap.val() / 2.55);

  });

  //start time light ui change (current) 
  dbRefObject_light_ui_s_time.on('value', snap => {

    var s_timestamp = snap.val();
    var s_date = new Date(s_timestamp * 1000);
    var s_hours = "0" + s_date.getHours();
    var s_minutes = "0" + s_date.getMinutes();
    //console.log(snap.val(),s_timestamp,s_date,s_hours,s_minutes);
    document.getElementById("start_time").value = (s_hours.toString()).slice(-2) + ":" + (s_minutes.toString()).slice(-2);

  });

  //end time light ui change (current) 
  dbRefObject_light_ui_e_time.on('value', snap => {

    var e_timestamp = snap.val();
    var e_date = new Date(e_timestamp * 1000);
    var e_hours = "0" + e_date.getHours();
    var e_minutes = "0" + e_date.getMinutes();
    //console.log(snap.val(),e_timestamp,e_date,e_hours,e_minutes);
    document.getElementById("end_time").value = (e_hours.toString()).slice(-2) + ":" + (e_minutes.toString()).slice(-2);

  });

  //water ui change (current)
  dbRefObject_water.on('value', snap => {

    document.getElementById("c_water").innerHTML = snap.val();
    slider_win.setValue(snap.val());

  });

  //water ui change (maintain)
  dbRefObject_water_ui.on('value', snap => {

    document.getElementById("m_water").innerHTML = snap.val() + " %";
    slider_w.setValue(snap.val());

  });

  //fertilizer ui change (current)
  dbRefObject_fert.on('value', snap => {

    document.getElementById("c_fert").innerHTML = snap.val();
    slider_fin.setValue(snap.val());

  });

  //fertilizer ui change (maintain)
  dbRefObject_fert_ui.on('value', snap => {

    document.getElementById("m_fert").innerHTML = snap.val() + " %";
    slider_f.setValue(snap.val());

  });



  //FIREBASE CHANGES

  //temperature firebase change (maintain)
  var output_t = document.getElementById("submit_t");
  output_t.innerHTML = slider_t.value;
  output_t.onclick = function () {
    dbRefObject_temp_m.update({ Temperature: parseInt(slider_t.getValue(), 10) });
  }

  //humidity firebase change (maintain)
  var output_h = document.getElementById("submit_h");
  output_h.innerHTML = slider_h.value;
  output_h.onclick = function () {
    dbRefObject_humid_m.update({ Humidity: parseInt(slider_h.getValue(), 10) });
  }

  //CO2 firebase change (maintain)
  var output_c = document.getElementById("submit_c");
  output_c.innerHTML = slider_c.value;
  output_c.onclick = function () {
    dbRefObject_co2_m.update({ CO2: parseInt(slider_c.getValue(), 10) });
  }

  //light firebase change (maintain)
  // var output_l = document.getElementById("submit_l");
  var output_r = document.getElementById("slider_r");
  var output_b = document.getElementById("slider_b");
  var output_wh = document.getElementById("slider_wh");
  // output_l.onclick= function () {
  //   dbRefObject_light_m_blue.update({ Blue: Math.round(parseInt(slider_b.getValue(), 10) * 2.55) });
  //   dbRefObject_light_m_red.update({ Red: Math.round(parseInt(slider_r.getValue(), 10) * 2.55) });
  //   dbRefObject_light_m_white.update({ White: Math.round(parseInt(slider_wh.getValue(), 10) * 2.55) });
  //   dbRefObject_light_m.update({ lightLux: Math.round(parseInt(slider_b.getValue(), 10) * 2.55) + Math.round(parseInt(slider_r.getValue(), 10) * 2.55) + Math.round(parseInt(slider_wh.getValue(), 10) * 2.55) });
  // }

  //light firebase change maintain (red)
  output_r.onchange= function () {
    dbRefObject_light_m_red.update({ Red: Math.round(parseInt(slider_r.getValue(), 10) * 2.55) });
    dbRefObject_light_m.update({ lightLux: Math.round(parseInt(slider_b.getValue(), 10) * 2.55) + Math.round(parseInt(slider_r.getValue(), 10) * 2.55) + Math.round(parseInt(slider_wh.getValue(), 10) * 2.55) });
  }

  //light firebase change maintain (blue)
  output_b.onchange= function () {
    dbRefObject_light_m_blue.update({ Blue: Math.round(parseInt(slider_b.getValue(), 10) * 2.55) });
    dbRefObject_light_m.update({ lightLux: Math.round(parseInt(slider_b.getValue(), 10) * 2.55) + Math.round(parseInt(slider_r.getValue(), 10) * 2.55) + Math.round(parseInt(slider_wh.getValue(), 10) * 2.55) });
  }

  //light firebase change maintain (white)
  output_wh.onchange= function () {
    dbRefObject_light_m_white.update({ White: Math.round(parseInt(slider_wh.getValue(), 10) * 2.55) });
    dbRefObject_light_m.update({ lightLux: Math.round(parseInt(slider_b.getValue(), 10) * 2.55) + Math.round(parseInt(slider_r.getValue(), 10) * 2.55) + Math.round(parseInt(slider_wh.getValue(), 10) * 2.55) });
  }

  //light firebase change maintain (start time)
  $("#start_time").on("change", function () {
    //console.log(this.valueAsDate);
    //console.log((this.valueAsDate).getTime());
    dbRefObject_light_m_s_time.update({ startMillis: (myans + (this.valueAsDate).getTime()) / 1000 });
  })

  //light firebase change maintain (end time)
  $("#end_time").on("change", function () {
    //console.log(this.valueAsDate);
    //console.log((this.valueAsDate).getTime());
    dbRefObject_light_m_e_time.update({ endMillis: (myans + (this.valueAsDate).getTime()) / 1000 });
  })

  //water firebase change (maintain)
  var output_w = document.getElementById("submit_w");
  output_w.innerHTML = slider_w.value;
  output_w.onclick = function () {
    dbRefObject_water_m.update({ soilMoisture: parseInt(slider_w.getValue(), 10) });
  }

  //Fertilizer firebase change (maintain)
  var output_f = document.getElementById("submit_f");
  output_f.innerHTML = slider_f.value;
  output_f.onclick = function () {
    dbRefObject_fert_m.update({ Fertilizer: parseInt(slider_f.getValue(), 10) });
  }


  // some testing
  // var today = new Date().getHours();
  //       if (today >= 2 && today <= 19) {
  //           document.body.style.background = "Red";
  //           dbRefObject_water_m.update({ soilMoisture: 90 })
  //       } else {
  //           document.body.style.background = "Blue";
  //           dbRefObject_water_m.update({ soilMoisture: 10 })
  //       }
  // test end


}());




