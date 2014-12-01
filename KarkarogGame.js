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
     
     
      
      // Item Prototype
    
      function Item(id,name,hasTaken)  {
         this.id 
         this.name 
         this.hasTaken
      }   
      
      
      // Item Instances
      
      var ItemSpray = new Item ();
      ItemSpray.id = 6;
      ItemSpray.name = "Insect Spray";
      ItemSpray.hasTaken = false;
    
      
      var ItemKey = new Item ();
      ItemKey.id = 10;
      ItemKey.name = "Real Key";
      ItemKey.hasTaken = false;
      
      var ItemSpoon = new Item ();
      ItemSpoon.id = 8;
      ItemSpoon.name = "Spoon";
      ItemKey.hasTaken = false;
 
      
      var ItemMap = new Item ();
      ItemMap.id = 7;
      ItemMap.name = "Map";
      ItemKey.hasTaken = false;
    
      
      var ItemArray = [];
           ItemArray[6] = ItemSpray;
           ItemArray[7] = ItemMap;
           ItemArray[8] = ItemSpoon;
           ItemArray[10] = ItemKey;
      
      
      
   
      // Locale Prototype    
         
      function Locale(_id, _name, _description) {
         this.id 
         this.name 
         this.description 
         this.hasItem 
      }   
      
      
   // Locale Instances
   
      var locale_0 = new Locale();  
      locale_0.id = 0;
      locale_0.hasItem = false;
      locale_0.name = "Main Cavern";
      locale_0.description = "You enter a main cavern with passages leading to the north, south, east, and west.";
      
     var locale_1 = new Locale();
      locale_1.id = 1;
      locale_1.hasItem = false;
      locale_1.name = "Chest Room";
      locale_1.description = "You enter the north entrance and  end up in a room with a massive chest. It is locked.";
      
     var locale_2 = new Locale();
      locale_2.id = 2;
      locale_2.name = "Library";
      locale_2.description = "You enter the west entrance and find a large library.";
      locale_2.hasItem = false;
      
     var locale_3 = new Locale();
      locale_3.id = 3;
      locale_3.name = "Wasp Room";
      locale_3.description = "You enter the south entrance and end up in a room of wasps.";
      locale_3.hasItem = false;
      
     var locale_4 = new Locale();
      locale_4.id = 4;
      locale_4.name = "Laboratory";
      locale_4.description = "You enter the east entrance and find yourself in an abandoned laboratory.";
      locale_4.hasItem = false;

     var locale_5 = new Locale();
      locale_5.id = 5;
      locale_5.name = "Hive Room";
      locale_5.description = "You head further south and enter a room with a massive hive.";
      locale_5.hasItem = false;
      
      var locale_6 = new Locale();
      locale_6.id = 6;
      locale_6.hasItem = true;
      locale_6.name = "Supply Closet";
      locale_6.description = "You enter a small supply room to the south that is stocked with insect killer. You might want to take some, it may come in handy.";
     
      
      var locale_7 = new Locale();
      locale_7.id = 7;
      locale_7.hasItem = true;
      locale_7.name = "Map Room";
      locale_7.description = "You pass through a door to the north and find an old classroom. There is a map on one of the desks.";
      
      
     var locale_8 = new Locale();
      locale_8.id = 8;
      locale_8.name = "Item Room";
      locale_8.description = "You enter a room to the east and find a room full of spoons!";
      locale_8.hasItem = true;
      
     var locale_9 = new Locale();
      locale_9.id = 9;
      locale_9.name = "Secret Room";
      locale_9.description = "You have found a secret passage! Continue on if you dare.";
      locale_9.hasItem = false;
      
      var locale_10 = new Locale();
      locale_10.id = 10;
      locale_10.name = "Key Room";
      locale_10.description = "You found a key! This one looks promising. Grab it!";
      locale_10.hasItem = true;
      
      
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
               goSouth();
         } else if (txtCommand.value === "e" || txtCommand.value === "E") {
               goEast();
         } else if (txtCommand.value === "w" || txtCommand.value === "W") {
               goWest();
         } else if (txtCommand.value === "h" || txtCommand.value === "H") {
              getHelp();
         }else if (txtCommand.value === "i" || txtCommand.value === "I")  {
              btnInv_click();
         } else if ((txtCommand.value === "take") && (currentLocation === 6)) { 
            updateInv();
         } else if ((txtCommand.value === "take") && (currentLocation === 10)) {
            updateInv();  
         } else if ((txtCommand.value === "take") && (currentLocation === 7)) {
            updateInv();
         } else if ((txtCommand.value === "take") && (currentLocation === 8)) {
            updateInv();
         }
         else display("Invalid command, dummy! Use N, S, E, W or H for HELP!");
            
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
      
      function updateInv() {
          if (locArray[currentLocation].hasItem === false) { 
            inventory = ""; 
       }  else if (locArray[currentLocation].hasItem === true) {
            ItemArray[currentLocation].hasTaken = true;
            inventory = ItemArray[currentLocation].name;
         } 
         
      }
      function btnInv_click() {
         updateInv();
         var msg = "Inventory:" + inventory;
         display(msg);
         
      }

      
    

      
      function goNorth() {

        if (currentLocation === 0) {
              currentLocation = 1; 
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = false;
              
         } else if (currentLocation === 3) {
              currentLocation = 0;   
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = true;
         
         } else if (currentLocation === 1) {
              currentLocation = 1;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = false;
         
         } else if (currentLocation === 5) {
              currentLocation = 3;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = false;
         
         } else if (currentLocation === 6) {
              currentLocation = 4;
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
         
         } else if (currentLocation === 10) {
              currentLocation = 9;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = false;
         
         } else if (currentLocation === 9)  {
              currentLocation = 2;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
         
         } else if (currentLocation === 4) {
              currentLocation = 7;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = false;
         }     
         look();   
                  
      }
      
      function goSouth() {
         if (currentLocation === 0)  {
              currentLocation = 3;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = false;
      
         } else if (currentLocation === 1) {
              currentLocation = 0; 
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
                 
         } else if (currentLocation === 3) {
              currentLocation = 5;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = true;
      
         } else if (currentLocation === 4) {
              currentLocation = 6;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = true;
        
         } else if (currentLocation === 2) {
              currentLocation = 9;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = false;
      
         } else if (currentLocation === 9) {
              currentLocation = 10;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = true;
      
         } else if (currentLocation === 7) {
              currentLocation = 4;
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
      
         } 
         
         look();
         
      }
      
      function goEast() {
         if (currentLocation === 0) {
              currentLocation = 4;
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
         } else if (currentLocation === 2) {
              currentLocation = 0;
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
         } else if (currentLocation === 4) {
              currentLocation = 8;
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnEast").disabled = true;
              document.getElementById("btnSouth").disabled = true;
         }
         
         look();
      }
       
      function goWest() {
         if (currentLocation === 0)   {
              currentLocation = 2;
              document.getElementById("btnWest").disabled = true;
              document.getElementById("btnNorth").disabled = true;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;       
         
         } else if (currentLocation === 4)   {
              currentLocation = 0;
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
         
         } else if (currentLocation === 8) {
              currentLocation = 4;
              document.getElementById("btnWest").disabled = false;
              document.getElementById("btnNorth").disabled = false;
              document.getElementById("btnEast").disabled = false;
              document.getElementById("btnSouth").disabled = false;
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

      function display(description) {
         checkScore();
         var targetTextArea = document.getElementById("taMain");
         targetTextArea.value = description + "\n\n" + "Score:" + Score + "\n\n" + targetTextArea.value; 
      }

      
      function getHelp() {
         var desc = "Use the commands 'S' or 's' to go South, 'N' or 'n' to go North, 'E' or 'e' to go East, and 'W' or 'w' to go West. Use the 'take' command to pick up any items you come across. Keep track of your location with the handy map. Good luck!"
        display(desc);
  
      }
      
     
     
    function currentLoc() {
      display(locArray[currentLocation].description)
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
  
      
     
      

