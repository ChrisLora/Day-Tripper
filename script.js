"use strict"
let cities = ["Margaritaville","Philadelphia","Atlantis","Scranton","Gotham","Bikini-Bottom"]
let foods = ["Paddy's Pub","McDonald's","Bob's Burgers","Mos Eisley Cantina","Generic Pizza","Alcohol for Dinner"]
let transpo = ["Bus","Train","Boat","Bike","Foot","Clown Cannon"]
let entertain = ["Skydiving","Deep Sea Diving","Deep Sea Fishing","Dancing","See a Play","to Fight Club"]
let randomNumber = Math.floor(Math.random() * 5)
let city = cities[randomNumber]
let food = foods[randomNumber]
let trans = transpo[randomNumber]
let enter = entertain[randomNumber]
function randomizeCity(){city = cities[randomNumber]}
function randomizeFood(){food = foods[randomNumber]}
function randomizeTrans(){trans = transpo[randomNumber]}
function randomizeEnter(){enter = entertain[randomNumber]}
let inquireChange = prompt("Thanks for using DayTripper! Today you'll be visiting "+city+" by "+trans+", to eat "+food+" and go "+enter+".","Press Enter to Continue")
let change = prompt("Would you like to change the City(1), Restaurant(2), Transportation(3), Entertainment(4), All(5), or None(6)?","Enter 1, 2, 3, 4, 5, or 6")
if (change = 1){randomizeCity}
if (change = 2){randomizeFood}
if (change = 3){randomizeTrans}
if (change = 4){randomizeEnter}
if (change = 5){randomizeCity,randomizeFood,randomizeTrans,randomizeEnter}
window.alert("Thanks for using DayTripper! Enjoy your visit to "+city+" by "+trans+", to eat "+food+" and go "+enter+".")