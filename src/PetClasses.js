class Pet {
  constructor (color, price) {
    this.color = color;
    this.price = price;    
  }
  // show() {
    
  // }
}

class Dog extends Pet {
  constructor (name) {
    super("red", 5.67);     
    this.name = name;
  }  
  // show() {
  //   super.show();    
 
  // }
}

class Cat extends Pet {
  constructor (name, isFluffy) {
    super("white", 12.34);     
    this.name = name;
    this.isFluffy = isFluffy;
  }   
  // show() {
  //   super.show();
    
  // }
}

class Hamster extends Pet {
  constructor (isFluffy) {
    super("brown", 20.45);     
    this.isFluffy = isFluffy;
  }   
  // show() {
  //   super.show();

  // }
}

let dog = new Dog("Doggy");
dog.show();

let cat = new Cat("Catty", false);
cat.show();

let hamster = new Hamster(true);
hamster.show();