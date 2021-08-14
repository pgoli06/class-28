class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treewidth=450;
		this.treeheight=600;
		this.treeThickness=10;
		
		this.image=loadImage("images/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treewidth, this.treeThickness, {isStatic:true})
		
		
		World.add(world, this.bottomBody)
		

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeheight/2,this.treewidth, this.treeheight)
			pop()
			
	}

}