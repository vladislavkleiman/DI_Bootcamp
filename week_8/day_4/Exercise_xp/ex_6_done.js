class Animal {
    constructor(name,type,color){
        this.name=name;
        this.type=type;
        this.color=color;
    }
}

class Mamal extends Animal {
    constructor(name,type,color,alarm){
        super(name,type,color);
        this.alarm = alarm
    }
    sound() {
        console.log(`${this.alarm} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
    
}

const farmerCow = new Mamal('vlad', 'cat','white','myau')
console.log(farmerCow);
farmerCow.sound()