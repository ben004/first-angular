let speed
class Animal {

    constructor (speed)
    {
        this.speed=10;
    }
    
    stop() {
      console.log(` stands still.`);
    }
  }
  class Dog extends Animal
  { 
    run() {
        console.log(` runs with speed ${this.speed}.`);
    }
  }
  let animal= new Animal(10)
  let dog = new Dog();
  dog.run()
  dog.stop()
  


  