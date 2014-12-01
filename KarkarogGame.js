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
      var hasTakenSpray = false;
      var hasTakenKey   = false;
      function init() {
         look();
      }
     
     
      // Locale Prototype    
         
      function Locale(_id, _name, _description) {
         this.id = _id;
         this.name = _name;
         this.description = _description;
      }
      
      
      
      
   // Locale Instances
   
      var locale_0 = new Locale();  
      locale_0.id = 0;
      locale_0.name = "Main Cavern";
      locale_0.description = "You enter a main cavern with passages leading to the north, south, east, and west.";
      
      
     var locale_1 = new Locale();
      locale_1.id = 1;
      locale_1.name = "Chest Room";
      locale_1.description = "You enter the north entrance and  end up in a room with a massive chest. It is locked.";
      
      
     var locale_2 = new Locale();
      locale_2.id = 2;
      locale_2.name = "Library";
      locale_2.description = "You enter the west entrance and find a large library.";
      
     var locale_3 = new Locale();
      locale_3.id = 3;
      locale_3.name = "Wasp Room";
      locale_3.description = "You enter the south entrance and end up in a room of wasps.";
      
     var locale_4 = new Locale();
      locale_4.id = 4;
      locale_4.name = "Laboratory";
      locale_4.description = "You enter the east entrance and find yourself in an abandoned laboratory.";

     var locale_5 = new Locale();
      locale_5.id = 5;
      locale_5.name = "Hive Room";
      locale_5.description = "You head further south and enter a room with a massive hive.";
      
      var locale_6 = new Locale();
      locale_6.id = 6;
      locale_6.name = "Supply Closet";
      locale_6.description = "You enter a small supply room to the south that is stocked with insect killer. You might want to take some, it may come in handy.";
      
      var locale_7 = new Locale();
      locale_7.id = 7;
      locale_7.name = "Map Room";
      locale_7.description = "You pass through a door to the north and find an old classroom. There is a map on one of the desks.";
      
     var locale_8 = new Locale();
      locale_8.id = 8;
      locale_8.name = "Item Room";
      locale_8.description = "You enter a room to the east and find a room full of spoons!";
      
     var locale_9 = new Locale();
      locale_9.id = 9;
      locale_9.name = "Secret Room";
      locale_9.description = "You have found a secret passage! Continue on if you dare.";
      
      var locale_10 = new Locale();
      locale_10.id = 10;
      locale_10.name = "Key Room";
      locale_10.description = "You found a key! This one looks promising. Grab it!";
      
      // Need to implement CURRENT LOCATION
       var locArray = [];
           locArray[0] = locale_0;
           locArray[1] = locale_1;
           locArray[2] = locale_2;
           locArray[3] = locale_3;
           locArray[4] = locale_4;
           locArray[5] = locale_5;
           locArray[6] = locale_6;
           locArray[7] = locale_7;
           locArray[8] = locale_8;
           locArray[9] = locale_9;
           locArray[10] = locale_10;
      
      function btnGo_click() {
         if (txtCommand.value === "n" || txtCommand.value === "N") {
               goNorth();
         } else if (txtCommand.value === "s" || txtCommand.value === "S") {
            display (locArray[3].description)
               goSouth();
         } else if (txtCommand.value === "e" || txtCommand.value === "E") {
            display (locArray[2].description)
               goEast();
         } else if (txtCommand.value === "w" || txtCommand.value === "W") {
            display (locArray[4].description)
               goWest();
         } else if (txtCommand.value === "h" || txtCommand.value === "H") {
              getHelp();
         } else if ((txtCommand.value === "take") && (currentLocation === 6)) { 
            takeSpray();
         } else if ((txtCommand.value === "take") && (currentLocation === 10)) {
            takeKey();
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
      
      function btnInv_click() {
         displayInv();
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
         
         look();
         
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

      function display(description){
         checkScore();
         var targetTextArea = document.getElementById("taMain");
         targetTextArea.value = description + "\n\n" + "Score:" + Score + "\n\n" + targetTextArea.value; 
      }

      
      function getHelp() {
         var desc = "Use the commands 'S' or 's' to go South, 'N' or 'n' to go North, 'E' or 'e' to go East, and 'W' or 'w' to go West. Use the 'take' command to pick up any items you come across. Keep track of your location with the handy map. Good luck!"
        display(desc);
      }   
//        function takeSpray() {
//         var desc = "You take the insect spray."
//         displayMessage(desc);
//            hasTakenSpray = true;
//   }
//      function takeKey() {
//         var desc = "You take the key."
//         displayMessage(desc);
//            hasTakenKey = true;
//      }
      
//      function displayInv() {
//         if (hasTakenSpray === true) {
//               desc = "Spray"
//         } else if (hasTakenSpray === false) {
//               desc = "Inventory is empty."
//         } else if (hasTakenKey === true)    {
//               desc = "" + "Key"
//         } else if (hasTakenKey === false) {
//               desc = "Inventory is empty."
//         } 
//         displayMessage(desc);
//         } 
      
    
//      function mainCavern() {
//         var desc = "You enter the main cavern with passages leading to the north, south, east, and west.";
//         displayMessage(desc);
//            document.getElementById("btnWest").disabled = false;
//            document.getElementById("btnNorth").disabled = false;
//           document.getElementById("btnEast").disabled = false;
//            document.getElementById("btnSouth").disabled = false;
//      }
      
//      function chestRoom() {
 //        var desc = "You enter the north entrance and  end up in a room with a massive chest. It is locked.";
 //        displayMessage(desc);
 //           document.getElementById("btnWest").disabled = true;
 //           document.getElementById("btnNorth").disabled = true;
 //           document.getElementById("btnEast").disabled = true;
 //           document.getElementById("btnSouth").disabled = false;
 //     }
      
//      function libraryRoom () {
//         var desc = "You enter the west entrance and find a large library.";
//         displayMessage(desc);
 //           document.getElementById("btnWest").disabled = true;
 //           document.getElementById("btnNorth").disabled = true;
  //          document.getElementById("btnEast").disabled = false;
  //          document.getElementById("btnSouth").disabled = false;
         
   //   }
      
 //     function waspRoom() {
  //       var desc = "You enter the south entrance and end up in a room of wasps.";
  //       displayMessage(desc);
  //          document.getElementById("btnWest").disabled = true;
  //          document.getElementById("btnNorth").disabled = false;
  //          document.getElementById("btnEast").disabled = true;
   //         document.getElementById("btnSouth").disabled = false;
      
      
   //   }
  //    
      
      
 //     function hiveRoom() {
 //        var desc = "You head further south and enter a room with a massive hive.";
 //        displayMessage(desc);
 //           document.getElementById("btnWest").disabled = true;
 //           document.getElementById("btnNorth").disabled = false;
 //           document.getElementById("btnEast").disabled = true;
 //           document.getElementById("btnSouth").disabled = true;   
  //    
   //   }
      
 //     function oldLab() {
  //       var desc = "You enter the east entrance and find yourself in an abandoned laboratory.";
 //        displayMessage(desc);
 //           document.getElementById("btnWest").disabled = false;
 //           document.getElementById("btnNorth").disabled = false;
 //           document.getElementById("btnEast").disabled = false;
 //           document.getElementById("btnSouth").disabled = false;
      
      
      
  //    }
      
 //     function supplyCloset() {
 //        var desc = "You enter a small supply room to the south that is stocked with insect killer. You might want to take some, it may come in handy.";
 //        displayMessage(desc);
 //           document.getElementById("btnWest").disabled = true;
 //           document.getElementById("btnNorth").disabled = false;
 //           document.getElementById("btnEast").disabled = true;
 //           document.getElementById("btnSouth").disabled = true;
  //    }
      
 //     function mapRoom() {
 //        var desc = "You pass through a door to the north and find an old classroom. There is a map on one of the desks.";
 //        displayMessage(desc);
 //           document.getElementById("btnWest").disabled = true;
 //           document.getElementById("btnNorth").disabled = true;
 //           document.getElementById("btnEast").disabled = true;
 //           document.getElementById("btnSouth").disabled = false;
      
  //    }
      
 //     function itemRoom() {
 //        var desc = "You enter a room to the east and find a room full of spoons!";
 //        displayMessage(desc);
 //           document.getElementById("btnWest").disabled = false;
 //           document.getElementById("btnNorth").disabled = true;
 //           document.getElementById("btnEast").disabled = true;
 //           document.getElementById("btnSouth").disabled = true;
  //    }
      
  //    function secretRoom() {
  //       var desc = "You have found a secret passage! Continue on if you dare.";
  //       displayMessage(desc);
  //          document.getElementById("btnWest").disabled = true;
  //          document.getElementById("btnNorth").disabled = false;
  //          document.getElementById("btnEast").disabled = true;
  //          document.getElementById("btnSouth").disabled = false;
      
      
  //    }
      
  //    function keyRoom() {
  //       var desc = "You found a key! This one looks promising. Grab it!";
  //       displayMessage(desc);
  //          document.getElementById("btnWest").disabled = true;
  //          document.getElementById("btnNorth").disabled = false;
  //          document.getElementById("btnEast").disabled = true;
  //          document.getElementById("btnSouth").disabled = true;
  //    }
      
   function currentLoc () {
      display(locArray[currentLocation].description)
      }
      
   
      function look() {
         var description = "";
        switch(currentLocation) {
            case 0: currentLoc();
                  break;
            case 1: currentLoc();
                  break;
            case 2: currentLoc();
                  break;
            case 3: currentLoc();
                  break;
            case 4: currentLoc();
                  break;
            case 5: currentLoc();
                  break;
            case 6: currentLoc();
                  break;
            case 7: currentLoc();
                  break;
            case 8: currentLoc();
                  break;
            case 9: currentLoc();
                  break;
            case 10: currentLoc();
                  break;
            default: desc = "You can't go that way!";      
         }
      }   
  
      
    
     
      

