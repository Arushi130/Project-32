
text("Score:+score,750,40");

function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.polygon);
    }
}