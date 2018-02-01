// Expected inputs - Walk to [bed,window,desk,closet] look at [], use [button], room description []
var backObject = {
  backDescript: "You are aboard the SSE Woodpecker on your way back to Earth with your dream vacation in the rear view mirror. You'll always remember the lagoon swims, the volcano hikes and of course the quirky local food. Fortunately, your room for the journey home comes fully equipped with all the luxury that one could expect from New Stellar Incorporations. Make sure to read your tablet everyday for updates from our captain. If you have any questions just type 'help'. Enjoy your stay and thank you for booking with New Stellar Inc. 'Preparing for a better you.'",
}
var stageOne = {
  dresserInt: "The dresser is filled with the same three active wear outfits you were supplied when you boarded the ship.",
  roomDescript: "You are in your cabin on the SSE Woodpecker. On the west wall is your closet. On the south wall is your small desk with a tablet on top of it. Beside the desk is the slit in the wall where the door opens. It is several feet beyond the foot of the bed, and is currently unable to be opened because the ship is travelling at light speed. Tucked away in the southwest corner is a small desk. There is a tablet sitting on it. Your dresser is on the east wall with a small porthole beside it for viewing the stars.",
  bedDescript: "A small solitary bed, with a thin mattress.",
  closetExteriorDescript: "As you approach the closet, you notice that there is no obvious handle. There is an array of buttons on the wall next to the closet.",
  closetButton: "You click the button and with a blast of air, the doors slide up into the ceiling revealing the space behind.",
  closetInteriorDescript: "The closet contains many things, none of them seem like they would be much use to you at this point.",
  dresserDescript: "You approach the dresser, it is large and glinting in the light.",
  windowDescript: "The only window is a porthole. For a moment you are wooed by the vastness of space.",
  doorDescript: "A loud alert beep sounds off. You quickly survey the room again. You hear mechanical grinding, but the door doesn't move an inch.",
  doorButton: "Upon closer inspection you find, again, there are several buttons. These buttons are much smaller. A few of them have a blinking light in the center.",
  deskDescript: "A plain surface. The edges look sharp. There is a very smooth looking transparent tablet sitting on top of it.",
  screenDescript: "Though this tablet seems very advanced, it feels familiar to you. The screen displays a message from the captain: 'Hello Passengers! Hope you are enjoying your stay, just wanted to let you know that the ship has experienced a small security breach in the form of a foreign microbial infection. No cause for alarm, just remember to wash your hands before having a great time on the SSE Woodpecker!'",
  stageOneSleep: "You fall asleep very quickly after your long day of space adventures. You are woken up to a scratching sound coming from the walls. It is probably just the space rats that the crew warned the passengers about.",
  windowHit: "You smash your head into the window out of boredom. When the window doesn't immediately break you decide to do it again, this time you aren't so lucky. Your body is sucked into the vacuum of space and you are crushed into a small wallet sized human meat pouch."

};
var stageTwo = {
  helpDescript: "Congratulations! You finished your first day aboard the SSE Woodpecker. We hope you enjoyed exploring your room, and had time to check out your personal window, closet, dresser and bed. As the ship is still traveling at lightspeed, stay in your room for today and explore more to see if anything has changed.",
  bedDescript: "The sheets are strewn about from your restful sleep.",
  closetExteriorDescript: "The closet glints in the light. The button on the left side is especially shiny today.",
  closetButton: "You press the button and the closet door slides open.",
  closetInteriorDescript: "You decide to dig around. Luckily you did so delicately, as you find a medical kit with an encased syringe in a glowing tube.",
  dresserDescript: "You consider changing your clothes and then realize that the assigned active wear the crew passed out when you arrived all looks the same.",
  windowDescript: "You gaze out and see a few star clusters. You wonder if those were the same ones from yesterday?",
  doorDescript: "The door seems as tight and sealed as ever.",
  doorButton: "You fumble around with the buttons. They seem to all control equally terrible sounds.",
  deskDescript: "You stare at the desk waiting for some computer games and mountain dew to appear, but alas...",
  screenDescript: "You pick up the tablet and open the most recent notification: 'Dear passengers, I know there has been talk of something crawling around the vents. As your Captain I can assure you that you are not in danger. The SSE Woodpecker is inspected daily and nothing of the sort has been detected. On a separate matter, the ship's medical staff are missing a medical kit. If found please return to the Captain's quarters. Have a good day and thank you for choosing New Stellar Inc.'",
  medKitDescript: "You get closer to the small steel case. The syringe inside seems to being slowly dripping an orange liquid.",
  syringeDescript: "The syringe looks so large in your hand. You're careful to not touch any of the orange liquid. You store it under your bed for safe keeping.",
  syringeUseDescript: "You jam the syringe in your jugular. You suddenly become painfully aware of an organism that had been living on the back of your neck. It detaches itself and watches as the syringes contents slowly drain into your bloodstream. As you feel the last drop fill your veins, the creature starts moving towards you. 'Could this really be how it ends?' you think, as your vision goes dark.",
  stageTwoSleep: "You lay your head down, trying to adjust your pillow despite the horrible burning sensation on the back of your neck. After hours of struggling, you finally succumb to your exhaustion and rest. You wake up in the morning well rested, and surprisingly the burning sensation has left you. In its place you now find a small pool of blood on your pillow and dried blood on your neck.",
  windowHit: "You smash your head into the window out of boredom. When the window doesn't immediately break you decide to do it again, this time you aren't so lucky. Your body is sucked into the vacuum of space and you are crushed into a small wallet sized human meat pouch."

}
//
// Stage 3 object //
//
var stageThree = {
  helpDescript: "This is your third day aboard the SSE Woodpecker. Despite the Captain's mention of a potential infestation, and going to bed with some pain last night, today can still be a great day for you. Hopefully if you didn't fully explore the room yesterday, you will today. Don't forget to check your dresser, bed, closet, tablet, and desk.",
  bedDescript: "The sheets are destroyed from your night time injury. You notice a slime trail leading off the bed onto the floor.",
  closetExteriorDescript: "You see the steel is scratched and chipping away on the floor and at the door opening.",
  closetButton: "You reach for the button, but hear a rustling in the closet. Probably best to keep it closed for now.",
  closetInteriorDescript: "The rustling from inside the closet is enough motivation for you to stay away from the door.",
  ventDescript: "You get closer to the vent. Whatever slithered down there must have been slimy and flexible.",
  ventOpenDescript: "You try to open the vent. A nasty slime gets on your hands. Your hands are too slick and the vent won't budge.",
  dresserDescript: "The clothes are destroyed. It appears that something had made a nest in the top drawer.",
  windowDescript: "The glass has a hairline crack in it. On the other side of it are gaseous clouds and what look like pieces from a long forgotten space shuttle.",
  doorDescript: "The door looks untouched but doesn't work.",
  doorButton: "You press the button a few times, the door doesn't move and the grinding noises have stopped as well.",
  deskDescript: "The desk is untouched, the tablet sits blank on top.",
  screenDescript: "The tablet is blank, the lack of a message from the ship's Captain is less than comforting.",
  syringeDescript: "The syringe remains under the bed where you stored it. The glowing orange liquid's purpose still escapes you.",
  syringeUseDescript: "Are you serious? The syringe fills you with goofy juice that makes you incredibly heavy and then you fall through the ship floor and are sucked into unforgiving space.",
  stageThreeSleep: "As you lay your head down and begin to drift off, rustling from the closet jolts you awake. This continues for some time, but eventually you convince yourself it is just a large rodent and fall asleep. Your peaceful sleep is abruptly interrupted by a blaring siren. The tablet on the table is vibrating with notifications from the crew.",
  windowHit: "You smash your head into the window out of boredom. When the window doesn't immediately break you decide to do it again, this time you aren't so lucky. Your body is sucked into the vacuum of space and you are crushed into a small wallet sized human meat pouch."

}
//
// stage 4 object //
//
var stageFour = {
  wakeUpDescript: "You wake up to the screeching of an alarm. You notice that your tablet is vibrating with notifications.",
  helpDescript: "This is day four, and the rustling in the closet hasn't stopped. Though your enter/exit door has completely stopped working, you sense you're not alone. You get the impression that if you don't go handle it, it will come for you.",
  closetExteriorDescript: "The closet has the same goo as was on the bed, but now around the perimeter of the door.",
  closetButton: "You smash buttons and nothing changes. You begin to push them calmly and methodically. You hear the whoosh sound, and again the door opens.",
  closetInteriorDescript: "The door slides open and you see a snake-like creature on the ground ready to strike. You smash buttons on the wall again and the door shuts just in time. You hear it hit the door and a small indent forms. As you back away, the door to your room is blown off its hinges and a larger snake-like alien slithers under your desk.",
  dresserDescript: "You find creature eggs. The closet door bursts open, there is a snake-like alien inside, you are able to reach the button quickly enough to close the door before you are killed. As you back away the door to your room is blown off its hinges and a larger snake-like alien slithers under the desk.",
  windowDescript: "The cracks are growing.",
  doorDescript: "The door doesn't budge.",
  doorButton: "You try all the buttons, they don't seem to be doing anything, but you begin to hear an obvious commotion in the hallway. The closet door bursts open, there is a snake-like alien inside, you are able to reach the button quickly enough to close the door before you are killed. As you back away, the door to your room is blown off its hinges and a larger snake-like alien slithers under the desk.",
  deskDescript: "The tablet screen is badly damaged and flickering.",
  screenDescript: "The screen is beyond repair, but you can make out a few words: 'Alien' and 'Evacuation' are among the more worrisome.",
  syringeDescript: "The syringe sits ready for use.",
  syringeUseDescript: "In your moment of panic you slide in the goo and stick yourself with the syringe. Sayonara sucker.",
  windowHit: "You smash your head into the window out of boredom. When the window doesn't immediately break you decide to do it again, this time you aren't so lucky. Your body is sucked into the vacuum of space and you are crushed into a small wallet sized human meat pouch."
}

