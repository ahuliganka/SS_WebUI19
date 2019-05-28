class PetShopView {
  constructor(element) {
    this.element = element;
    this.petView;
  }

  renderPageSections() {
    let petLists = `
    <div class="pets-list__cats">
      <p class="pets-list__heading">Cats:</p>
      <ul class="pets-list__cats-list"></ul>
    </div>
    <div class="pets-list__price-greater-average">
      <p class="pets-list__heading">Pets with price greater than average:</p>
      <ul class="pets-list__price-greater-average-list"></ul>
    </div>
    <div class="pets-list__white-or-fluffy">
      <p class="pets-list__heading">White or fluffy pets:</p>
      <ul class="pets-list__white-or-fluffy-list"></ul>
    </div>
    `;

    this.element.innerHTML = petLists;
    this.petView = this.element.appendChild(document.createElement('div'));
  }

  renderAllCatsList(cats) {
    cats.forEach(cat => {
      let li = document.querySelector('.pets-list__cats-list').appendChild(document.createElement('li'));
      li.classList.add('pets-list__item');
      li.innerHTML = cat.name;
      li.addEventListener('click', () => {
        this.renderPetView(cat);
      });
    });
  }

  renderPetsWithPriceGreaterThanAverageList(petsWithSpecialPrice, averagePrice) {
    petsWithSpecialPrice.forEach(pet => {
      let li = document.querySelector('.pets-list__price-greater-average-list').appendChild(document.createElement('li'));
      li.classList.add('pets-list__item');

      if (pet.name) {
        li.innerHTML = pet.name + ' <strong>(' + pet.price.toFixed(2) + ')</strong>';
      } else {
        li.innerHTML = pet.type + ' N' + pet.id + ' <strong>(' + pet.price.toFixed(2) + ')</strong>';
      }

      li.addEventListener('click', this.removeActiveClassFromListItem);
      li.addEventListener('click', () => {
        li.classList.add('active');
        this.renderPetView(pet);
      });
    });

    let averagePriceInHeading = document.querySelector('.pets-list__price-greater-average .pets-list__heading');
    averagePriceInHeading.innerHTML = `Pets with price greater than average: ${averagePrice}`;
    return;
  }

  renderWhiteOrFluffyPetsList(petsForBlondes) {
    petsForBlondes.forEach(pet => {
      let li = document.querySelector('.pets-list__white-or-fluffy-list').appendChild(document.createElement('li'));
      li.classList.add('pets-list__item');

      (pet.name) ? (li.innerHTML = pet.type + ': ' + pet.name) :
        (li.innerHTML = pet.type + ' N' + pet.id);

      li.addEventListener('click', this.removeActiveClassFromListItem);
      li.addEventListener('click', () => {
        li.classList.add('active');
        this.renderPetView(pet);
      });
    });
  }

  renderPetView(item) {
    this.petView.classList.add('pet-view');
    this.petView.style.display = 'block';
    let petViewContent = `
    <h3 class="pet-heading">${(item.name || (item.type + ' N' + item.id))}</h3>
    <img class="pet-image" src="${item.imageUrl}" alt="${item.name}" />
    <p><strong>Color:</strong> ${item.color}</p>
    <p><strong>Price:</strong> ${item.price}</p>
    <a class="button">To cart</a>
    `;
    this.petView.innerHTML = petViewContent;
  }

  removeActiveClassFromListItem() {
    let list = document.querySelectorAll('.pets-list__item');

    list.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
  }

}
