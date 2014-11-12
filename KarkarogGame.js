    var currentLocation = 0;
      var Score = 0;
      var visitedRoom0 = false;
      var visitedRoom1 = false;
      var visitedRoom2 = false;
      var visitedRoom3 = false;
      var visitedRoom4 = false;
      var visitedRoom5 = false;
      var visitedRoom6 = false;
      var visitedRoom7 = false;
      var visitedRoom8 = false;
      var visitedRoom9 = false;
      var visitedRoom10 = false;
      
      function init() {
         look();
      }
      
      function btnGo_click() {
         if (txtCommand.value === "n" || txtCommand.value === "N") {
            goNorth(); 
         } else if (txtCommand.value === "s" || txtCommand.value === "S") {
            goSouth();
         } else if (txtCommand.value === "e" || txtCommand.value === "E") {
            goEast();
         } else if (txtCommand.value === "w" || txtCommand.value === "W") {
            goWest();
         } else if (txtCommand.value === "h" || txtCommand.value === "H") {
            getHelp();
         }   
         else displayMessage("Invalid command, dummy! Use N, S, E, W or H for HELP!");
            
         }
      
         
      function btnNorth_click() {   
           goNorth();
      }
       
      function btnSouth_click() {
         goSouth();
      }
      
      function btnEast_click() {
         goEast();
      }
      
      function btnWest_click() {
         goWest();
      }
      
      function goNorth() {
        if (currentLocation === 0) {
              currentLocation = 1;         
         } else if (currentLocation === 3) {
              currentLocation = 0;   
         } else if (currentLocation === 1) {
              currentLocation = 1;
         } else if (currentLocation === 5) {
              currentLocation = 3;
         } else if (currentLocation === 6) {
              currentLocation = 4;
         } else if (currentLocation === 10) {
              currentLocation = 9;
         } else if (currentLocation === 9)  {
              currentLocation = 2;
         } else if (currentLocation === 4) {
              currentLocation = 7;
         }     
         look();   
                  
      }
      
      function goSouth() {
         if (currentLocation === 0)  {
              currentLocation = 3;
         } else if (currentLocation === 1) {
              currentLocation = 0;            
         } else if (currentLocation === 3) {
              currentLocation = 5;
         } else if (currentLocation === 4) {
              currentLocation = 6;
         } else if (currentLocation === 2) {
              currentLocation = 9;
         } else if (currentLocation === 9) {
              currentLocation = 10;
         } else if (currentLocation === 7) {
              currentLocation = 4;
         } 
         
         look ();
         
      }
      
      function goEast() {
         if (currentLocation === 0) {
              currentLocation = 4;
         } else if (currentLocation === 2) {
              currentLocation = 0;
         } else if (currentLocation === 4) {
              currentLocation = 8;
         }
         
         look();
      }
       
      function goWest() {
         if (currentLocation === 0)   {
              currentLocation = 2;       
         } else if (currentLocation === 4)   {
              currentLocation = 0;
         } else if (currentLocation === 8) {
              currentLocation = 4;
         }
   
         look();
      }
      
      function getHelp() {
         var desc = "Use the commands 'S' or 's' to go South, 'N' or 'n' to go North, 'E' or 'e' to go East, and 'W' or 'w' to go West. Keep track of your location with the handy map. Good luck!"
         displayMessage(desc);
      }
      
      function mainCavern() {
         var   desc = "You enter the main cavern with passages leading to the north, south, east, and west.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = false;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnEast").disabled = false;
            document.getElementById("btnSouth").disabled = false;
      }
      
      function chestRoom() {
         var desc = "You enter the north entrance and  end up in a room with a massive chest. It is locked.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = false;
      }
      
      
      
      function libraryRoom () {
         var desc = "You enter the west entrance and find a large library.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnEast").disabled = false;
            document.getElementById("btnSouth").disabled = false;
         
      }
      
      function waspRoom() {
         var desc = "You enter the south entrance and end up in a room of wasps.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = false;
      
      
      }
      
      
      
      function hiveRoom() {
         var desc = "You head further south and enter a room with a massive hive.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = true;   
      
      }
      
      function oldLab() {
         var desc = "You enter the east entrance and find yourself in an abandoned laboratory.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = false;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnEast").disabled = false;
            document.getElementById("btnSouth").disabled = false;
      
      
      
      }
      
      function supplyCloset() {
         var desc = "You enter a small supply room to the south that is stocked with insect killer.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = true;
      }
      
      function mapRoom() {
         var desc = "You pass through a door to the north and find an old classroom. There is a map on one of the desks.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = false;
      
      }
      
      function itemRoom() {
         var desc = "You enter a room to the east and find a room full of spoons!";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = false;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = true;
      }
      
      function secretRoom() {
         var desc = "You have found a secret passage! Continue on if you dare.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = false;
      
      
      }
      
      function keyRoom() {
         var desc = "You found a key! This one looks promising.";
         displayMessage(desc);
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnEast").disabled = true;
            document.getElementById("btnSouth").disabled = true;
      }
      
      
      
   
      function look() {
         var desc = "";
         switch(currentLocation) {
            case 0: mainCavern();
                  break;
            case 1: chestRoom();
                  break;
            case 2: libraryRoom();
                  break;
            case 3: waspRoom();
                  break;
            case 4: oldLab();
                  break;
            case 5: hiveRoom();
                  break;
            case 6: supplyCloset();
                  break;
            case 7: mapRoom();
                  break;
            case 8: itemRoom();
                  break;
            case 9: secretRoom();
                  break;
            case 10: keyRoom();
                  break;
            default: desc = "You can't go that way!";      
         }
         checkScore();
         desc = desc + "\n" + "Score: " + Score;
         displayMessage(desc);
      }
      
      function checkScore() {
       if ( (! visitedRoom1) && (currentLocation === 1) ) {
            Score = Score + 5;
            visitedRoom1 = true;
         
      }   else if ( (! visitedRoom2) && (currentLocation === 2) ) {
            Score = Score + 5;
            visitedRoom2 = true;
      }   else if ( (! visitedRoom3) && (currentLocation === 3) ) {
            Score = Score + 5;
            visitedRoom3 = true;
      }   else if ( (! visitedRoom4) && (currentLocation === 4) ) {
            Score = Score + 5;
            visitedRoom4 = true;
      }   else if ( (! visitedRoom5) && (currentLocation === 5) ) {
            Score = Score + 5;
            visitedRoom5 = true;
      }   else if ( (! visitedRoom6) && (currentLocation === 6) ) {
            Score = Score + 5;
            visitedRoom6 = true;
      }    else if ( (! visitedRoom7) && (currentLocation === 7) ) {
            Score = Score + 5;
            visitedRoom7 = true;
      }   else if ( (! visitedRoom8) && (currentLocation === 8) ) {
            Score = Score + 5;
            visitedRoom8 = true;  
      }   else if ( (! visitedRoom9) && (currentLocation === 9) ) {
            Score = Score + 5;
            visitedRoom9 = true;   
      }   else if ( (! visitedRoom10) && (currentLocation === 10) ) {
            Score = Score + 5;
            visitedRoom10 = true;   
         }
      }
      function displayMessage(message) {
         var targetTextArea = document.getElementById("taMain");
         targetTextArea.value = message + "\n\n" + targetTextArea.value; 
      }


