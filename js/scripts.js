$(document).ready(function() {
  $('form:first *:input[type!=hidden]:first').focus();
  $("form#startGameForm").submit(function(event) {
  event.preventDefault();
    $("#userNamePanel").show();
    $("#titlePanel").hide();
    $("#textBox").text("")
});
$("form#user").submit(function(event) {
  event.preventDefault();
    var userName = $("#userName").val();
    console.log(userName);
    $("#userNamePanel").hide();
    $("#gameTextPanel").show();
    $("#nameDisplay").text("Hello " + userName + ", Welcome to Alienoid!");
    $("#textBox").text(stageOne.roomDescript);
    level++;
});
$("#logBtn").click(function() {
  if (level >= 1) {
  $("ul#gameLog").slideToggle();
  $("#restartBtn").toggle();
  $("#commandsBtn").toggle();
  $("#creditsBtn").toggle();
  $("#mapBtn").toggle();
  $("#textBox").toggle();
  $("ul#credits").hide();
}
})
$("#restartBtn").click(function() {
  reset();
})
$("#creditsBtn").click(function() {
  $("ul#credits").slideToggle();
  $("#restartBtn").toggle();
  $("#mapBtn").toggle();
  $("#logBtn").toggle();
  $("#textBox").toggle();
})
$("#mapBtn").click(function() {
  $("#mapDiv").slideToggle();
  $("#restartBtn").toggle();
  $("#comandsBtn").toggle();
  $("#commandsBtn").toggle();
  $("#creditsBtn").toggle();
  $("#logBtn").toggle();
  $("#textBox").toggle();
  $("ul#gameLog").hide();
})

$("form#userInput").submit(function(event) {
  event.preventDefault();
  var input = ($("#userInputText").val()).toUpperCase();
  $("ul#gameLog").append("<li>" + input + "</li>");
    if (level === 1) {
      $("#nameDisplay").hide();
      stage1(input);
  } else if (level === 2) {
    $("body").addClass("stage2");
    stage2(input);
    console.log(level);
  } else if (level === 3) {
    $("body").addClass("stage3");
    stage3(input);
  } else if (level === 4) {
    $("body").addClass("stage4");
    stage4(input);
  } else if (level === 5) {
    $("body").addClass("stage5");
    stage5(input);
  }
});
});
