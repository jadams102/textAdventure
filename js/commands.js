//
//Commands//
//
var help = ["HELP", "BACK", "SEARCH", "HINT"];
var sleep = ["GO TO SLEEP", "SLEEP", "USE BED", "REST"];
var dresserInt = ["LOOK IN DRESSER", "LOOK AT DRESSER", "IN DRESSER", "GO IN DRESSER", "OPEN DRESSER", "GO TO DRESSER", "WALK TO DRESSER", "USE DRESSER", "OPEN DRAWER"];
var bedCommands =  ["WALK TO BED", "GO BED", "BED", "LOOK AT BED", "LOOK BED", "GO TO BED", "HEAD TO BED", "GO TO SLEEP", "USE BED", "LAY DOWN", "LAY ON BED"];
var closetCommands =  ["WALK TO CLOSET", "CLOSET", "GO CLOSET", "LOOK AT CLOSET", "LOOK CLOSET", "GO TO CLOSET", "USE CLOSET"];
var closetInterior = ["LOOK IN CLOSET", "OPEN CLOSET", "GO IN CLOSET"];
var closetButton = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON", "PRESS BUTTON", "PRESS", "USE BUTTON", "PRESS CLOSET BUTTON", "PRESS BUTTONS," "TOUCH BUTTONS", "USE BUTTONS", "PUSH BUTTONS", "LICK BUTTONS", "SMASH BUTTONS", "PRESS BUTTONS"];
var dresserCommands =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER", "USE DRESSER", "CHANGE CLOTHES", "OPEN DRESSER"];
var windowCommands =  ["WALK TO WINDOW", "WINDOW", "GO WINDOW", "LOOK AT WINDOW","WALK TO PORTHOLE", "PORTHOLE", "GO PORTHOLE", "LOOK AT PORT HOLE", "PORT HOLE", "GO PORT HOLE", "LOOK AT PORT HOLE", "WALK TO PORT HOLE", "WINDOWS", "VISIT WINDOW", "LOOK OUT WINDOW", "VIEW WINDOW", "VIEW PORTHOLE", "VIEW PORT HOLE"];
var hitWindow = ["HIT WINDOW", "SMASH WINDOW", "BREAK WINDOW", "KICK WINDOW", "PRESS WINDOW", "HIT PORTHOLE"];
var doorCommands =  ["WALK TO DOOR", "GO DOOR", "DOOR", "LOOK AT DOOR", "USE DOOR", "GO TO DOOR", "OPEN DOOR", "PUSH DOOR", "LEAVE"];
var deskCommands =  ["WALK TO DESK", "DESK", "GO DESK", "LOOK AT DESK", "LOOK DESK", "VISIT DESK", "GO TO DESK", "SIT AT DESK", "USE DESK"];
var screenCommands =  ["LOOK AT TABLET", "TAKE TABLET", "USE TABLET", "PICK UP TABLET", "GET TABLET", "READ TABLET", "LOOK AT CAPTAIN'S LOG", "LOOK AT CAPTAINS LOG", "READ"];
var stageTwoWakeUp = ["WAKE UP"];
var medKitCommands2 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT", "OPEN MEDKIT",];
var useSyringeStage2 = ["USE SYRINGE"];
var pickUpSyringe = ["PICK UP SYRINGE", "TAKE SYRINGE", "TAKE", "GRAB SYRINGE", "GRAB" ];
var vent3 = ["WALK TO VENT", "LOOK AT VENT", "VENT", "LOOK VENT"];
var openVent3 = ["OPEN VENT"];

