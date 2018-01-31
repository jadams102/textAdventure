// Expected inputs - Walk to [bed,window,desk,closet] look at [], use [button], room description []
var backObject = {
  backDescript: "You are aboard the SSE Woodpecker on your way back to earth with your dream vacation in the rear view mirror. You'll always remember the lagoon swims, the volcano hikes and of course the quirky local food. Fortunately, your room for the journey home comes fully equipped with all the luxury that one could expect from New Stellar Incorporations. Make sure to read your tablet everyday for updates from our captain. If you have any questions just type help. Enjoy your stay and thank you for booking with New Stellar Inc. 'Preparing for a better you.'",
}
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
  deskDescript: "A plain surface. The edges look sharp. There is a very smooth looking transparent tablet sitting on top of it.",
  screenDescript: "Though this tablet seems very advanced, it feels familiar to you. The screen displays a message from the captain: 'Hello Passengers! Hope you are enjoying your stay. Just wanted to let you know that the ship has experienced a small breach of a foreign microbial infection. No cause for alarm, just remember to wash your hands before having a great time on the SSE Woodpecker!'",
  stageOneSleep: "After your first day on the ship, you are excited to get some well deserved rest."

};
var stageTwo = {
  wakeUpDescript: "You are woken up to a scratching sound coming from the walls. It is probably just the rats that the crew warned the passengers about.",
  bedDescript: "The bed is messy because you didn't make it when you got up.",
  closetExteriorDescript: "The closet glints in the light. The button on the left side is also especially shiny today.",
  closetButton: "Your messy bed hair is blown back and your eyes water.",
  closetInteriorDescript: "You decide to dig around. Luckily you did so delicately, as you find a medical kit with an encased syringe in a glowing tube.",
  dresserDescript: "You consider changing your clothes and then realize that the assigned active wear the crew passed out when you arrived all looks the same",
  windowDescript: "You gaze out and see a few star clusters. Were those the same ones from yesterday?",
  doorDescript: "The door seems as tight and sealed as ever.",
  doorButton: "You fumble around with the buttons. They seem to all only control equally terrible sounds.",
  deskDescript: "You stare at the desk waiting for some computer games and mountain dew to appear, but alas...",
  screenDescript: "You pick up the tablet and open the most recent notification: 'Dear passengers, I know there has been talk of something crawling around the vents. As your captain I can assure you that you are in no danger. The SSE Woodpecker is inspected daily and no anomalies have been detected. Have a good day and thank your for choosing New Stellar Inc.'",
  medKitDescript: "You get closer to the small steel case. The syringe inside seems to being slowly dripping an orange liquid.",
  syringeDescript: "The syringe looks so large in your hand. You're careful to not touch any of the orange liquid. You store it under your bed for safe keeping.",
  syringeUseDescript: "You jam the syringe in your jugular. You suddenly became painfully aware of an organism that had been living on the back of your neck. It detaches itself and watches as the syringe's contents slowly drain into your blood stream. As you feel the last drops fill your veins, the creature starts moving towards you. 'Could this really be how it ends' you think, as your vision goes dark.",
  stageTwoSleep: "You lay your head down, trying to adjust your pillow for the now horrible burning sensation on the back of your neck. After hours of struggling you finally succumb to your to exhaustion and rest.",

}
//
// Stage 3 object //
//
var stageThree = {
  wakeUpDescript: "You awake rested and refreshed. The burning feeling before bed has passed, and is replaced by a dampness on your neck from your pillow. You reach back and touch your neck, it is lightly crusted with blood. You sit up and find bloodstains right beneath your head. There is a small trail of blood to the vent in the floor.",
  bedDescript: "The sheets are destroyed from your night time injury.",
  closetExteriorDescript: "You see the steel is scratched and chipping away on the floor and at the door opening.",
  closetButton: "You reach for the button, but hear a rustling in the closet. Probably best to keep it closed for now.",
  closetInteriorDescript: "The rustling from inside the closet is enough motivation for you to stay away from the door.",
  ventDescript: "You get closer to the vent. Whatever slithered down there must have been slimy and flexible.",
  ventOpenDescript: "You try to open the vent. A nasty slime gets on your hands. Your hands are too slick and the vent won't budge.",
  dresserDescript: "The clothes are destroyed. It appears that something had made a nest in the top drawer.",
  windowDescript: "The glass has a hairline crack in it. On the other side of it are gaseous clouds and what look like pieces from a long forgotten space shuttle. ",
  doorDescript: "The door looks untouched but doesn't work.",
  doorButton: "You press the button a few times, the door doesn't move and the grinding noises have stopped as well.",
  deskDescript: "The desk is untouched, the tablet sits blank on top.",
  screenDescript: "The tablet is blank, the lack of a message from the ships captain is less than comforting",
  syringeDescript: "The syringe remains under the bed where you stored it. The glowing orange liquid's purpose still escapes you.",
  syringeUseDescript: "Are you serious? The syringe fills you with goofy juice that makes you incredibly heavy and then you fall through the ship floor and are sucked into unforgiving space.",
  stageThreeSleep: "As you lay your head down and begin to drift off, rustling from the closet jolts you awake. This continues for some time, but eventually you convince yourself it is just a large rodent and fall asleep.",

}
//
// stage 4 object //
//
var stageFour = {
  wakeUpDescript: "Your peaceful sleep is abruptly interrupted by a blaring siren. The tablet on the table is vibrating with notifications from the crew.",
  bedDescript: "The old blood is the color of rust. You notice a black goo right around the pillow.",
  closetExteriorDescript: "The closet has the same goo as was on the bed around the perimeter of the door.",
  closetButton: "You smash buttons and nothing changes. You begin to push them calmly and methodically. You hear the whoosh sound, and again the door opens.",
  closetInteriorDescript: "You see a snake-like creature on the ground ready to strike. You smash buttons on the wall again and the door shuts just in time. You hear it hit the door and a small indent forms. As you back away the door to your room is blown off its hinges and a larger snake-like alien slithers under the desk.",
  dresserDescript: "You find creature eggs. The closet door bursts open, there is a snake-like alien inside, you are able to reach the button quickly enough to close the door before you are killed. As you back away the door to your room is blown off its hinges and a larger snake-like alien slithers under the desk.",
  windowDescript: "The cracks are growing.",
  doorDescript: "The door doesn't budge.",
  doorButton: "You try all the buttons, they don't seem to be doing anything, but you begin to hear an obvious commotion in the hallway. The closet door bursts open, there is a snake-like alien inside, you are able to reach the button quickly enough to close the door before you are killed. As you back away the door to your room is blown off its hinges and a larger snake-like alien slithers under the desk.",
  deskDescript: "The tablet screen is badly damged and flickering.",
  screenDescript: "The screen is beyond repair, but you can make out a few words: 'Alien' and 'Evacuation' are among the more worrisome.",
  syringeDescript: "The syringe sits ready for use.",
  syringeUseDescript: "In your moment of panic you slide in the goo and stick yourself with the syringe. Sayonara sucker.",

var stageFive = {
  bedDescript5: "You move toward the bloody bed and remember the syringe stashed underneath.",
  bedDescript5Turn2: "You step over to take a look under the bed, but before you can look down your legs are bound tightly by the creatures massive tail. "
  syringeGrab5: "You pick up the syringe and turn back towards the room.",
  kill5: "You heroically jump onto the snake, but are quickly bested by the snakes strength. It wraps its tail around your body and squeezes till your lights go out.",
  killWith5Turn2: "You heroically jump onto the snake, and plunge the syringe into the snakes thick skin. The snake recoils and slithers away. It starts to violently pulse, it makes an awful screeching noise and begins to spew a thick black ooze. The more ooze that comes out of the snake the thinner the snake becomes until the snake is paper thin on the ground. The room, and yourself are coated with the warm, rancid smelling sludge. After regaining your composure, you step out of the now open door ready to assist the other passengers of the SSE Woodpecker against this alien menace."
  deskDescript5Turn1: "You move towards the desk to investigate the creature. You stick your head down to take a look and are greeted with thousands of needle like teeth.",
  deskDescript5Turn2: "The snake struck at you, but missed you by an inch. It slithers under the bed.",
  windowTurn1Descript: "You gaze out at the beauty of space, and for a moment forget about your current situation, and the looming threat of the horrible monster.",
  windowTurn2Descript: "You take a moment to appreciate the majesty of space, but quickly feel the pain of a thousand tiny teeth sinking into your back. As your screams fade away, your last "



}

//
// End of stages //
//


//
//Commands//
//
var back1 = ["BACK"]
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
var back2 = ["BACK"]
var stageTwoWakeUp = ["WAKE UP"]
var medKitCommands2 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT"];
var syringeStage2 =  ["TAKE SYRINGE", "LOOK AT SYRINGE", "SYRINGE", "GRAB SYRINGE"];
var useSyringeStage2 = ["USE SYRINGE"]
var stageTwoSleep2 = ["GO TO SLEEP", "SLEEP", "SLEEP IN BED"]
var bedCommands2 =  ["WALK TO BED", "LOOK AT BED", "BED", "GO TO BED"];
var closetCommands2 =  ["WALK TO CLOSET", "LOOK AT CLOSET", "CLOSET", "GO TO BED"];
var closetInterior2 = ["LOOK IN CLOSET", "GO IN CLOSET"];
var closetButton2 = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON"];
var dresserCommands2 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER"];
var windowCommands2 =  ["WALK TO WINDOW", "LOOK AT WINDOW", "WINDOW", "GO TO WINDOW", "LOOK OUT WINDOW"];
var doorCommands2 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR", "GO TO DOOR", "DOOR"];
var deskCommands2 =  ["WALK TO DESK", "LOOK AT DESK", "DESK", "GO TO DESK"];
var screenCommands2 =  ["LOOK AT TABLET", "USE TABLET", "TAKE TABLET"];
// //
//stage 3 commands //
// //
var back3 = ["BACK"]
var stageThreeWakeUp = ["WAKE UP"]
var medKitCommands3 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT"];
var syringeStage3 =  ["TAKE SYRINGE", "LOOK AT SYRINGE", "SYRINGE", "GRAB SYRINGE"];
var useSyringeStage3 = ["USE SYRINGE"]
var stageThreeSleep3 = ["GO TO SLEEP", "SLEEP", "SLEEP IN BED"]
var bedCommands3 =  ["WALK TO BED", "LOOK AT BED", "BED", "GO TO BED"];
var closetCommands3 =  ["WALK TO CLOSET", "LOOK AT CLOSET", "CLOSET", "GO TO BED"];
var closetInterior3 = ["LOOK IN CLOSET", "GO IN CLOSET"];
var closetButton3 = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON"];
var dresserCommands3 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER"];
var windowCommands3 =  ["WALK TO WINDOW", "LOOK AT WINDOW", "WINDOW", "GO TO WINDOW", "LOOK OUT WINDOW"];
var doorCommands3 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR", "GO TO DOOR", "DOOR"];
var deskCommands3 =  ["WALK TO DESK", "LOOK AT DESK", "DESK", "GO TO DESK"];
var screenCommands3 =  ["LOOK AT TABLET", "USE TABLET", "TAKE TABLET"];
var vent3 = ["WALK TO VENT", "LOOK AT VENT", "VENT", "LOOK VENT"];
var openVent3 = ["OPEN VENT"];
// //
//Stage 4 commands //
// //
var back4 = ["BACK"]
var stage4WakeUp = ["WAKE UP"]
var medKitCommands4 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT"];
var syringeStage4 =  ["TAKE SYRINGE", "LOOK AT SYRINGE", "SYRINGE", "GRAB SYRINGE"];
var useSyringeStage4 = ["USE SYRINGE"]
var stageFourSleep4 = ["GO TO SLEEP", "SLEEP", "SLEEP IN BED"]
var bedCommands4 =  ["WALK TO BED", "LOOK AT BED", "BED", "GO TO BED"];
var closetCommands4 =  ["WALK TO CLOSET", "LOOK AT CLOSET", "CLOSET", "GO TO BED"];
var closetInterior4 = ["LOOK IN CLOSET", "GO IN CLOSET"];
var closetButton4 = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON"];
var dresserCommands4 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER"];
var windowCommands4 =  ["WALK TO WINDOW", "LOOK AT WINDOW", "WINDOW", "GO TO WINDOW", "LOOK OUT WINDOW"];
var doorCommands4 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands4 =  ["WALK TO DESK", "LOOK AT DESK", "DESK", "GO TO DESK"];
var screenCommands4 =  ["LOOK AT TABLET", "USE TABLET", "TAKE TABLET"];
// //
// Stage 5 commands //
// //
var back5 = ["BACK"]
var medKitCommands5 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT"];
var syringeStage5 =  ["TAKE SYRINGE", "LOOK AT SYRINGE", "SYRINGE", "GRAB SYRINGE"];
var useSyringeStage5 = ["USE SYRINGE"];
var kill: ["KILL ALIEN", "KILL", "FIGHT", "FIGHT ALIEN", "ATTACK", "ATTACK ALIEN", "KICK", "KICK ALIEN"];
var killWith: ["KILL WITH SYRINGE", "USE SYRINGE ON ALIEN", "USE SYRINGE ALIEN", "KILL ALIEN", "KILL"];
var run: ["RUN", "RUN AWAY", "HIDE"];
var bedCommands5 =  ["WALK TO BED", "LOOK AT BED", "BED", "GO TO BED"];
var closetCommands5 =  ["WALK TO CLOSET", "LOOK AT CLOSET", "CLOSET", "GO TO BED"];
var closetInterior5 = ["LOOK IN CLOSET", "GO IN CLOSET"];
var closetButton5 = ["USE CLOSET BUTTON"];
var dresserCommands5 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER"];
var windowCommands5 =  ["WALK TO WINDOW", "LOOK AT WINDOW", "WINDOW", "GO TO WINDOW", "LOOK OUT WINDOW"];
var doorCommands5 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands5 =  ["WALK TO DESK", "LOOK AT DESK", "DESK", "GO TO DESK"];
var screenCommands5 =  ["LOOK AT TABLET", "USE TABLET", "TAKE TABLET"];
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
} else if (back1.contains(input)) {
$("h5").text(backObject.backDescript);
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
} else if (back2.contains(input)) {
  $("h5").text(backObject.backDescript);
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
} else if (back3.contains(input)) {
  $("h5").text(backObject.backDescript);
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
} else if (back4.contains(input)) {
  $("h5").text(backObject.backDescript);
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
  level++;
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
var stage5 = function(input) {
  if (moveCounter === 1) {
    if (bedCommands5.contains(input)) {
    $("h5").text(stageFive.bedDescript5);
    $("ul#gameLog").append(stageFive.bedDescript5);
    $("#userInputText").val("");
  } else if(deskCommands5.contains(input)) {
    $("h5").text(stageFive.deskDescript5Turn1);
    $("ul#gameLog").append(stageFive.deskDescript5Turn1);
    $("#userInputText").val("");
  } else if (kill.contains(input)) {
    $("h5").text(stageFive.kill5);
    $("ul#gameLog").append(stageFive.kill5);
    $("#userInputText").val("");
  } else if ()

//
// global variables //
//
var level = 0;
var moveCounter = 0;
var inventory = []
//
// end of global variables //
//
