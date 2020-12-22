class Form{
    constructor(){
        var foodStock;
        var lastFed;

        getFoodstock(){
            var foodstockRef = database.ref('foodstock');
            foodstockRef.on("value",(data)=>{
              foodstock = data.val();
            })
        }
        
          updateFoodstock(count){
            database.ref('/').update({
              foodstock: count
            });
          }
         detectFoodstock(){
            var foodstockRef = database.ref('foodstock');
            foodstockRef.on("value",(data)=>{
              foodstock = data.val();
            })
          }
    };
    display(){
var x=80,y=100;
imageMode(CENTER);
image(this.image,720,220,70,70);
 
if(this.foodstock!=0){
    for(var i=0;i<this.foodstock;i++){
        if(i%10==0){
            x=80;
            y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30
    }
}
    
         
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton("Play");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide;
            var name = input.value()
            foodstock+=1;
            player.update(name);
            player.updateCount(foodstock);
            var greetings= createElement('h3');
            greetings.html("Hello"+name);
            greetings.position(130,160);});
    }
}