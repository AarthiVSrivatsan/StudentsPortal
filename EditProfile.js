"use strict";
var EditProfile = function() {}

  EditProfile.areasofinterestedit = null;
  EditProfile.editAreasOfInterest = function(aoi) {
    document.getElementById("areasofinteresttxt").classList.add("dcappfsdbhide");
    EditProfile.areasofinterestedit = new SlimSelect({
      select: "#areasofinterestedit"
    });

    EditProfile.areasofinterestedit.set(aoi);
    document.getElementById("areasofinterestedit").classList.remove("dcappfsdbhide");
    //document.getElementById("pencileditareas").classList.add("dcappfsdbhide");

  }
  EditProfile.editDetails = function(options) {
    var selfdesc = document.getElementById("selfdesc").value;
    var gradyear = 0;
    document.getElementById("gradyear") && (gradyear = document.getElementById("gradyear").value);
    if(gradyear < 1980) {
      alert("Invalid entries in the form. Graduation year should be after 1980");
      return;
    }
    var batch = 0;
    document.getElementById("batch") && (batch = document.getElementById("batch").value);

    if(batch < 1) {
      alert("Invalid entries in the form. Batch should be greater than 1");
      return;
    }
    var streamzs = "";
    document.getElementById("streamzs") && (streamzs = document.getElementById("streamzs").value);
    var areasofinterest = [];
    document.getElementById("areasofinterestedit") && (areasofinterest = [... document.getElementById("areasofinterestedit").options].filter(option => option.selected).map(option => option.value));
    var designation = document.getElementById("designation").value;
    var userid = document.getElementById("userid").value;
    var hobbies = document.getElementById("hobbies").value;

    var params = {};
    selfdesc && (params.selfdesc = selfdesc);
    gradyear && (params.gradyear = gradyear);
    batch && (params.batch = batch);
    streamzs && (params.streamzs = streamzs);
    areasofinterest && (params.areasofinterest = areasofinterest.join(","));
    hobbies && (params.hobbies = hobbies);
    designation && (params.designation = designation);
    userid && (params.user = userid);

    $DX.get({
       url: "/fsdb/function/editProfile",
       params: params,
       handler: function() {
         console.log(this.responseText);
         if(this.responseText == "Success") {
           window.location.href="/profiledetails?studentId="+userid;
         }
       }
    });

  }