//
//stage 2 commands //
//
// var help2 = ["HELP", "BACK", "SEARCH", "HINT"]
// var stageTwoWakeUp = ["WAKE UP"]
// var medKitCommands2 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT", "OPEN MEDKIT",];
// var useSyringeStage2 = ["USE SYRINGE"]
// var pickUpSyringe = ["PICK UP SYRINGE", "TAKE SYRINGE", "TAKE", "GRAB SYRINGE", "GRAB" ]
// var stageTwoSleep2 = ["GO TO SLEEP", "SLEEP", "SLEEP IN BED"]
// var bedCommands2 =  ["WALK TO BED", "GO BED", "BED", "LOOK AT BED", "LOOK BED", "GO TO BED"];
// var closetCommands2 =  ["WALK TO CLOSET", "CLOSET", "GO CLOSET", "LOOK AT CLOSET", "GO TO CLOSET", "LOOK CLOSET"];
// var closetInterior2 = ["LOOK IN CLOSET", "GO IN CLOSET", "OPEN CLOSET"];
// var closetButton2 = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON", "PRESS BUTTON", "PRESS"];
// var doorCommands2 = ["USE DOOR BUTTON", "OPEN DOOR BUTTON", "OPEN DOOR", "GO TO DOOR", "DOOR", "WALK TO DOOR", "GO TO DOOR"];
// var dresserCommands2 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER", "LOOK IN DRESSER", "OPEN DRESSER", "OPEN"];
// var windowCommands2 =  ["WALK TO WINDOW", "WINDOW", "GO WINDOW", "LOOK AT WINDOW","WALK TO PORTHOLE", "PORTHOLE", "GO PORTHOLE", "LOOK AT PORT HOLE", "PORT HOLE", "GO PORT HOLE", "LOOK AT PORT HOLE"];
// var hitWindow = ["HIT WINDOW", "SMASH WINDOW"]
// var doorCommands2 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR", "GO TO DOOR", "DOOR"];
// var deskCommands2 =  ["WALK TO DESK", "DESK", "GO DESK", "LOOK AT DESK", "LOOK DESK"];
// var screenCommands2 =  ["LOOK AT TABLET", "TAKE TABLET", "USE TABLET", "PICK UP TABLET", "GET TABLET"];
// //
//stage 3 commands //
// //
// var help3 = ["HELP", "BACK", "SEARCH", "HINT"]
// var stageThreeWakeUp = ["WAKE UP"]
// var medKitCommands3 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT"];
// var syringeStage3 =  ["TAKE SYRINGE", "LOOK AT SYRINGE", "SYRINGE", "GRAB SYRINGE"];
// var useSyringeStage3 = ["USE SYRINGE"]
// var stageThreeSleep3 = ["GO TO SLEEP", "SLEEP", "SLEEP IN BED"]
// var bedCommands3 =  ["WALK TO BED", "GO BED", "BED", "LOOK AT BED", "LOOK BED", "GO TO BED"];
// var closetCommands3 =  ["WALK TO CLOSET", "CLOSET", "GO CLOSET", "LOOK AT CLOSET", "LOOK CLOSET"];
// var closetInterior3 = ["LOOK IN CLOSET", "OPEN CLOSET", "GO IN CLOSET"];
// var closetButton3 = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON", "PRESS BUTTON", "PRESS"];
// var dresserCommands3 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER", "LOOK IN DRESSER", "OPEN DRESSER", "OPEN"];
// var windowCommands3 =  ["WALK TO WINDOW", "WINDOW", "GO WINDOW", "LOOK AT WINDOW","WALK TO PORTHOLE", "PORTHOLE", "GO PORTHOLE", "LOOK AT PORT HOLE", "PORT HOLE", "GO PORT HOLE", "LOOK AT PORT HOLE"];
// var hitWindow = ["HIT WINDOW", "SMASH WINDOW"]
// var doorCommands3 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR", "GO TO DOOR", "DOOR"];
// var deskCommands3 =  ["WALK TO DESK", "DESK", "GO DESK", "LOOK AT DESK", "LOOK DESK"];
// var screenCommands3 =  ["LOOK AT TABLET", "TAKE TABLET", "USE TABLET", "PICK UP TABLET", "GET TABLET"];
// var vent3 = ["WALK TO VENT", "LOOK AT VENT", "VENT", "LOOK VENT"];
// var openVent3 = ["OPEN VENT"];
// //
//Stage 4 commands //
// //
// var sleep = ["SLEEP", "GO TO SLEEP"]
// var help4 = ["HELP"]
// var stage4WakeUp = ["WAKE UP", "GET UP"]
// var medKitCommands4 =  ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT"];
// var syringeStage4 =  ["TAKE SYRINGE", "LOOK AT SYRINGE", "SYRINGE", "GRAB SYRINGE"];
// var useSyringeStage4 = ["USE SYRINGE"]
// var stageFourSleep4 = ["GO TO SLEEP", "SLEEP", "SLEEP IN BED"]
// var bedCommands4 =  ["WALK TO BED", "GO BED", "BED", "LOOK AT BED", "LOOK BED", "GO TO BED"];
// var closetCommands4 =  ["WALK TO CLOSET", "CLOSET", "GO CLOSET", "LOOK AT CLOSET", "LOOK CLOSET"];
// var closetInterior4 = ["LOOK IN CLOSET", "OPEN CLOSET", "GO IN CLOSET"];
// var closetButton4 = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON", "PRESS BUTTON", "PRESS"];
// var dresserCommands4 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER", "LOOK IN DRESSER", "OPEN DRESSER", "OPEN"];
// var windowCommands4 =  ["WALK TO WINDOW", "WINDOW", "GO WINDOW", "LOOK AT WINDOW","WALK TO PORTHOLE", "PORTHOLE", "GO PORTHOLE", "LOOK AT PORT HOLE", "PORT HOLE", "GO PORT HOLE", "LOOK AT PORT HOLE"];
// var hitWindow = ["HIT WINDOW", "SMASH WINDOW"]
// var doorCommands4 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
// var deskCommands4 =  ["WALK TO DESK", "DESK", "GO DESK", "LOOK AT DESK", "LOOK DESK"];
// var screenCommands4 =  ["LOOK AT TABLET", "TAKE TABLET", "USE TABLET", "PICK UP TABLET", "GET TABLET"];
// //
// Stage 5 commands //
// //
var help5 = ["HELP", "BACK", "SEARCH", "HINT"];
var medKitCommands5 = ["OPEN KIT", "LOOK AT KIT", "USE KIT", "MEDKIT", "USE MEDICAL KIT", "MEDICAL KIT", "LOOK AT MEDICAL KIT"];
var syringeStage5 =  ["TAKE SYRINGE", "LOOK AT SYRINGE", "SYRINGE", "GRAB SYRINGE"];
var useSyringeStage5 = ["USE SYRINGE"];
var kill = ["KILL ALIEN", "KILL", "FIGHT", "FIGHT ALIEN", "ATTACK", "ATTACK ALIEN", "KICK", "KICK ALIEN"];
var killWith = ["KILL WITH SYRINGE", "USE SYRINGE ON ALIEN", "USE SYRINGE ALIEN", "KILL ALIEN", "KILL"];
var run = ["RUN", "RUN AWAY", "HIDE"];
var bedCommands5Turn1 =  ["WALK TO BED", "GO BED", "BED", "LOOK AT BED", "LOOK BED", "GO TO BED"];
var bedCommands5Turn2 =  ["WALK TO BED", "GO BED", "BED", "LOOK AT BED", "LOOK BED", "GO TO BED"];
var closetCommands5 =  ["WALK TO CLOSET", "CLOSET", "GO CLOSET", "LOOK AT CLOSET", "LOOK CLOSET"];
var closetInterior5 = ["LOOK IN CLOSET", "OPEN CLOSET", "GO IN CLOSET"];
var closetButton5 = ["USE CLOSET BUTTON", "TOUCH BUTTON", "PUSH BUTTON", "LICK BUTTON", "SMASH BUTTON", "PRESS BUTTON", "PRESS", "OPEN DRESSER", "OPEN"];
var dresserCommands5 =  ["WALK TO DRESSER", "LOOK AT DRESSER", "DRESSER", "GO TO DRESSER", "LOOK DRESSER", "LOOK IN DRESSER"];
var windowCommands5 =  ["WALK TO WINDOW", "WINDOW", "GO WINDOW", "LOOK AT WINDOW","WALK TO PORTHOLE", "PORTHOLE", "GO PORTHOLE", "LOOK AT PORT HOLE", "PORT HOLE", "GO PORT HOLE", "LOOK AT PORT HOLE"];
var hitWindow = ["HIT WINDOW", "SMASH WINDOW"];
var doorCommands5 =  ["WALK TO DOOR", "LOOK AT DOOR", "USE DOOR"];
var deskCommands5 =  ["WALK TO DESK", "DESK", "GO DESK", "LOOK AT DESK", "LOOK DESK"];
var screenCommands5 =  ["LOOK AT TABLET", "TAKE TABLET", "USE TABLET", "PICK UP TABLET", "GET TABLET"];
//
// End of commands //
//
