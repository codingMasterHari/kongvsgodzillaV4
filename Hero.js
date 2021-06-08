class Hero {
  constructor(x,y,r) {
		var options = { 
			density: 1, 
			// frictionAir: 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("kingKong.png");
		this.smokeImage = loadImage("smoke.png");
	  	this.trajectory =[];
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display() {	
		var heroPos=this.body.position;		
		push();
		translate(heroPos.x, heroPos.y-100);
		rectMode(CENTER)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r+150, this.r)
		pop();
		console.log(this.body.velocity.x);
		if(this.body.velocity.x > 80 && this.body.position.x > 200){
			var position = [this.body.position.x, this.body.position.y];
			this.trajectory.push(position);
		  }
		 
		  for(var i=0; i<this.trajectory.length; i++){
			image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
		}
	}
}
