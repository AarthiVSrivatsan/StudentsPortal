"use strict";
class ProjectDetails {

  static openProjectPage(options) {
    window.location.href="/profileDetails?studentId="+options.params["student-id"];
  }
}
