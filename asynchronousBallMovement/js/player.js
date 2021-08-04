class Player{
constructor(){
this.index=null
this.distance=0
this.name=null
this.rank=null

}
getCount(){
var playerCountref = database.ref("playerCount")
playerCountref.on("value",(data)=>{
playerCount = data.val()



})



}
getCarsAtEnd(){
database.ref("CarsAtEnd").on("value",(data)=>{
this.rank = data.val()

})


}
static updateCarsAtEnd(rank){database.ref("/").update({
CarsAtEnd:rank

})}

updateCount(count){
database.ref("/").update({
    playerCount:count



})





}

update(){
var playerIndex="players/player" + this.index
database.ref(playerIndex).set({
name:this.name,
distance:this.distance





})

}

static getPlayerinfo(){


var playerInfoRef=database.ref("players")
playerInfoRef.on("value",(data)=>{allPlayers=data.val()})



}

removeplayers(){
var removeallref = database.ref("players")
removeallref.remove()


}




}