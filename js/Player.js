class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //rank is the property which tells us which player came 1st, 2nd, 3rd, 4th
    this.rank = null;
  }

  //read the value of carsAtEnd from the database and assign it to the rank, tells us how many cars have reach the end of the track

  getCarsAtEnd(){
    var carsAtEndRef = database.ref('carsAtEnd');
    carsAtEndRef.on("value", (data)=>{
      this.rank = data.val();
    });
  }

//write the value to carsAtEnd in the database
//since this function is common to all the objects, we make it static
  static updateCarsAtEnd(rank){
  database.ref('/').update({
    carsAtEnd: rank
  });
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
