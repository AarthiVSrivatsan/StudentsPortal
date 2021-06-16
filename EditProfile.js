"use strict";
var EditProfile = function() {}

  EditProfile.areasofinterestedit = null;
  EditProfile.bloodgroupedit = null;
  EditProfile.knowzsedit = null;
  EditProfile.editAreasOfInterest = function(aoi) {
    document.getElementById("areasofinteresttxt").classList.add("dcappfsdbhide");
    EditProfile.areasofinterestedit = new SlimSelect({
      select: "#areasofinterestedit",
      onChange: (val)=>{
        var flag = false;
        //console.log(val);
        for(var i=0;i<val.length; i++) {
          if(val[i].value === "Other") {
            flag = true;
            document.getElementById("otherinterestDiv").classList.remove("dcappfsdbhide");
            document.getElementById("otherinterestDiv").classList.add("tblrow");
          }
        }

        if(!flag) {
          document.getElementById("otherinterestDiv").classList.add("dcappfsdbhide");
          document.getElementById("otherinterestDiv").classList.remove("tblrow");
        }
      }
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
  EditProfile.editKnowZS = function(knowzs) {
    document.getElementById("knowzstxt").classList.add("dcappfsdbhide");
    EditProfile.knowzsedit = new SlimSelect({
      select: "#knowzsedit"
    });
    EditProfile.knowzsedit.set(knowzs);

    document.getElementById("knowzsedit").classList.remove("dcappfsdbhide");
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
    var userrole = document.getElementById("userrole").value;
    var selfdesc = "";
    var gradyear = 0;


    document.getElementById("selfdesc") && (selfdesc = document.getElementById("selfdesc").value);
    if(selfdesc != "") {
      selfdesc = selfdesc.substring(0,150);
    }
    var streamzs = "";
    document.getElementById("streamzs") && (streamzs = document.getElementById("streamzs").value);
    var areasofinterest = [];
    if(document.getElementById("areasofinterestedit") && !document.getElementById("areasofinterestedit").classList.contains("dcappfsdbhide")) {
        document.getElementById("areasofinterestedit") && (areasofinterest = [... document.getElementById("areasofinterestedit").options].filter(option => option.selected).map(option => option.value));
    }else if (document.getElementById("areasofinteresttxt")){
        areasofinterest = document.getElementById("areasofinteresttxt").getAttribute("dc-param-aoi").split(",");
    }

    var designation = document.getElementById("designation").value;
    var userid = document.getElementById("userid").value;
    var hobbies = document.getElementById("hobbies").value;
    var phNumber = document.getElementById("contactnumber").value;

    // eduinfo, gender, linstname, zsknow.
    var eduinfo = "";
    var linstname = "";
    var gender = "";
    var knowzs = "";

    var prevexp = "";
    document.getElementById("prevexp") && (prevexp = document.getElementById("prevexp").value);

    document.getElementById("linstname") && (linstname = document.getElementById("linstname").value);

    if(document.getElementById("knowzsedit") && !document.getElementById("knowzsedit").classList.contains("dcappfsdbhide")) {
        document.getElementById("knowzsedit") && (knowzs = document.getElementById("knowzsedit").value);
    }else if (document.getElementById("knowzstxt")){
        knowzs = document.getElementById("knowzstxt").getAttribute("dc-param-knowzs");
    }

    document.getElementById("edubg") && (eduinfo = document.getElementById("edubg").value);
    document.getElementById("gender") && (gender = document.getElementById("gender").value);

    var otherinterest = "";
    document.getElementById("otherintereststxt") && (otherinterest = document.getElementById("otherintereststxt").value);

    var phoneno = /^\d{10}$/;
    if(!phNumber.match(phoneno)){
      alert("Invalid Phone Number");
      return;
    }

    var dob = "";
    document.getElementById("dob") && (dob = document.getElementById("dob").value);
    var bloodgroup = "";
    if(document.getElementById("bloodgroupedit") && !document.getElementById("bloodgroupedit").classList.contains("dcappfsdbhide")) {
        document.getElementById("bloodgroupedit") && (bloodgroup = [... document.getElementById("bloodgroupedit").options].filter(option => option.selected).map(option => option.value));
    }else if(document.getElementById("bloodgrouptxt")){
      bloodgroup = document.getElementById("bloodgrouptxt").innerText;
    }


    var params = {};
    selfdesc && (params.selfdesc = selfdesc.trim());
    gradyear>0 && (params.gradyear = gradyear);
    streamzs && (params.streamzs = streamzs);
    areasofinterest && (params.areasofinterest = areasofinterest.join(","));
    hobbies && (params.hobbies = hobbies);
    designation && (params.designation = designation);
    userid && (params.user = userid);
    phNumber && (params.contact = phNumber);
    dob && (params.dob = dob);
    bloodgroup && (params.bloodgroup = bloodgroup);
    eduinfo && (params.edubg = eduinfo);
    linstname && (params.linstname = linstname);
    gender && (params.gender = gender);
    knowzs && (params.zsknow = knowzs);
    otherinterest && (params.otherinterest = otherinterest);
    userrole && (params.userrole = userrole);
    prevexp && (params.prevexp = prevexp);

    $DX.get({
       url: "/fsdb/function/editProfile",
       params: params,
       handler: function() {
         console.log(this.responseText);
         if(this.responseText == "Success") {
           window.location.href="/profiledetails?studentId="+userid;
         }else{
           alert("Error occured, please contact administrator");
         }
       }
    });

  }
