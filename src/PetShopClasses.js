class PetShop {
    constructor (color, price) {
      this.color = color;
      this.price = price;    
    }
    show() {
      
    }
  }
  
  class PetShopView extends PetShop {
    constructor (name) {
      super("PetShopView 1", 1.1);     
      this.name = name;
    }  
    show() {
      super.show();    
  
    }
  }
  
  let petShop = new PetShop("PetShop", 1);
  petShop.show();
  
  let petShopView = new PetShopView("PetShopView 2");
  petShopView.show();
