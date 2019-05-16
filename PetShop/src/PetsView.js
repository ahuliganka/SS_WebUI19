class PetShopView {
  constructor(element) {
    this.element = element;
  }

  renderLists() {
    let petLists = '<div class="pets-list__cats">' +
      '<p class="pets-list__heading">Cats:</p>' +
      '<ul class="pets-list__cats-list"></ul>' +
      '</div>' +
      '<div class="pets-list__price-greater-average">' +
      '<p class="pets-list__heading">Pets with price greater than average:</p>' +
      '<ul class="pets-list__price-greater-average-list"></ul>' +
      '</div>' +
      '<div class="pets-list__white-or-fluffy">' +
      '<p class="pets-list__heading">White or fluffy pets:</p>' +
      '<ul class="pets-list__white-or-fluffy-list"></ul>' +
      '</div>';
    this.element.innerHTML = petLists;
  }

  renderAllCatsList(cats) {
    let petView = this.element.appendChild(document.createElement('div'));    
    cats.forEach(cat => {
      let li = document.querySelector('.pets-list__cats-list').appendChild(document.createElement('li'));
      li.classList.add('pets-list__item');
      li.innerHTML = cat.name;
      li.addEventListener('click', () => {
        petView.classList.add('pet-view');
        petView.style.display = 'block';

        let petViewContent = '<h3 class="pet-heading">' + (cat.name || (cat.type + ' N' + cat.id)) + '</h3>' +
          '<img class="pet-image" src="' + cat.imageUrl +
          '" alt="' + cat.name + '" />' +
          '<p><strong>Color:</strong> ' + cat.color + '</p>' +
          '<p><strong>Price:</strong> ' + cat.price + '</p>' +
          '<a class="button">To cart</a>';
        petView.innerHTML = petViewContent;
      });
    });
  }

  renderPetsWithPriceGreaterThanAverageList(petsWithSpecialPrice) {
    let sum = 0;
    petsWithSpecialPrice.forEach(pet => sum += parseFloat(pet.price));
    let average = (sum / petsWithSpecialPrice.length).toFixed(2);

    let petView = this.element.appendChild(document.createElement('div'));      

    petsWithSpecialPrice.forEach(pet => {
      pet.price = parseFloat(pet.price);

      if (+pet.price > +average) {
        let li = document.querySelector('.pets-list__price-greater-average-list').appendChild(document.createElement('li'));
        li.classList.add('pets-list__item');

        if (pet.name) {
          li.innerHTML = pet.name + ' <strong>(' + pet.price.toFixed(2) + ')</strong>';
        } else {
          li.innerHTML = pet.type + ' N' + pet.id + ' <strong>(' + pet.price.toFixed(2) + ')</strong>';
        }

        li.addEventListener('click', () => {
          petView.classList.add('pet-view');
          petView.style.display = 'block';
  
          let petViewContent = '<h3 class="pet-heading">' + (pet.name || (pet.type + ' N' + pet.id)) + '</h3>' +
            '<img class="pet-image" src="' + pet.imageUrl +
            '" alt="' + pet.name + '" />' +
            '<p><strong>Color:</strong> ' + pet.color + '</p>' +
            '<p><strong>Price:</strong> ' + pet.price + '</p>' +
            '<a class="button">To cart</a>';
          petView.innerHTML = petViewContent;
        });        
      }
    });

    let averageInHeading = document.querySelector('.pets-list__price-greater-average .pets-list__heading');
    averageInHeading.innerHTML = 'Pets with price greater than average: ' + average;
    return;
  }

  renderWhiteOrFluffyPetsList(petsForBlondes) {
    let petView = this.element.appendChild(document.createElement('div'));  

    petsForBlondes.forEach(pet => {
      if ((pet.color === 'white') || (pet.isFluffy === 'true')) {
        let li = document.querySelector('.pets-list__white-or-fluffy-list').appendChild(document.createElement('li'));
        li.classList.add('pets-list__item');

        if (pet.name) {
          li.innerHTML = pet.type + ': ' + pet.name;
        } else {
          li.innerHTML = pet.type + ' N' + pet.id;
        }

        li.addEventListener('click', () => {
          petView.classList.add('pet-view');
          petView.style.display = 'block';
  
          let petViewContent = '<h3 class="pet-heading">' + (pet.name || (pet.type + ' N' + pet.id)) + '</h3>' +
            '<img class="pet-image" src="' + pet.imageUrl +
            '" alt="' + pet.name + '" />' +
            '<p><strong>Color:</strong> ' + pet.color + '</p>' +
            '<p><strong>Price:</strong> ' + pet.price + '</p>' +
            '<a class="button">To cart</a>';
          petView.innerHTML = petViewContent;
        });
      }
    });
  }

}
