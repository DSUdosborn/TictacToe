console.log("started");

var allTiles = document.querySelectorAll(".tile");

console.log("welcome", allTiles);

allTiles.forEach(function(tile) {
  tile.onclick = function() {
     console.log("you clicked me");
     tile.innerHTML = "!";
   };

});

// allTiles.onclick = function() {
//   console.log("you clicked me");
// };
