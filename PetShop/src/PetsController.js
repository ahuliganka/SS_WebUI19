class PetShop {
  constructor(petShopView) {
    this.petShopView = petShopView;
    this.dogsArray = [];
    this.catsArray = [];
    this.hamstersArray = [];
  }

  initialize() {
    this.getData(this.dividePetsByType.bind(this));
  }

  getCurrentPet(petName) {
    this.cat.forEach(pet => {
      if (pet.name === petName) {
        this.petShopView.renderPetInfo(pet);
      }
    });
  }

  getData(callback) {
    let request = new XMLHttpRequest();
    let dataArray;

    request.open('GET', 'pets.json', true);
    request.send();
    request.onreadystatechange = () => {
      if (request.readyState != 4) return;

      if (request.status != 200) {
        console.log(request.status + ': ' + request.statusText);
      } else {
        try {
          dataArray = JSON.parse(request.responseText);
        } catch (e) {
          console.log('Wrong answer. Error: "' + e.message + '"');
        }
        callback(dataArray);
      }
    }
  }

  dividePetsByType(petsArray) {
    petsArray.forEach(pet => {
      if (pet.type === 'dog') {
        this.dog = new Dog(pet.id, pet.color, pet.price, pet.name, pet.imageUrl);
        this.dogsArray.push(this.dog);

      } else if (pet.type === 'cat') {
        this.cat = new Cat(pet.id, pet.color, pet.price, pet.name, pet.isFluffy, pet.imageUrl);
        this.catsArray.push(this.cat);

      } else if (pet.type === 'hamster') {
        this.hamster = new Hamster(pet.id, pet.color, pet.price, pet.isFluffy, pet.imageUrl);
        this.hamstersArray.push(this.hamster);
      }
    });
    this.petShopView.renderLists();
    this.getAllCats(this.catsArray);
    this.getPetsWithPriceGreaterThanAverage(petsArray);
    this.getWhiteOrFluffyPets(petsArray);
  }

  getAllCats(catsList) {
    return this.petShopView.renderAllCatsList(catsList);
  }

  getPetsWithPriceGreaterThanAverage(petsList) {
    return this.petShopView.renderPetsWithPriceGreaterThanAverageList(petsList);
  }

  getWhiteOrFluffyPets(petsList) {
    return this.petShopView.renderWhiteOrFluffyPetsList(petsList);
  }

}

const targetElement = document.querySelector('.petshop');
const petShopView = new PetShopView(targetElement);

const petShop = new PetShop(petShopView);
petShop.initialize();

