class PetShop {
  constructor(petShopView) {
    this.petShopView = petShopView;
  }

  initialize() {
    this.getData(this.createPetsLists.bind(this));
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

  createPetsLists(petsArray) {
    this.petShopView.renderPageSections();

    this.getAllCats(petsArray);
    this.getPetsWithPriceGreaterThanAverage(petsArray);
    this.getWhiteOrFluffyPets(petsArray);
  }

  getAllCats(petsArray) {
    let cats = [];
    petsArray.forEach(pet => {
      if (pet.type === 'cat') {
        cats.push(new Cat(pet.id, pet.color, pet.price, pet.name, pet.isFluffy, pet.imageUrl));
      }
    });
    return this.petShopView.renderAllCatsList(cats);
  }

  getPetsWithPriceGreaterThanAverage(pets) {
    let petsWithPriceGreaterThanAverage = [];
    let averagePrice = this.calculateAveragePrice(pets);

    pets.forEach(pet => {
      pet.price = parseFloat(pet.price);

      if (pet.price > averagePrice) {
        petsWithPriceGreaterThanAverage.push(pet);
      }
    });

    return this.petShopView.renderPetsWithPriceGreaterThanAverageList(petsWithPriceGreaterThanAverage, averagePrice);
  }

  getWhiteOrFluffyPets(pets) {
    let whiteOrFluffyPets = [];
    pets.forEach(pet => {
      if ((pet.color === 'white') || (pet.isFluffy === 'true')) {
        whiteOrFluffyPets.push(pet);
      }
    });
    return this.petShopView.renderWhiteOrFluffyPetsList(whiteOrFluffyPets);
  }

  calculateAveragePrice(pets) {
    let sum = 0;
    pets.forEach(pet => sum += parseFloat(pet.price));
    return +(sum / pets.length).toFixed(2);
  }

}

const targetElement = document.querySelector('.petshop');
const petShopView = new PetShopView(targetElement);

const petShop = new PetShop(petShopView);
petShop.initialize();

