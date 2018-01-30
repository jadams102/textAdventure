$(document).ready(function() {
$("form#user").submit(function(event) {
  event.preventDefault();
    var userName = $("#userName").val();

})
$("form#userInput").submit(function(event) {
    var input = $("#userInput").val();

})
})
var stageOne = {
  roomDescript: "You are in a bed with white sheets that have a slight smell of moth balls and lysol. You are in a room made entirely of stainless steel. The surfaces shimmer from the flourescent lights overhead. Your eyes adjust to the light after your long rest. On the west wall is a closet with a door resembling an elevator door. There is no apparent door. You gaze wide eyed and find a small button and a slit in the wall. It is several feet beyond the foot of the bed. Tucked away in the southwest corner is a small desk. There is something atop it. You remember canned sardines."
  bedDescript: "A small solitary bed, with a thin mattress."
  closetExteriorDescript: "As you approach the closet, you notice that there is no obvious handle. There is an array of buttons on the wall next to the closet."
  closetButton: "You click the button and with a blast of air, the doors slide up into the ceiling revealing the space behind."
  closetInteriorDescript: "The closet contains many things, none of them are recognizable to you, Earthling."
  dresserDescript: "You approach the dresser, it is large and glinting in the light. It reminds you of a freezer, from Earth, where you are from."
  windowDescript: "The only window is a port hole. For a moment you are wooed by the vastness of space."
  doorDescript: "A loud alert beep sounds off. You quickly survey the room again. You hear mechanical grinding, but the door doesn't move an inch."
  doorButton: "Upon closer inspection you find, again, there are several buttons. These buttons are much smaller. A few of them having a blinking light in the center."
  deskDescript: "A plain surface. The edges look sharp. There is something transparent and expensive looking sitting on top of it."
  screenDescript: "You find the transparent/expensive something to be a screen. You are reminded of your kindle at home. The screen displays the an alert that there's been some microbial infestation on the ship."

}
var stageTwo = {
  roomDescript: "You are woken up to a scratching sound. You wonder about mice and sheet metal. The pitter patter of little feet isn't so cute right now."
  bedDescript: "The bed is messy because you didn't make it when you got up."
  closetExteriorDescript: "The closet glints in the light."
  closetButton: "Your messy bed hair is blown back and your eyes water."
  closetInteriorDescript: "You decide to dig around. Luckily you did so delicately, as you find a medical kit with a syringe filled and dripping with a glowing liquid."
  dresserDescript: "You consider changing your clothes and then realize you literally don't care."
  windowDescript: "You gaze out and see a few star clusters. Were those the same ones from yesterday?"
  doorDescript: "The door seems as tight and sealed as ever."
  doorButton: "You fumble around with the buttons. They seem to all only control equally terrible sounds."
  deskDescript: "You stare at the desk waiting for some computer games and mountain dew to appear, but alas..."
  screenDescript: "You scroll and find some memos from the Captain's log, 'all is well.'"

}
