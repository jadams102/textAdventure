$(document).ready(function() {
  $('form:first *:input[type!=hidden]:first').focus();
  $("form#startGameForm").submit(function(event) {
  event.preventDefault();
    $("#userNamePanel").show();
    $("#titlePanel").hide();
    $("h5").text("")
});
$("form#user").submit(function(event) {
  event.preventDefault();
    var userName = $("#userName").val();
    console.log(userName);
    $("#userNamePanel").hide();
    $("#gameTextPanel").show();
    $("#nameDisplay").text("Hello " + userName + ", Welcome to Alienoid!");
    $("h5").text(stageOne.roomDescript);
    level++;
});
$("#logBtn").click(function() {
  if (level >= 1) {
  $("ul#gameLog").slideToggle();
  $("#textBox").slideToggle();
}
})
$("form#userInput").submit(function(event) {
  event.preventDefault();
  var input = ($("#userInputText").val()).toUpperCase();
  $("ul#gameLog").append("<li>" + input + "</li>");
    if (level === 1) {
      $("#nameDisplay").hide();
      stage1(input);
  } else if (level === 2) {
    stage2(input);
  } else if (level === 3) {
    stage3(input);
  } else if (level === 4) {
    stage4();
  }
});
});
