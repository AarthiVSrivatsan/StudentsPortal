"use strict";
class SearchProfiles{
  static searchCriteriaSelect;
  static areasofinterestSelect;

  static closeAdvancedSearch() {
    document.getElementById("openSearchOptions").classList.remove("dcappfsdbhide");
    document.getElementById("encloser").classList.add("dcappfsdbhide");
    SearchProfiles.searchCriteriaSelect.set([]);
  }
  static showAdvancedSearch(){
    document.getElementById("openSearchOptions").classList.add("dcappfsdbhide");
    document.getElementById("encloser").classList.remove("dcappfsdbhide");

    SearchProfiles.searchCriteriaSelect = new SlimSelect({
      		select: '#searchcriteria1'
  		});

    SearchProfiles.areasofinterestSelect = new SlimSelect({
        select: "#areasofinterest"
      });
  }
  static openSearchOptions(options) {
    var userrole = document.getElementById("userrole").value;
    DOMUtils.hideAllWrappers();
    DOMUtils.restoreDefaults();


        var choices = [... document.getElementById("searchcriteria1").options]
		. filter(option => option.selected)
		.map(option => option.value);
      if(choices.length > 0) {
        document.getElementById("searchwrapper").classList.remove("dcappfsdbhide");
      }
        choices.forEach(function(value, i) {
            if(value == "Location"){
                document.getElementById("locwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "School") {
                document.getElementById("schoolwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "GraduationYear") {
                document.getElementById("graduationwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "Batch") {
                document.getElementById("batchwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "Team"){
                document.getElementById("teamwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "Technology") {
                document.getElementById("techwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "Designation") {
                document.getElementById("designationwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "AreaOfInterest") {
                document.getElementById("interestwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "Hobbies") {
                document.getElementById("hobbieswrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "ProjectName") {
                document.getElementById("projectnamewrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "bloodgroup") {
                document.getElementById("bloodgroupwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "stream") {
                document.getElementById("streamwrapper").classList.remove("dcappfsdbhide");
            }
            if(value == "gender") {
                document.getElementById("genderwrapper").classList.remove("dcappfsdbhide");
            }
        });
  }

  static clickTriggered(options) {
    console.log(options);

        var studentname = document.getElementById("studentname").value;

        var location = "";
        var radiobuttons = document.getElementsByName("location");
        for(var i=0; i<radiobuttons.length; i++) {
            if(radiobuttons[i].checked){
                radiobuttons[i].value == "All" && (location = "");
                radiobuttons[i].value != "All" && (location = radiobuttons[i].value);
            }
        }
         var school = "";
        var radiobuttons = document.getElementsByName("school");
        for(var i=0; i<radiobuttons.length; i++) {
            if(radiobuttons[i].checked){
                school = radiobuttons[i].value;
            }
        }

        var yearOfPassing = 0;
        yearOfPassing = (document.getElementById("yearofpassing") != null) ? document.getElementById("yearofpassing").value : 0;

        var batch = "";
        batch = document.getElementById("batch").value;
        var techs = [];
        var competencies = document.getElementById("tech");
        var techs = [... competencies.options]
		. filter(option => option. selected)
		.map(option => option. value);

        var teamname = document.getElementById("team").value || "";

        var gender = "";
        radiobuttons = document.getElementsByName("gender");
        for(var i=0; i<radiobuttons.length; i++) {
            if(radiobuttons[i].checked){
                gender = radiobuttons[i].value;
            }
        }

        var designation = document.getElementById("designation").value || "";

        var areasofinterest = [... document.getElementById("areasofinterest").options].filter(option => option.selected).map(option => option.value);

        var hobbies = document.getElementById("hobbies").value;

        var bloodgroup = document.getElementById("bloodgroup").value;

        var projectName = document.getElementById("ProjectName").value;

        var streamatzs = document.getElementById("streamatzs").value;

        var parser = new DOMParser();
        var columnContentDiv = "";
        var eachDivContent = "";
        var templateRowContent = "";
        var params = {};
        studentname && (params.studentname= studentname);
        params.location = "";
        params.school = "";
        params.skills = "";
        yearOfPassing > 0 && (params.yearofpassing = yearOfPassing);
        batch && (params.batch = batch);
        location && (params.location = location);
        school && (params.school= school);
        teamname && (params.team = teamname);
        gender && (params.gender = gender);
        designation && (params.designation = designation);
        areasofinterest && (params.areasofinterest = areasofinterest);
        hobbies && (params.hobbies = hobbies);
        bloodgroup && (params.bloodgroup = bloodgroup);
        projectName && (params.projectname = projectName);
        streamatzs && (params.streamatzs = streamatzs);

        var interim = document.getElementById("userrole").value;
        var role = interim;
        params.Role = role;
        techs.length > 0 && (params.skills = techs.join(",") || "");
        $DX.get({
           url: "/fsdb/AllProfiles",
           params: params,
           handler: function() {
               console.log(Utility.DEFAULT_LOCATION);
               eachDivContent = this.responseText;
               document.getElementById("resultWrapper").innerHTML = eachDivContent;
			  //entireContent = parser.parseFromString(eachDivContent, 'text/html');
              //columnContentDiv = entireContent.querySelector(".dcappeachcolumn").outerHTML;
               //templateRowContent = entireContent.querySelector(".dcappeachrow").outerHTML;
           }
        });
  }
}
