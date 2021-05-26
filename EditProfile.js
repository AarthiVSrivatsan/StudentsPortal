"use strict";
var EditProfile = function() {}

  EditProfile.areasofinterestedit = null;
  EditProfile.bloodgroupedit = null;
  EditProfile.editAreasOfInterest = function(aoi) {
    document.getElementById("areasofinteresttxt").classList.add("dcappfsdbhide");
    EditProfile.areasofinterestedit = new SlimSelect({
      select: "#areasofinterestedit"
    });

    if(aoi != "") {
      EditProfile.areasofinterestedit.set(aoi);
    }

    document.getElementById("areasofinterestedit").classList.remove("dcappfsdbhide");
    //document.getElementById("pencileditareas").classList.add("dcappfsdbhide");

  }
  EditProfile.removeTeamHistory = function(tname) {
    var teamName = tname;
    var userid = document.getElementById("userid").value;

    var params = {};
    params.teamname =  teamName;
    params.user =  userid;

    $DX.get({
       url: "/fsdb/function/removeteamentry",
       params: params,
       handler: function() {
         if(this.responseText == "Success") {
           document.getElementById("studentprofileedit").classList.remove("dcappfsdbopaque");
           document.getElementById("teamcontaineredit").classList.add("dcappfsdbhide");
           alert("Team details deleted successfully");
         }
       }
    });
  }
  EditProfile.addTeamHistory = function() {
    var teamName = document.getElementById("teamname").value;
    var doj = document.getElementById("doj").value;
    var periodworked = document.getElementById("periodworked").value;
    var roledone = document.getElementById("roledone").value;
    var userid = document.getElementById("userid").value;

    if(teamName === null || teamName === "") {
      alert("Enter valid teamname");
      return;
    }
    if(doj === null || doj === "") {
      alert("Enter valid doj");
      return;
    }

    if(periodworked === null || periodworked === "") {
      alert("Enter valid periodworked");
      return;
    }

    if(roledone === null || roledone === "") {
      alert("Enter valid roledone");
      return;
    }

    var params = {};
    params.teamname =  teamName;
    params.doj =  doj;
    params.periodworked =  periodworked;
    params.roledone =  roledone;
    params.emailid =  userid;

    $DX.get({
       url: "/fsdb/function/addTeamEntry",
       params: params,
       handler: function() {
         console.log(this.responseText);
         if(this.responseText == "Success") {
           document.getElementById("studentprofileedit").classList.remove("dcappfsdbopaque");
           document.getElementById("teamcontaineredit").classList.add("dcappfsdbhide");
           alert("Team details entered successfully");
         }
       }
    });
  }
  EditProfile.editBloodGroup = function(bg) {
    document.getElementById("bloodgrouptxt").classList.add("dcappfsdbhide");
    EditProfile.bloodgroupedit = new SlimSelect({
      select: "#bloodgroupedit"
    });
    EditProfile.bloodgroupedit.set(bg);

    document.getElementById("bloodgroupedit").classList.remove("dcappfsdbhide");
  }
  EditProfile.editDetails = function(options) {
    var selfdesc = document.getElementById("selfdesc").value;
    var gradyear = 0;
    document.getElementById("gradyear") && (gradyear = document.getElementById("gradyear").value);
    if(document.getElementById("gradyear")) {
      if(gradyear < 1980) {
        alert("Invalid entries in the form. Graduation year should be after 1980");
        return;
      }
    }

    var batch = 0;
    document.getElementById("batch") && (batch = document.getElementById("batch").value);
    if(document.getElementById("batch")) {
      if(batch < 1) {
        alert("Invalid entries in the form. Batch should be greater than 1");
        return;
      }
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
