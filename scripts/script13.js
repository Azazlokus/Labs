function display_random_image(){
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }, {
        src: "../img/1.jpeg",
        width: "320",
        height: "195"
    }, {
        src: "../img/2.jpg",
        width: "320",
        height: "195"
    }, {
        src: "../img/3.jpg",
        width: "320",
        height: "195"
    }, {
        src: "../img/4.jpg",
        width: "320",
        height: "195"
    }, {
        src: "../img/5.png",
        width: "320",
        height: "195"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   

  function getRandomInt(min,max){
    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
}  


var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}