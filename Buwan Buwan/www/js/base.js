var game = new Phaser.Game(800,600, Phaser.CANVAS, 'gameDiv');
var wood;
var start;
var about;

var mainState =
	{

		preload:function() 
		{
		game.load.image("bg","img/menu.png");
		game.load.image("play","img/start.png");
		game.load.image("about","img/about.png");
		},

		create:function() 
		{
		game.physics.startSystem(Phaser.Physics.ARCADE);
		wood = game.add.tileSprite(0,0,800,600, "bg");

		play = game.add.button(500,400,"play",start);
    	play.scale.x= 1;
   		play.scale.y= .5;

   		about = game.add.button(400,470,"about",about);
    	about.scale.x= 1;
   		about.scale.y= .5;
		},
  
		update:function() 
		{
		
		},
		
	}

function start ()
{
     window.location.href="index1.html";
  {start.frame=0}  
setTimeout(function(){
    
start.frame=0;
game._paused=false;
},50);
}

function about ()
{
     window.location.href="about.html";
  {about.frame=0}  
setTimeout(function(){
    
about.frame=0;
game._paused=false;
},50);
}

	game.state.add("mainState",mainState);
	game.state.start("mainState");
 