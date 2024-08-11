class Ninja{
    constructor(name){
        this.name=name;
        this.health=90;
        this.speed=3;
        this.strength=3;
    }

    sayName(){
        console.log("The Ninja name is " + this.name);
    }
    showStats(){
        console.log("The Ninja name is " + this.name);
        console.log("The Ninja strength is " + this.strength);
        console.log("The Ninja speed is " + this.speed);
        console.log("The Ninja health is " + this.health);

    }

    drinkSake(){
        this.health += 10;

    }

    
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor (name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();