// Expected inputs - Walk to [bed,window,desk,closet] look at [], use [button], room description []
var stageOne = {
  roomDescript: "You are in a small room aboard the SSE Woodpecker. The walls and floor shimmer from the flourescent lights overhead. Your eyes adjust to the light after your long rest. On the west wall is a closet. Your gaze turns to the south end of the room and you find a small button and a slit in the wall. It is several feet beyond the foot of the bed. Tucked away in the southwest corner is a small desk. There is a tablet sitting on it.",
  bedDescript: "A small solitary bed, with a thin mattress.",
  closetExteriorDescript: "As you approach the closet, you notice that there is no obvious handle. There is an array of buttons on the wall next to the closet.",
  closetButton: "You click the button and with a blast of air, the doors slide up into the ceiling revealing the space behind.",
  closetInteriorDescript: "The closet contains many things, none of them seem like they would be much use to you at this point.",
  dresserDescript: "You approach the dresser, it is large and glinting in the light.",
  windowDescript: "The only window is a port hole. For a moment you are wooed by the vastness of space.",
  doorDescript: "A loud alert beep sounds off. You quickly survey the room again. You hear mechanical grinding, but the door doesn't move an inch.",
  doorButton: "Upon closer inspection you find, again, there are several buttons. These buttons are much smaller. A few of them having a blinking light in the center.",
  deskDescript: "A plain surface. The edges look sharp. There is something transparent and expensive looking sitting on top of it.",
  screenDescript: "You find the transparent/expensive something to be a screen. You are reminded of your kindle at home. The screen displays the an alert that there's been some microbial infestation on the ship. The thought of this makes you feel sick, you should go back to bed and go to sleep.",
  stageOneSleep: "You lay down and wait for the feelings to pass. You fall asleep."

};
var stageTwo = {
  wakeUpDescript: "You are woken up to a scratching sound. You wonder about mice and sheet metal. The pitter patter of little feet isn't so cute right now.",
  bedDescript: "The bed is messy because you didn't make it when you got up.",
  closetExteriorDescript: "The closet glints in the light. The button on the left side is also especially shiny today.",
  closetButton: "Your messy bed hair is blown back and your eyes water.",
  closetInteriorDescript: "You decide to dig around. Luckily you did so delicately, as you find a medical kit with an encased syringe in a glowing tube. ",
  dresserDescript: "You consider changing your clothes and then realize you literally don't care.",
  windowDescript: "You gaze out and see a few star clusters. Were those the same ones from yesterday?",
  doorDescript: "The door seems as tight and sealed as ever.",
  doorButton: "You fumble around with the buttons. They seem to all only control equally terrible sounds.",
  deskDescript: "You stare at the desk waiting for some computer games and mountain dew to appear, but alas...",
  screenDescript: "You scroll and find some memos from the Captain's log, 'all is well.'",
  medKitDescript: "You get closer to the small steel case. The syringe inside seems to being slowly dripping orange liquid.",
  syringeDescript: "The syringe looks so large in your hand. You're careful to not touch any of the orange liquid.",
  syringeUseDescript: "You jam the syringe in your jugular. The alien that was living on the back of your neck subsists from your now lifeless body. You die, but it will now live on in your honor.",
  stageTwoSleep: "You slide the syringe underneath your bed, lay your head down, and are now painfully aware of a light burning feeling on the back of your neck. You reach back to scratch it and feel relief, you can sleep well.",

}
//
// Stage 3 object //
//
var stageThree = {
  wakeUpDescript: "You awake rested and refreshed. The burning feeling before bed has passed, and is replaced by a dampness on your neck from your pillow. You reach back and touch your neck, it is lightly crusted with blood. You sit up and find bloodstains right beneath your head. There is a small trail of blood to the vent in the floor.",
  bedDescript: "The sheets are destroyed from your night time injury.",
  closetExteriorDescript: "You see the steel is scratched and chipping away on the floor and at the door opening.",
  closetButton: "You smash the buttons to see what is in the closet, but there is no response.",
  closetInteriorDescript: "The door won't open",
  ventDescript: "You get closer to the vent. Whatever slithered down there must have been slimy and flexible.",
  ventOpenDescript: "You try to open the vent. A nasty slime gets on your hand. Your hands are too slick and the vent won't budge.",
  dresserDescript: "The clothes are destroyed. There was a nest here.",
  windowDescript: "The glass has a hairline crack in it. On the other side of it, is gaseous clouds and space shuttle pieces. ",
  doorDescript: "The door looks untouched but doesn't work.",
  doorButton: "Unresponsive.",
  deskDescript: "The desk is untouched, the screen atop it flickers.",
  screenDescript: "The screen reads: 'SECURITY BREACH!!!' which seems obvious at this point.",
  syringeDescript: "The syringe sits under the bed untouched by human hands.",
  syringeUseDescript: "Are you serious? The syringe fills you with goofy juice that makes you incredibly heavy and then you fall through the ship floor and are sucked into unforgiving space.",
  stageThreeSleep: "You lay back down and try to fall asleep. You fall asleep with literally one eye open.",

}
//
// stage 4 object //
//
var stageFour = {
  wakeUpDescript: "*Sirens sounding* You awake with a start and look around.",
  bedDescript: "The old blood is the color of rust. You notice a black goo right around the pillow.",
  closetExteriorDescript: "The closet has the same goo as was on the bed around the perimeter of the door.",
  closetButton: "You smash buttons and nothing changes. You begin to push them calmly and methodically. You hear the whoosh sound, and again the door opens.",
  closetInteriorDescript: "You see a snake-like creature on the ground ready to strike. You smash buttons on the wall again and the door shuts just in time. You hear it hit the door and a small indent forms.",
  dresserDescript: "You find creature eggs. The closet door bursts open, there is a snake-like alien inside, you are able to reach the button quickly enough to close the door before you are killed. ",
  windowDescript: "The cracks are growing.",
  doorDescript: "The door doesn't budge.",
  doorButton: "You try all the buttons, they don't seem to be doing anything, but you begin to hear an obvious commotion in the hallway.",
  deskDescript: "The tablet is broken and you hear shrieks from just beyond the walls.",
  screenDescript: "The screen smashed beyond repair.",
  syringeDescript: "The syringe sits ready for use.",
  syringeUseDescript: "In your moment of panic you slide in the goo and stick yourself with the syringe. Sayonara sucker.",


}
//
// End of stages //
//


