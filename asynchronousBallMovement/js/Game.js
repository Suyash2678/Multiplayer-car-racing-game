class Game {
constructor (){}

getState (){var gameStateRef = database.ref("gameState")
gameStateRef.on("value",function(data){
   gameState = data.val()

})


}

update(state){
database.ref("/").update({gameState:state})

}

async start(){
    if (gameState === 0){
     player = new Player()
     var playerCountRef = await database.ref("playerCount").once("value")
     console.log(playerCountRef)
     if(playerCountRef.exists()){
     playerCount = playerCountRef.val()
     player.getCount()
     console.log("hiline26")
     }
     
     form = new Form()
     form.display();

    }
    car1 = createSprite(100,200,50,50)
    car1.addImage(car1image)
    car2 = createSprite(300,200,50,50)
    car2.addImage(car2image)
    car3 = createSprite(500,200,50,50)
    car3.addImage(car3image)
    car4 = createSprite(700,200,50,50)
    car4.addImage(car4image)
    cars = [car1,car2,car3,car4]




}

play(){
form.hide()
player.getCarsAtEnd()
Player.getPlayerinfo()
if(allPlayers !== undefined){
    background("black")
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index = 0
    var x = 150
    var y

for(var plr in allPlayers){
    
    index = index +1
    x = x +200
    y = displayHeight -allPlayers[plr].distance;
    cars[index -1].x = x;
    cars[index -1].y = y;
    //if(plr === "player" + player.index)
    //fill("blue")
    //else
    //fill("red")
    //display_position += 20
    //textSize(15)
    //text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,display_position)
     if(index === player.index){
         stroke(12)
         fill("green")
         ellipse(x,y,120,120)
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index -1].y;

     }

}
}
if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 50;
    player.update();
    
    
    }
    if(player.distance > 3750){
        console.log(player.rank)
        gameState = 2
        player.rank += 1
        Player.updateCarsAtEnd(player.rank)
        
        }

    drawSprites();

}
end(){
console.log("game ended")
console.log("your rank is " + player.rank)


}


}

