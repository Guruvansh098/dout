
      class Ball{
        constructor(x, y, radius) {
          var options = {
              'restitution':0.8,
              'friction':1.0,
              'density':1.0
          }
          this.body = Bodies.circle(x,y,radius, options);
          this.width = width;
          this.height = height;
          
          World.add(world, this.body);
        }
        display(){
          
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill(white);
         
          pop();
        }
      };