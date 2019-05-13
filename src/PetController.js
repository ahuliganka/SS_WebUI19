let response = '';

class ServerData {
  constructor(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
  }

  getPet(index, func) {

    var req = new XMLHttpRequest();

    req.open('GET', 'pets.json', true);

    req.onreadystatechange = function () {

      if (req.readyState != 4) return;

      if (req.status != 200) {
        console.log(req.status + ': ' + req.statusText);
      } else {
        try {
          response = JSON.parse(req.responseText);
        } catch (e) {
          console.log("Wrong answer " + e.message);
        }
        const pet = response[index];

        pet.index = index;

        func(pet);
        return response;
      }
    }

    req.send();
  }
}

class PetController {
  constructor(data, petShopView, petViewModel) {
    this.data = data;    
    this.petShopView = petShopView;
    this.petViewModel = petViewModel;
  }

  init() {
    this.petShopView.onClickGetPet = this.onClickGetPet.bind(this);
  }

  onClickGetPet(e) {
    const target = e.currentTarget;
    const index = parseInt(target.dataset.petIndex, 10);

    this.data.getPet(index, this.showPet.bind(this));
  }

  showPet(PetModelData) {
    this.petShopView.render(PetModelData);
  }
}

const data = new ServerData(XMLHttpRequest);

const targetElement = document.querySelector('.petshop');
const petShopView = new PetShopView(targetElement);

const petController = new PetController(data, petShopView);

petController.init();
petController.onClickGetPet({ currentTarget: { dataset: { petIndex: 0 } } });