var stageFive = {
  helpDescript: "With a snake on the loose, your best option is to kill it before it kills you. If only there was something in the room that could help you...",
  bedDescript5: "You move toward the bloody bed and remember the syringe stashed underneath.",
  bedDescript5Turn2: "You step over to take a look under the bed, but before you can look down your legs are bound tightly by the creature's massive tail.",
  syringeGrab5: "You pick up the syringe and turn back towards the room.",
  syringeUse: "You run towards the monster but slip on the trail of sludge and in your flailing inject yourself with the orange liquid. Luckily it paralyzes you so you won't feel what the alien is about to do to you.",
  kill5: "You heroically jump onto the snake, but are quickly bested by the snake's strength. It wraps its tail around your body and squeezes till your lights go out.",
  killWith5Turn2: "You heroically jump onto the snake, and plunge the syringe into the snake's thick skin. The snake recoils and slithers away. It starts to violently pulse, it makes an awful screeching noise and begins to spew a thick black ooze. The more ooze that comes out of the snake the thinner the snake becomes until the snake is paper thin on the ground. The room, and yourself are coated with the warm, rancid smelling sludge. After regaining your composure, you step out of the now open door ready to assist the other passengers of the SSE Woodpecker against this alien menace.",
  deskDescript5Turn1: "You move towards the desk to investigate the creature. You stick your head down to take a look and are greeted with thousands of needle like teeth.",
  deskDescript5Turn3: "The snake strikes, missing you by an inch. It slithers under the bed.",
  windowTurn1Descript: "You gaze out at the beauty of space, and for a moment forget about your current situation, and the looming threat of the horrible monster.",
  windowTurn2Descript: "You take a moment to appreciate the majesty of space, but quickly feel the pain of a thousand tiny teeth sinking into your back. As the snake slowly devours you, you are comforted by the fact that the last thing you saw before your death was beautiful.",
  closetTurnOne5: "You head to the closet, but before you can reach the buttons to open the door the snake lunges out from under the desk and consumes you, starting with your outstretched hand. ",
  closetTurnTwo5: "You go to the closet seeking solace. As you press the buttons the snake lunges out at you from under the desk. You duck and it narrowly misses you. You hit the right combination of buttons and the door opens. You climb in and the door shuts behind you. You hear the snake outside the door smashing around the room in its anger. You sit down in the fetal position, and in your panic you forgot about the snake residing in the closet. It promptly reminds you.",
  run: "You slip through the now open door of your room and sprint down the hallway. You can hear frantic slithering coming from behind you but just focus on your breathing. Suddenly you feel a warmth on your leg. When you look down you have the horrific realization that your leg is no longer attached to you, it is now in the snakes mouth. As you are falling to the ground the last thing you see is the wide open mouth of an alien snake slowly consuming you, its crippled prey.",
  windowHit: "You smash your head into the window out of boredom. When the window doesn't immediately break you decide to do it again, this time you aren't so lucky. Your body is sucked into the vacuum of space and you are crushed into a small wallet sized human meat pouch."
}
//
// End of stages //
//
