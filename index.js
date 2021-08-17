$(document).ready(function(){
    animateDiv();
});

var speed = 1 / 10;
var position = makeNewPosition();

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function distance(a, b){
    let dx = a[0] - b[0];
    let dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
}

function animateDiv(){
    var newq = makeNewPosition();
    var element = $('#signature');
    element.animate({ top: newq[0], left: newq[1] }, distance(newq, position) / speed, function(){
      animateDiv();        
    });
};