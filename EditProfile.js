class EditProfile{
  static editDetails(options) {
    var selfdesc = document.getElementById("selfdesc").value;
    var gradyear = document.getElementById("gradyear").value;
    var batch = document.getElementById("batch").value;
    var streamzs = document.getElementById("streamzs").value;
    var userid = document.getElementById("userid").value;

    var params = {};
    selfdesc && (params.selfdesc = selfdesc);
    gradyear && (params.gradyear = gradyear);
    batch && (params.batch = batch);
    streamzs && (params.streamzs = streamzs);
    userid && (params.user = userid);

    $DX.get({
       url: "/fsdb/function/editProfile",
       params: params,
       handler: function(response) {
         console.log(this.responseText);
         if(this.responseText == "Success") {
           window.location.href="/profileDetails?studentId="+userid;
         }
       }
    });

  }
}
