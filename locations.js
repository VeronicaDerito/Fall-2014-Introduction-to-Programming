   // Locale Prototype    
         
      function Locale(_id, _name, _description) {
         this.id 
         this.name 
         this.description 
         this.hasItem 
         this.hasVisited
      }   
      
      
   // Locale Instances
   
      var locale_0 = new Locale();  
      locale_0.id = 0;
      locale_0.hasItem = false;
      locale_0.name = "Main Cavern";
      locale_0.description = "You enter a main cavern with passages leading to the north, south, east, and west.";
      locale_0.hasVisited = true;
      
      var locale_1 = new Locale();
      locale_1.id = 1;
      locale_1.hasItem = false;
      locale_1.name = "Chest Room";
      locale_1.description = "You enter the north entrance and  end up in a room with a massive chest. It is locked.";
      locale_1.hasVisited = false;
      
      var locale_2 = new Locale();
      locale_2.id = 2;
      locale_2.name = "Library";
      locale_2.description = "You enter the west entrance and find a large library.";
      locale_2.hasItem = false;
      locale_2.hasVisited = false;
      
      var locale_3 = new Locale();
      locale_3.id = 3;
      locale_3.name = "Wasp Room";
      locale_3.description = "You enter the south entrance and end up in a room of wasps.";
      locale_3.hasItem = false;
      locale_3.hasVisited = false;
      
      var locale_4 = new Locale();
      locale_4.id = 4;
      locale_4.name = "Laboratory";
      locale_4.description = "You enter the east entrance and find yourself in an abandoned laboratory.";
      locale_4.hasItem = false;
      locale_0.hasVisited = false;

      var locale_5 = new Locale();
      locale_5.id = 5;
      locale_5.name = "Hive Room";
      locale_5.description = "You head further south and enter a room with a massive hive. 'Use' the right equipment to defeat the hive!";
      locale_5.hasItem = false;
      locale_5.hasVisited = false;
      
      var locale_6 = new Locale();
      locale_6.id = 6;
      locale_6.hasItem = true;
      locale_6.name = "Supply Closet";
      locale_6.description = "You enter a small supply room to the south that is stocked with insect killer. You might want to take some, it may come in handy.";
      locale_6.hasVisited = false;
     
      var locale_7 = new Locale();
      locale_7.id = 7;
      locale_7.hasItem = true;
      locale_7.name = "Machete Room";
      locale_7.description = "You pass through a door to the north and find an old classroom. There is a machete on one of the desks.";
      locale_7.hasVisited = false;
      
      var locale_8 = new Locale();
      locale_8.id = 8;
      locale_8.name = "Item Room";
      locale_8.description = "You enter a room to the east and find a room full of spoons!";
      locale_8.hasItem = true;
      locale_8.hasVisited = false;
      
      var locale_9 = new Locale();
      locale_9.id = 9;
      locale_9.name = "Secret Room";
      locale_9.description = "You have found a secret passage! Continue on if you dare.";
      locale_9.hasItem = false;
      locale_9.hasVisited = false;
      
      var locale_10 = new Locale();
      locale_10.id = 10;
      locale_10.name = "Key Room";
      locale_10.description = "You found a key! This one looks promising. Grab it!";
      locale_10.hasItem = true;
      locale_10.hasVisited = false;
      
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
      ItemKey.name = "Key";
      ItemKey.hasTaken = false;
      
      var ItemSpoon = new Item ();
      ItemSpoon.id = 8;
      ItemSpoon.name = "Spoon";
      ItemKey.hasTaken = false;
 
      var ItemMachete = new Item ();
      ItemMachete.id = 7;
      ItemMachete.name = "Machete";
      ItemMachete.hasTaken = false;
    
      var ItemRealKey = new Item ();
      ItemRealKey.id = 5;
      ItemRealKey.name = "Real Key"
      ItemRealKey.hasTaken = false;
      
      var ItemArray = [];
           ItemArray[6]  = ItemSpray;
           ItemArray[7]  = ItemMachete;
           ItemArray[8]  = ItemSpoon;
           ItemArray[10] = ItemKey;
           ItemArray[5]  = ItemRealKey;