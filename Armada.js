// Player prefab constructor function

function Armada(game, key, frame, scale, speed) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, game.rnd.integerInRange(64,game.width-64),
	game.rnd.integerInRange(64,game.height-61), key, frame);

	// add custom properties
	this.anchor.set(0.5);
	var scale = game.rnd.integerInRange(1,2);
	this.scale.x = -scale; //ship scale x
	this.scale.y = scale; //ship scale y

	// put some physics on it
	game.physics.enable(this); //enabling physics
	this.body.velocity.x = speed + game.rnd.integerInRange(10,180); //setting starting velocity
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Player)
Armada.prototype = Object.create(Phaser.Sprite.prototype);
Armada.prototype.constructor = Armada;

// override Phaser.Sprite update (to spin the diamond)
Armada.prototype.update = function() {
	if(game.input.keyboard.isDown(Phaser.Keyboard.R)) { //reversing direction
		console.log('R: Pressed');
		this.body.velocity.x *= -1; //reversing direction
	}
	if(this.body.position.x > 750) //wrapping around
	{
		this.body.position.x = -300;
	}
}

