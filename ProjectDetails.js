"use strict";
var ProjectDetails = function() {}


ProjectDetails.openProjectPage = function(options) {
    window.location.href="/profileDetails?studentId="+options.params["student-id"];
  }
ProjectDetails.openFacultyDetails = function(options) {
  window.location.href = "/faculty-details?userid="+options.params["user-id"]
}
