fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 4) {
    fill(255, 0, 230);
    textSize(20);
    text("PRAISE", 166, 200);
    text("GOD", 179, 229); 
}
else if (answer >= 3 ) {
    fill(255, 0, 0);
    textSize(20);
    text("PRAISE", 166, 200);
    text("JESUS", 173, 229);
}
else if (answer >= 2 ) {
    fill(247, 255, 0);
    textSize(20);
    text("PRAISE", 165, 200);
    textSize(15);
    text("HOLY SPIRIT", 157, 229);
}
else if (answer < 2){
    fill(5, 237, 245);
    textSize(20);
    text("PRAISE", 165, 200);
    textSize(15);
    text("HOLY TRINITY", 147, 229);
}
else 
        {
    fill(5, 237, 245);
    textSize(20);
    text("PRAISE", 165, 200);
    textSize(15);
    text("ALL", 147, 229);
    }


