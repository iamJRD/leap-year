var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
   return true;
 } else {
  return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (isNaN(year)) {
      $("#invalid").show();
      $("#result").hide();
    }
    else if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
      $("#result").show();
      $("#invalid").hide();
    } else {
      $(".not").text("");
      $("#result").show();
      $("#invalid").hide();
    }

    // if (result === NaN) {
    //   $("#invalid").show();
    //   $("#results").hide();
    // } else {
    //
    // }

    event.preventDefault();
  });
});
