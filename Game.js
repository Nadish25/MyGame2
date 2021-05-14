class Game {
  constructor(){

    
    this.button1=createImg("car.png")
    this.button1.position(300,400);

    this.button2=createImg("bike.png")
    this.button2.position(500,400)

    this.button3=createImg("rcar.png")
    this.button3.position(600,400)
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
       
    }

    car1 = createSprite(100,200,20,20);
    car1.addImage(user)
    car2 = createSprite(300,200,20,20);
    car2.addImage(user)
    car3 = createSprite(500,200,20,20);
    car3.addImage(user)
    cars = [car1, car2, car3];

    background(255)

  




  var index=0;
  
 /* this.button1.mousePressed(()=>{
    for(var plr in allPlayers){
     
      //add 1 to the index for every loop
      index = index + 1 ;

      //position the cars a little away from each other in x direction
     // x = x + 200;
      //use data form the database to display the cars in y direction
      //y = displayHeight - allPlayers[plr].distance;
      //cars[index-1].x = x;
      //cars[index-1].y = y;

      if (index === player.index){
        cars[index - 1].addImage(carImg);
      }
    }
  });
*/
}

  

 chooseChar(){

  
  

    var index=0;
 
    this.button1.mousePressed(()=>{
      this.button3.hide();
      this.button1.hide();
      this.button2.hide(); 
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(carTop); 
        }
      }
    });
    this.button2.mousePressed(()=>{
      this.button3.hide();
      this.button2.hide();
      this.button1.hide();
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(bikeTop);
          cars[index - 1].rotation=-90;

        }
      }
    });

    this.button3.mousePressed(()=>{
      this.button3.hide();
      this.button2.hide();
      this.button1.hide();
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(rcarTop);
           

        }
      }
    });
  }



  play(){
    form.hide();

    this.button1.visiblity=true;
    

    player.getCarsAtEnd();


    

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 170;
      var y;

      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          
        //  stroke(10)
          //fill("blue")
          //ellipse(x,y,100,100)

         // cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
           
         

        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    
    if(player.distance>1500){
      gameState=2
      player.rank=player.rank+1;
      Player.updateCarsAtEnd(player.rank);
      textSize(30)
      fill(0,0,5)
      text("Your Rank is: Rank " + player.rank + " !!", camera.x,camera.y-200)
    }


    drawSprites();
  }
  end(){
    console.log("end")
    console.log(player.rank)
    
  }
}
