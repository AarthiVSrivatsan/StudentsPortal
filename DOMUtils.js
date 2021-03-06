"use strict";

var DOMUtils = function (){}

  DOMUtils.hideAllWrappers = function() {
        document.getElementById("locwrapper").classList.add("dcappfsdbhide");
        document.getElementById("schoolwrapper").classList.add("dcappfsdbhide");
        document.getElementById("graduationwrapper").classList.add("dcappfsdbhide");
        document.getElementById("batchwrapper").classList.add("dcappfsdbhide");
        document.getElementById("teamwrapper").classList.add("dcappfsdbhide");
        document.getElementById("techwrapper").classList.add("dcappfsdbhide");
        document.getElementById("searchwrapper").classList.add("dcappfsdbhide");
        document.getElementById("batchwrapper").classList.add("dcappfsdbhide");
        document.getElementById("genderwrapper").classList.add("dcappfsdbhide");
        document.getElementById("designationwrapper").classList.add("dcappfsdbhide");

        document.getElementById("interestwrapper").classList.add("dcappfsdbhide");
        document.getElementById("hobbieswrapper").classList.add("dcappfsdbhide");

        document.getElementById("bloodgroupwrapper").classList.add("dcappfsdbhide");
        document.getElementById("projectnamewrapper").classList.add("dcappfsdbhide");
        document.getElementById("streamwrapper").classList.add("dcappfsdbhide");
    }


    DOMUtils.hideUnnecessaryOptions = function(options) {
        console.log("I am called");
        var selectedValue = "School of Technology";
        var radiobuttons = document.getElementsByName("school");
        for(var i=0; i<radiobuttons.length; i++) {
            if(radiobuttons[i].checked){
                selectedValue = radiobuttons[i].value;
            }
        }
        var alloptions = document.getElementById("tech").querySelectorAll(".skills");
        for (var i=0;i<alloptions.length; i++) {
            alloptions[i].classList.remove("dcappfsdbhide");
        }

        if(selectedValue == "School of Technology" || selectedValue == "School for Advanced Studies") {
            document.getElementsByClassName("skills_motiondesign")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_graphicdesign")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_pencilsketch")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_webdesign")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_mobiledesign")[0].classList.add("dcappfsdbhide");

            document.getElementsByClassName("skills_mktanalytics")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_contentwriting")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_sales")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_support")[0].classList.add("dcappfsdbhide");
        }else if (selectedValue == "School of Design"){
            document.getElementsByClassName("skills_mktanalytics")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_contentwriting")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_sales")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_support")[0].classList.add("dcappfsdbhide");

             document.getElementsByClassName("skills_java")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_databases")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_javascript")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_lyte")[0].classList.add("dcappfsdbhide");
             document.getElementsByClassName("skills_androiddev")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_iosdev")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_blockchain")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_websecurity")[0].classList.add("dcappfsdbhide");
             document.getElementsByClassName("skills_mobilesecurity")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_ml")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_testing")[0].classList.add("dcappfsdbhide");
        } else if(selectedValue == "School of Business"){
            document.getElementsByClassName("skills_motiondesign")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_graphicdesign")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_pencilsketch")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_webdesign")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_mobiledesign")[0].classList.add("dcappfsdbhide");

             document.getElementsByClassName("skills_java")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_databases")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_javascript")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_lyte")[0].classList.add("dcappfsdbhide");
             document.getElementsByClassName("skills_androiddev")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_iosdev")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_blockchain")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_websecurity")[0].classList.add("dcappfsdbhide");
             document.getElementsByClassName("skills_mobilesecurity")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_ml")[0].classList.add("dcappfsdbhide");
            document.getElementsByClassName("skills_testing")[0].classList.add("dcappfsdbhide");
        }
    }
    DOMUtils.restoreDefaults = function() {
        var radiobuttons = document.getElementsByName("location");
        for(var i=0; i<radiobuttons.length; i++) {
            radiobuttons[i].checked = false;
        }

        radiobuttons = document.getElementsByName("school");
        for(var i=0; i<radiobuttons.length; i++) {
            radiobuttons[i].checked = false;
        }

        radiobuttons = document.getElementsByName("gender");
        for(var i=0; i<radiobuttons.length; i++) {
            radiobuttons[i].checked = false;
        }

        document.getElementById("yearofpassing").value="";

        document.getElementById("batch").value = "";

        document.getElementById("designation").value="";

        // [... document.getElementById("areasofinterest").options].forEach((item, i) => {
        //   item.selected = false;
        // });

        SearchProfiles.areasofinterestSelect.set([]);

        document.getElementById("hobbies").value = "";


        document.getElementById("bloodgroup").value = "";

        document.getElementById("ProjectName").value = "";

        document.getElementById("streamatzs").value = "";

        [... document.getElementById("tech").options].forEach(function(item, i) {
            item.selected = false;
        });

        document.getElementById("studentname").value = "";


    }
    DOMUtils.clearAll= function() {
        DOMUtils.hideAllWrappers();
		// [... document.getElementById("searchcriteria1").options].forEach(function(item, i) {
    //         item.selected = false;
    //     });

      SearchProfiles.searchCriteriaSelect.set([]);
        DOMUtils.restoreDefaults();
        //document.getElementById("openSearchOptions").classList.remove("dcappfsdbhide");
    }
