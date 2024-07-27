class Cards {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Cards {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack (target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        }else{
            console.log("TARGET NOT FROM UNIT CARD!");
        }
    }
}

class Effect extends Cards {
    constructor(name, cost, text, stat, magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
        
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "resilience") {
                target.res += this.magnitude;
            } else if (this.name == "Unhandled Promise Rejection") {
                target.res -= this.magnitude;
            } else {
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
// const card2 = new Cards("Hello", 3);

const red = new Unit("Red Belt Ninja", 3, 3, 4);

const black = new Unit("Black Belt Ninja", 4, 5, 4);

const hard = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);

const unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);

const pair = new Effect("Pair Programming", 3, "increase target's resilience by 2", "power", +2);

console.log(red);
console.log(black);
console.log(hard);
console.log(unhandled);
console.log(pair);

hard.play(red);
console.log(red);
unhandled.play(black);
console.log(black);
pair.play(red);
console.log(red);
red.attack(black);
console.log(black);
// console.log(card2.cost)