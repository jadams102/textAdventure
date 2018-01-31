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
  $("#textBox").slideToggle();
}
})
$("#restartBtn").click(function() {
  reset();
})
$("#commandsBtn").click(function() {
  if (level >= 1) {
  $("ul#commandsList").slideToggle();
  $("#textBox").slideToggle();
}
})
$("#creditsBtn").click(function() {
  if (level >= 1) {
  $("#creditsPanel").slideToggle();
  $("#gameTextPanel").slideToggle();
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
    $("body").addClass("stage2");
    console.log(level);
  } else if (level === 3) {
    stage3(input);
    $("body").addClass("stage3");
  } else if (level === 4) {
    stage4(input);
    $("body").addClass("stage4");
  }
});
});
