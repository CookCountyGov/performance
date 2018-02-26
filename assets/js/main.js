$(document).ready(function() {
    $('#agency-selector').change(function() {
      console.log("the value is: " + this.value);
      var url = this.value;
      if (url != '') { 
        window.location = url;
      }
    });

});