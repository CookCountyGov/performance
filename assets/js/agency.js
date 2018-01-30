$(document).ready(function() {
  if (nodeid) {
    $.getJSON( "https://performance.cookcountyil.gov/resource/cvnp-znwz.json?scorecardrootnodeid=" + nodeid, function( data ) {
      console.log("successfully got json");
      var agencyinfo = data[0];
      $("#agency-name").html(agencyinfo['department_name']);
      $("#agency-mission").html(agencyinfo['mission']);
      $("#agency-mandates").html(agencyinfo['mandates']);
      $("#agency-key-activities").html(agencyinfo['key_activities_and_services']);
    });
    $.getJSON( "https://performance.cookcountyil.gov/resource/ea95-cm42.json?scorecardrootnodeid=" + nodeid, function( data ) {
      console.log("successfully got json");
      var program_html = ""
      $.each(data, function(key, program) {
        program_html += '<dt class="col-sm-2">' + program['program_name'] + '</dt>'
        program_html += '<dd class="col-sm-10">' + program['description'] + '</dd>'
      });
      $("#program-list").html(program_html);
    });
    $.getJSON( "https://performance.cookcountyil.gov/resource/9nii-fnhh.json?scorecardrootnodeid=" + nodeid, function( data ) {
      console.log("successfully got json");
      var metric_structure = {};
      $.each(data, function(key, metric) {
        var html = '<div class="col-sm-6 col-md-4 col-lg-3">'
        html += '<div class="card mb-2 border-success">'
        html += '<div class="card-body">'
        html += '<h4 class="card-title">' + metric['scorecardnodename'] + '</h4>'
        html += '<div class="card-footer text-white bg-success">FY2017 Q3 Score: ' + metric['actualvalue'] + '</div>'
        html += '</div></div>'
        $("#agency-metrics").append(html);
      });
      //$("#program-list").html(program_html);
    });
   
  }
   
    console.log("nodeid is: " + nodeid);
});