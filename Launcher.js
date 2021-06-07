class Launcher
{
   constructor(bodyA,pointB)
   {
      var options=
      {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.01,
         length:1
      } 
      this.launcher= Constraint.create(options);
      World.add(world,this.launcher)
   }

   display ()
   {
      if(this.launcher.bodyA)
      { 
        var pointA= this.launcher.bodyA.position;
        strokeWeight(2);
        line(pointA.x,pointA.y,this.launcher.pointB.x,this.launcher.pointB.y)  
      }
   }

   fly()
   {
     this.launcher.bodyA=null; 
   }

     play(body)
   {
      this.launcher.bodyA= body
   }
}