//
//Commands//
//
var back = ["BACK"]
var stageOneSleep1 = ["GO TO SLEEP", "SLEEP", "USE BED"]
var bedCommands1 =  ["WALK TO BED", "GO BED", "BED", "LOOK AT BED"];
var closetCommands1 =  ["WALK TO CLOSET", "CLOSET", "GO CLOSET", "LOOK AT CLOSET"];
var closetInterior1 = ["LOOK IN CLOSET"];
var closetButton1 = ["USE CLOSET BUTTON", "OPEN CLOSET", "BUTTON", "USE BUTTON"];
var dresserCommands1 =  ["WALK TO DRESSER", "DRESSER", "GO DRESSER", "LOOK AT DRESSER"];
var windowCommands1 =  ["WALK TO WINDOW", "WINDOW", "GO WINDOW", "LOOK AT WINDOW"];
var doorCommands1 =  ["WALK TO DOOR", "GO DOOR", "DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands1 =  ["WALK TO DESK", "DESK", "GO DESK", "LOOK AT DESK"];
var screenCommands1 =  ["LOOK AT TABLET", "TAKE TABLET", "USE TABLET"];
//
//stage 2 commands //
//
var back = ["BACK"]
var stageTwoWakeUp = ["WAKE UP"]
var medKitCommands2 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT"];
var syringeStage2 =  ["TAKE SYRINGE", "LOOK AT SYRINGE"];
var useSyringeStage2 = ["USE SYRINGE"]
var stageTwoSleep2 = ["GO TO SLEEP"]
var bedCommands2 =  ["WALK TO BED", "LOOK AT BED"];
var closetCommands2 =  ["WALK TO CLOSET", "LOOK AT CLOSET"];
var closetInterior2 = ["LOOK IN CLOSET"];
var closetButton2 = ["USE CLOSET BUTTON"];
var dresserCommands2 =  ["WALK TO DRESSER", "LOOK AT DRESSER"];
var windowCommands2 =  ["WALK TO WINDOW", "LOOK AT WINDOW"];
var doorCommands2 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands2 =  ["WALK TO DESK", "LOOK AT DESK"];
var screenCommands2 =  ["LOOK AT SCREEN", "USE SCREEN"];
// //
//stage 3 commands //
// //
var back = ["BACK"]
var stageThreeWakeUp = ["WAKE UP"]
var medKitCommands3 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT"];
var syringeStage3 =  ["TAKE SYRINGE", "LOOK AT SYRINGE"];
var useSyringeStage3 = ["USE SYRINGE"]
var stageThreeSleep3 = ["GO TO SLEEP"]
var bedCommands3 =  ["WALK TO BED", "LOOK AT BED"];
var closetCommands3 =  ["WALK TO CLOSET", "LOOK AT CLOSET"];
var closetInterior3 = ["LOOK IN CLOSET"];
var closetButton3 = ["USE CLOSET BUTTON"];
var dresserCommands3 =  ["WALK TO DRESSER", "LOOK AT DRESSER"];
var windowCommands3 =  ["WALK TO WINDOW", "LOOK AT WINDOW"];
var doorCommands3 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands3 =  ["WALK TO DESK", "LOOK AT DESK"];
var screenCommands3 =  ["LOOK AT SCREEN", "USE SCREEN"];
var vent3 = ["WALK TO VENT", "LOOK AT VENT"];
var openVent3 = ["OPEN VENT"];
// //
//Stage 4 commands //
// //
var back = ["BACK"]
var stage4WakeUp = ["WAKE UP"]
var medKitCommands4 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT"];
var syringeStage4 =  ["TAKE SYRINGE", "LOOK AT SYRINGE"];
var useSyringeStage4 = ["USE SYRINGE"]
var stageFourSleep4 = ["GO TO SLEEP"]
var bedCommands4 =  ["WALK TO BED", "LOOK AT BED"];
var closetCommands4 =  ["WALK TO CLOSET", "LOOK AT CLOSET"];
var closetInterior4 = ["LOOK IN CLOSET"];
var closetButton4 = ["USE CLOSET BUTTON"];
var dresserCommands4 =  ["WALK TO DRESSER", "LOOK AT DRESSER"];
var windowCommands4 =  ["WALK TO WINDOW", "LOOK AT WINDOW"];
var doorCommands4 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands4 =  ["WALK TO DESK", "LOOK AT DESK"];
var screenCommands4 =  ["LOOK AT SCREEN", "USE SCREEN"];
// //
// Stage 5 commands //
// //
var back = ["BACK"]
var medKitCommands5 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT"];
var syringeStage5 =  ["TAKE SYRINGE", "LOOK AT SYRINGE"];
var useSyringeStage5 = ["USE SYRINGE"]
var bedCommands5 =  ["WALK TO BED", "LOOK AT BED"];
var closetCommands5 =  ["WALK TO CLOSET", "LOOK AT CLOSET"];
var closetInterior5 = ["LOOK IN CLOSET"];
var closetButton5 = ["USE CLOSET BUTTON"];
var dresserCommands5 =  ["WALK TO DRESSER", "LOOK AT DRESSER"];
var windowCommands5 =  ["WALK TO WINDOW", "LOOK AT WINDOW"];
var doorCommands5 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands5 =  ["WALK TO DESK", "LOOK AT DESK"];
var screenCommands5 =  ["LOOK AT SCREEN", "USE SCREEN"];
//
// End of commands //
//

//
// Container protoype //
//
Array.prototype.contains = function(commands) {
  return this.indexOf(commands) > -1;
}

var reset = function() {
  location.reload();
}
var commands = function() {
  ("ul#commandsList").slideToggle();
}

//
// End of prototype //
//

//
// Stage one if statement //
//
var stage1 = function(input) {
if (bedCommands1.contains(input)) {
$("h5").text(stageOne.bedDescript);
$("ul#gameLog").append(stageOne.bedDescript);
$("#userInputText").val("");
} else if (closetCommands1.contains(input)) {
$("h5").text(stageOne.closetExteriorDescript);
$("ul#gameLog").append(stageOne.closetExteriorDescript);
console.log(level);
$("#userInputText").val("");
} else if (dresserCommands1.contains(input)) {
$("h5").text(stageOne.dresserDescript);
$("ul#gameLog").append(stageOne.dresserDescript);
$("#userInputText").val("");
} else if (closetButton1.contains(input)) {
$("h5").text(stageOne.closetButton);
$("ul#gameLog").append(stageOne.closetButton);
$("#userInputText").val("");
} else if (closetInterior1.contains(input)) {
$("h5").text(stageOne.closetInteriorDescript);
$("ul#gameLog").append(stageOne.closetInteriorDescript);
$("#userInputText").val("");
} else if (windowCommands1.contains(input)) {
$("h5").text(stageOne.windowDescript);
$("ul#gameLog").append(stageOne.windowDescript);
$("#userInputText").val("");
} else if (doorCommands1.contains(input)) {
$("h5").text(stageOne.doorDescript);
$("ul#gameLog").append(stageOne.doorDescript);
$("#userInputText").val("");
} else if (deskCommands1.contains(input)) {
$("h5").text(stageOne.deskDescript);
$("ul#gameLog").append(stageOne.deskDescript);
$("#userInputText").val("");
} else if (screenCommands1.contains(input)) {
$("h5").text(stageOne.screenDescript);
$("ul#gameLog").append(stageOne.screenDescript);
$("#userInputText").val("");
} else if (stageOneSleep1.contains(input)) {
$("h5").text(stageOne.stageOneSleep);
$("ul#gameLog").append(stageOne.stageOneSleep);
$("#userInputText").val("");
level++;
}
}
//
// End of stage 1 statement //
//


//
// Stage 2 if statement //
//
var stage2 = function(input) {
  if (stageTwoWakeUp.contains(input)) {
  $("h5").text(stageTwo.wakeUpDescript);
  $("ul#gameLog").append(stageTwo.wakeUpDescript);
  $("#userInputText").val("");
} else if (bedCommands2.contains(input)) {
  $("h5").text(stageTwo.bedDescript);
  $("ul#gameLog").append(stageTwo.bedDescript);
  $("#userInputText").val("");
} else if (closetCommands2.contains(input)) {
  $("h5").text(stageTwo.closetExteriorDescript);
  $("ul#gameLog").append(stageTwo.closetExteriorDescript);
  console.log(level);
  $("#userInputText").val("");
} else if (dresserCommands2.contains(input)) {
  $("h5").text(stageTwo.dresserDescript);
  $("ul#gameLog").append(stageTwo.dresserDescript);
  $("#userInputText").val("");
} else if (windowCommands2.contains(input)) {
  $("h5").text(stageTwo.windowDescript);
  $("ul#gameLog").append(stageTwo.windowDescript);
  $("#userInputText").val("");
} else if (doorCommands2.contains(input)) {
  $("h5").text(stageTwo.doorDescript);
  $("ul#gameLog").append(stageTwo.doorDescript);
  $("#userInputText").val("");
} else if (deskCommands2.contains(input)) {
  $("h5").text(stageTwo.deskDescript);
  $("ul#gameLog").append(stageTwo.deskDescript);
  $("#userInputText").val("");
} else if (screenCommands2.contains(input)) {
  $("h5").text(stageTwo.screenDescript);
  $("ul#gameLog").append(stageTwo.screenDescript);
  $("#userInputText").val("");
} else if (medKitCommands2.contains(input)) {
  $("h5").text(stageTwo.medKitDescript);
  $("ul#gameLog").append(stageTwo.medKitDescript);
  $("#userInputText").val("");
} else if (syringeStage2.contains(input)) {
  $("h5").text(stageTwo.syringeDescript);
  $("ul#gameLog").append(stageTwo.syringeDescript);
  $("#userInputText").val("");
} else if (closetButton2.contains(input)) {
  $("h5").text(stageTwo.closetButton);
  $("ul#gameLog").append(stageTwo.closetButton);
  $("#userInputText").val("");
} else if (closetInterior2.contains(input)) {
  $("h5").text(stageTwo.closetInteriorDescript);
  $("ul#gameLog").append(stageTwo.closetInteriorDescript);
  $("#userInputText").val("");
} else if (useSyringeStage2.contains(input)) {
  $("h5").text(stageTwo.syringeUseDescript);
  $("ul#gameLog").append(stageTwo.syringeUseDescript);
  $("#userInputText").val("");
} else if (stageTwoSleep2.contains(input)) {
  $("h5").text(stageTwo.stageTwoSleep);
  $("ul#gameLog").append(stageTwo.stageTwoSleep);
  $("#userInputText").val("");
  level++;
}
}
//
// End of stage 2 statement //
//


//
// Stage 3 if statement //
//
var stage3 = function(input) {
  if (stageThreeWakeUp.contains(input)) {
  $("h5").text(stageThree.wakeUpDescript);
  $("#userInputText").val("");
  $("ul#gameLog").append(stageThree.wakeUpDescript);
} else if (bedCommands3.contains(input)) {
  $("h5").text(stageThree.bedDescript);
  $("ul#gameLog").append(stageThree.bedDescript);
  $("#userInputText").val("");
} else if (closetCommands3.contains(input)) {
  $("h5").text(stageThree.closetExteriorDescript);
  $("ul#gameLog").append(stageThree.bedDescript);
  console.log(level);
  $("#userInputText").val("");
} else if (dresserCommands3.contains(input)) {
  $("h5").text(stageThree.dresserDescript);
  $("ul#gameLog").append(stageThree.dresserDescript);
  $("#userInputText").val("");
} else if (windowCommands3.contains(input)) {
  $("h5").text(stageThree.windowDescript);
  $("ul#gameLog").append(stageThree.windowDescript);
  $("#userInputText").val("");
} else if (doorCommands3.contains(input)) {
  $("h5").text(stageThree.doorDescript);
  $("ul#gameLog").append(stageThree.doorDescript);
  $("#userInputText").val("");
} else if (deskCommands3.contains(input)) {
  $("h5").text(stageThree.deskDescript);
  $("ul#gameLog").append(stageThree.deskDescript);
  $("#userInputText").val("");
} else if (screenCommands3.contains(input)) {
  $("h5").text(stageThree.screenDescript);
  $("ul#gameLog").append(stageThree.screenDescript);
  $("#userInputText").val("");
} else if (medKitCommands3.contains(input)) {
  $("h5").text(stageThree.medKitDescript);
  $("ul#gameLog").append(stageThree.medKitDescript);
  $("#userInputText").val("");
} else if (syringeStage3.contains(input)) {
  $("h5").text(stageThree.syringeDescript);
  $("ul#gameLog").append(stageThree.syringeDescript);
  $("#userInputText").val("");
} else if (closetButton3.contains(input)) {
  $("h5").text(stageThree.closetButton);
  $("ul#gameLog").append(stageThree.closetButton);
  $("#userInputText").val("");
} else if (closetInterior3.contains(input)) {
  $("h5").text(stageThree.closetInteriorDescript);
  $("ul#gameLog").append(stageThree.closetInteriorDescript);
  $("#userInputText").val("");
} else if (useSyringeStage3.contains(input)) {
  $("h5").text(stageThree.syringeUseDescript);
  $("ul#gameLog").append(stageThree.syringeUseDescript);
  $("#userInputText").val("");
} else if (vent3.contains(input)) {
  $("h5").text(stageThree.ventDescript);
  $("ul#gameLog").append(stageThree.ventDescript);
  $("#userInputText").val("");
} else if (openVent3.contains(input)) {
  $("h5").text(stageThree.ventOpenDescript);
  $("ul#gameLog").append(stageThree.ventOpenDescript);
  $("#userInputText").val("");
} else if (stageThreeSleep3.contains(input)) {
  $("h5").text(stageThree.stageThreeSleep);
  $("ul#gameLog").append(stageThree.stageThreeSleep);
  $("#userInputText").val("");
  level++;
  console.log(level);
}
}
//
// End of stage 3 statement //
//


//
// Stage 4 if statement //
//
var stage4 = function(input) {
  if (stage4WakeUp.contains(input)) {
  $("h5").text(stageFour.wakeUpDescript);
  $("#userInputText").val("");
  $("ul#gameLog").append(stageFour.wakeUpDescript);
} else if (bedCommands4.contains(input)) {
  $("h5").text(stageFour.bedDescript);
  $("ul#gameLog").append(stageFour.bedDescript);
  $("#userInputText").val("");
} else if (closetCommands4.contains(input)) {
  $("h5").text(stageFour.closetExteriorDescript);
  $("ul#gameLog").append(stageFour.bedDescript);
  console.log(level);
  $("#userInputText").val("");
} else if (dresserCommands4.contains(input)) {
  $("h5").text(stageFour.dresserDescript);
  $("ul#gameLog").append(stageFour.dresserDescript);
  $("#userInputText").val("");
  level++;
} else if (windowCommands4.contains(input)) {
  $("h5").text(stageFour.windowDescript);
  $("ul#gameLog").append(stageFour.windowDescript);
  $("#userInputText").val("");
} else if (doorCommands4.contains(input)) {
  $("h5").text(stageFour.doorDescript);
  $("ul#gameLog").append(stageFour.doorDescript);
  $("#userInputText").val("");
} else if (deskCommands4.contains(input)) {
  $("h5").text(stageFour.deskDescript);
  $("ul#gameLog").append(stageFour.deskDescript);
  $("#userInputText").val("");
} else if (screenCommands4.contains(input)) {
  $("h5").text(stageFour.screenDescript);
  $("ul#gameLog").append(stageFour.screenDescript);
  $("#userInputText").val("");
} else if (medKitCommands4.contains(input)) {
  $("h5").text(stageFour.medKitDescript);
  $("ul#gameLog").append(stageFour.medKitDescript);
  $("#userInputText").val("");
} else if (syringeStage4.contains(input)) {
  $("h5").text(stageFour.syringeDescript);
  $("ul#gameLog").append(stageFour.syringeDescript);
  $("#userInputText").val("");
} else if (closetButton4.contains(input)) {
  $("h5").text(stageFour.closetButton);
  $("ul#gameLog").append(stageFour.closetButton);
  $("#userInputText").val("");
} else if (closetInterior4.contains(input)) {
  $("h5").text(stageFour.closetInteriorDescript);
  $("ul#gameLog").append(stageFour.closetInteriorDescript);
  $("#userInputText").val("");
  level++;
} else if (useSyringeStage4.contains(input)) {
  $("h5").text(stageFour.syringeUseDescript);
  $("ul#gameLog").append(stageFour.syringeUseDescript);
  $("#userInputText").val("");
}
}
//
// End of stage 4 statement //
//

//
// global variables //
//
var level = 0;
//
// end of global variables //
//
