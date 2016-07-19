var description = document.getElementById("description");
var howManyStars = document.getElementById("how-many-stars");
var date = new Date().toDateString()

description.innerHTML = "I'm Hailey. Today is " + date + "."
description.style.color = "pink"
howManyStars.innerHTML = stars["name"] + " has " + stars["stars"].length + " stars."