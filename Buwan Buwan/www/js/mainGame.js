var w = 800, h = 600;
var bg,bgMusic;
var tray
var a
var bounds = 15000;
var game = new Phaser.Game(w, h, Phaser.CANVAS);
var basicGame=function(){}
var score,bestScoreText
var player,keyboard


basicGame.prototype={
    preload:function() {
   
    game.load.image("background","img/bg.jpg");
   // game.load.image("tray","img/2.png");
    game.load.image("a","img/1.png");
    game.load.image("circle","img/1.png",150,50);
 	game.load.image('tray','img/2.png');

	},

    create:function() {
    	
  
    game.add.sprite(0,0,"background");
    sprite = game.add.sprite(400,200, 'tray');
    sprite.anchor.setTo(.5,.5);  

    // sprite = game.add.sprite(285,200, 'a');
    // sprite.anchor.setTo(.5,.5);   

    
    //game.add.sprite(240,90,"tray");
   game.add.sprite(285,200,"a");      

            player = game.add.sprite(400,250,"circle");
            game.physics.arcade.enable(player);
            a = game.add.group();
            a.enableBody = true;
        

            keyboard = game.input.keyboard.createCursorKeys();




         // player    
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;
    player.body.bounce.y = 0.2
    player.scale.y = 1;
    player.scale.x = 1;



        //Scoring
          score = game.add.text(80,50,'score: ',{fill:"blue"});
          bestScoreText = game.add.text(80,50,'Best: '+getScore(),{fill:"blue"});


   

		
		

    bgMusic = game.add.audio("bgMusic",true);
    
	},




    update:function() {

        game.physics.arcade.collide(a,player);
        game.physics.arcade.overlap(a,player);
        
        sprite.angle += 1;
        
    
    if(keyboard.left.isDown){
        player.animations.play("walk-left");
        player.body.velocity.x = -200;
        
    }
    else if(keyboard.right.isDown){
        // bg.frame = 1;
        player.animations.play("walk-right");
        player.body.velocity.x = 200;
    }
    else{
        player.body.velocity.x = 0;
        player.animations.stop();
    }

    if(keyboard.up.isDown ){
        player.body.velocity.y = -200;
    }

   
         function saveScore(Score){
    localStorage.setItem("gameScore",Score);
}

        function getScore(){
         return (localStorage.getItem("gameScore") == null || localStorage.getItem("gameScore") == "")?0:localStorage.getItem("gameScore"); 
                }
    
                    }
 }

 game.state.add("mainGame",basicGame,true);

 //function render() {

  //  game.debug.spriteInfo(sprite, 32, 32);
    // game.debug.text('angularVelocity: ' + sprite.body.angularVelocity, 32, 200);
    // game.debug.text('angularAcceleration: ' + sprite.body.angularAcceleration, 32, 232);
    // game.debug.text('angularDrag: ' + sprite.body.angularDrag, 32, 264);
    // game.debug.text('deltaZ: ' + sprite.body.deltaZ(), 32, 296);

//}