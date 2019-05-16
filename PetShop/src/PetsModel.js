class Pet {
    constructor (id, color, price, imageUrl) {
      this.id = id;
      this.color = color;
      this.price = price;      
      this.imageUrl = imageUrl;
    }
  }
  
  class Dog extends Pet {
    constructor (id, color, price, name, imageUrl) {
      super(id, color, price, imageUrl);     
      this.name = name;
    }  
  }
  
  class Cat extends Pet {
    constructor (id, color, price, name, isFluffy, imageUrl) {
      super(id, color, price, imageUrl);
      this.name = name;
      this.isFluffy = isFluffy;
    }   
  }
  
  class Hamster extends Pet {
    constructor (id, color, price, isFluffy, imageUrl) {
      super(id, color, price, imageUrl);     
      this.isFluffy = isFluffy;
    }   
  }