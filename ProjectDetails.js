"use strict";
var ProjectDetails = function() {}


ProjectDetails.openProjectPage = function(options) {
    window.location.href="/profileDetails?studentId="+options.params["student-id"];
  }
