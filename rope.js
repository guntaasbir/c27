class Rope {
constructor(body1, body2){
var stringprop = {
    bodyA:body1,
    bodyB:body2,
    stiffness:0.09,
    length:30

}
this.bendystring = Matter.Constraint.create(stringprop)
World.add(world,this.bendystring)
}    
display(){
    var p1 = this.bendystring.bodyA.position
    var p2 = this.bendystring.bodyB.position
    line(p1.x, p1.y, p2.x, p2.y )
}

}