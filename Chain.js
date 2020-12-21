class Chain{
    constructor(bodyA, pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10
        }
        this.chain=Constraint.create(options)
        this.pointB=pointB
        World.add(world, this.chain)
    }
    fly(){
        this.chain.bodyA = null
    }
    display(){
    if(this.chain.bodyA){
        strokeWeight(7)
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y)
    }
        
    }
}