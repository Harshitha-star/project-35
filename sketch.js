var fedtime,lastfed,foodobj,feedDog,addfood;

function preload()
{
	//load images here
}

function setup() {
  createCanvas(800, 700);
  var food1 = new food1(); 
  feed = createButtton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addfood = createButton("add food");
  addfood.position(800,95);
  addfood.mousePressed(addfoods);
}


function draw() {  

  drawSprites();
  //add styles here
food1.display();

  var fedtime = database.ref('ffeed time');
  fedtimeRef.on("value",(data)=>{
   lastfed = data.val();
  })
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last fedd :"+lastfeed%12+"pm",350,30);
  }else if(lastfed ==0){
    text("last fedd : 12 am",350,30);
  }else{
    text("last fedd :"+lastfeed+"am",350,30);
  }
}

function feeddog(){
  feedDog.addImage(happyDog);
  foodobj.updateFoodstock(foodobj.getFoodstock()-1);
  database.ref('/').update({
    food:foodobj.getFoodstock(),
    foodtime:hour()
  })
}
function adddog(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}



