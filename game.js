      var currentLocation = 0;
      var hiveDefeated = false; 
      var score = 0;
      
      function init() {
         look();
         document.getElementById("txtCommand").focus();
      }

      var NORTH = 0;
      var SOUTH = 1;
      var EAST  = 2;
      var WEST  = 3;
      
   // Navigation Matrix
      
      var nav = [ // N   S   E  W
         /* 0 */  [  1,  3,  4,  2 ],
         /* 1 */  [ -1,  0, -1, -1 ],
         /* 2 */  [ -1,  9,  0, -1 ],
         /* 3 */  [  0,  5, -1, -1 ],
         /* 4 */  [  7,  6,  8,  0 ],
         /* 5 */  [  3, -1, -1, -1 ],
         /* 6 */  [  4, -1, -1, -1 ],
         /* 7 */  [ -1,  4, -1, -1 ],
         /* 8 */  [ -1, -1, -1,  4 ],
         /* 9 */  [  2, 10, -1, -1 ],
         /* 10 */ [  9, -1, -1, -1 ]
               ];
      
   // Navigation Buttons            

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
         } else if (txtCommand.value === "i" || txtCommand.value === "I")  {
              btnInv_click();
         } else if (txtCommand.value === "take") {  
              takeItem(); 
         } else if (txtCommand.value === "use")  {
              useItem();
         } else display("Invalid command, dummy! Use N, S, E, W or H for HELP!");
            
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
         updateInv();
         var msg = "Inventory:" + inventory;
         display(msg);
      }
      
   // Navigation Functions  
      
      function goNorth() {
         nextLoc(NORTH);
         enableNorth();
         enableSouth();
         enableEast();
         enableWest();
        
        look();
      }
      
      function goSouth() {
         nextLoc(SOUTH);
         enableNorth();
         enableSouth();
         enableEast();
         enableWest();
         look();
      }
         
      function goEast() {
         nextLoc(EAST);
         enableNorth();
         enableSouth();
         enableEast();
         enableWest();
         
         look();
      }
       
      function goWest() {
         nextLoc(WEST);
         enableNorth();
         enableSouth();
         enableEast();
         enableWest();
          
         look();
      }
      
      function currentLoc() {
         display(locArray[currentLocation].description)
      } 
      
      function nextLoc(dir) {
         var newLoc = nav[currentLocation][dir];
         if (newLoc >= 0) {
            currentLocation = newLoc;
         } else display("You cannot go that way.")
      }
 
      
       function look() {
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
            default: description = "You can't go that way!";      
         }
      }  
      function display(description) {
         checkScore();
         var targetTextArea = document.getElementById("taMain");
         targetTextArea.value = description + "\n\n" + "Score:" + score + "\n\n" + targetTextArea.value;
         document.getElementById("txtCommand").focus(); 
      }

   
   // Inventory   
      
      var inventory = new Array();
      
      function updateInv() {
          if (locArray[currentLocation].hasItem) { 
            ItemArray[currentLocation].hasTaken = true;
            locArray[currentLocation].hasItem = false;
            display("Taken:" + ItemArray[currentLocation].name)
            inventory.push(ItemArray[currentLocation].name);
          } else if (locArray[currentLocation].hasItem === false) {
          display("There is nothing to take here!")          
          }
      }
   
   // Use + Take Items
      
      function useItem ()  {
          if ((currentLocation === 5) && (ItemSpray.hasTaken === true) && (ItemMachete.hasTaken === true)) {
          defeatHive();
          } else if ((currentLocation === 1) && (ItemRealKey.hasTaken === true)) {
          openChest();
          } else if ((currentLocation === 1) && (ItemRealKey.hasTaken === false) && (ItemKey.hasTaken === true)) {
          display ("This appears to be a fake key! Too bad.")
          } else display("You cannot use anything here!")
      }
      
    
      function takeItem() {
         switch(currentLocation) {
            case 0: updateInv();
                  break;
            case 1: updateInv();
                  break;
            case 2: updateInv();
                  break;
            case 3:updateInv();
                  break;
            case 4: updateInv();
                  break;
            case 5: killHive();
                  break;
            case 6: updateInv();
                  break;
            case 7:updateInv();
                  break;
            case 8: updateInv();
                  break;
            case 9: updateInv();
                  break;
            case 10: updateInv();
                  break;
            default: description = "There is no item to take here!"
            }
      }
   // Tracks Score using hasVisited attribute of localeArray
      
      function checkScore() {
          if (locArray[currentLocation].hasVisited === false) {
            locArray[currentLocation].hasVisited = true;
            score = score + 5;  
         } else if (locArray[currentLocation].hasVisited === true) {
            score = score + 0;     
         }   
      }
   
   // Enables/Disables Directional Buttons
      
      function enableNorth(dir) {
         var newLoc = nav[currentLocation][NORTH];
         if (newLoc >= 0) {
           document.getElementById("btnNorth").disabled = false;
        } else  document.getElementById("btnNorth").disabled = true;
      }
      
      function enableSouth(dir) {
         var newLoc = nav[currentLocation][SOUTH];
         if (newLoc >= 0) {
         document.getElementById("btnSouth").disabled = false;
        } else  document.getElementById("btnSouth").disabled = true; 
      }
           
      function enableEast(dir) {
         var newLoc = nav[currentLocation][EAST];
         if (newLoc >= 0) {
         document.getElementById("btnEast").disabled = false;
         } else document.getElementById("btnEast").disabled = true; 
      }   
      
      function enableWest(dir) {
         var newLoc = nav[currentLocation][WEST];
         if (newLoc >= 0) {
         document.getElementById("btnWest").disabled = false;
        } else  document.getElementById("btnWest").disabled = true;
      }
         
      
   // Additional Game Play Functions
      
      function getHelp() {
         var desc = "Use the commands 'S' or 's' to go South, 'N' or 'n' to go North, 'E' or 'e' to go East, and 'W' or 'w' to go West. Use the 'take' command to pick up any items you come across and the 'use' command to use these items when appropriate. Keep track of your location with the handy map. Good luck!"
        display(desc);
      }
      
      function killHive () {
         if (hiveDefeated === true) {
         updateInv();
         } else display ("There is no item to take here!")
      }
  
      function defeatHive() {
         hiveDefeated = true;
         locale_5.hasItem = true;
         display("You douse the hive with spray until the wasp colony is completely eradicated. You use the machete to cut the hive in half and find a golden key. Gross, but cool. Take it!");
      }
   
      function openChest() {
         display("You open the chest to reveal a year's supply of candy corn! Congratulations, you have claimed the treasure of the Caves of Karkarog.")
      }