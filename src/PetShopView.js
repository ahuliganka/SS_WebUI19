class PetShopView {
  constructor(element) {
    this.element = element;
  }

  render(viewModel) {

    let petLists = '<div class="pets-list__cats">' +
     '<p class="pets-list__heading">Cats:</p>' +
     '<ul class="pets-list__cats-list"></ul></div>' +
     '<div class="pets-list__price-greater-average">' +
     '<p class="pets-list__heading">Pets with price greater than average:</p>' +
     '<ul class="pets-list__price-greater-average-list"></ul></div>' +
     '<div class="pets-list__white-or-fluffy">' +
     '<p class="pets-list__heading">White color or fluffy pets:</p>' +
     '<ul class="pets-list__white-or-fluffy-list"></ul></div>';
    this.element.innerHTML = petLists;
    let li;

    //--------------------- All cats:
    response.forEach(function (item) {
      if (item.type === 'cat') {
        li = document.querySelector('.pets-list__cats-list').appendChild(document.createElement('li'));
        li.classList.add("pets-list__item");
        li.innerHTML = item.name;
      }
    });

    //--------------------- All pets with price greater than average:
    let sum = 0;

    response.forEach(function (item) {
      sum += parseFloat(item.price);
    });

    let average = sum / response.length;
    average = average.toFixed(2);

    response.forEach(function (item) {
      item.price = parseFloat(item.price);

      if (+item.price > +average) {
        li = document.querySelector('.pets-list__price-greater-average-list').appendChild(document.createElement('li'));
        li.classList.add("pets-list__item");

        if (!item.name) {
          li.innerHTML = item.type + ' N' + item.id + ' <strong>(' + item.price.toFixed(2) + ')</strong>';
        } else {
          li.innerHTML = item.name + ' <strong>(' + item.price.toFixed(2) + ')</strong>';
        }
      }
    });

    let averageP = document.querySelector('.pets-list__price-greater-average .pets-list__heading');
    averageP.innerHTML = 'Pets with price greater than average: ' + average;

    //--------------------- All pets which fluffy or has white color:
    response.forEach(function (item) {

      if (item.color === 'white' || item.isFluffy) {
        li = document.querySelector('.pets-list__white-or-fluffy-list').appendChild(document.createElement('li'));
        li.classList.add("pets-list__item");        
        
        if (!item.name) {
          li.innerHTML = item.type + ' N' + item.id;
        } else {
          li.innerHTML = item.type + ': ' + item.name;
        }
      }
    });

    //------------------------------ Detailed pet preview   
    let petView = this.element.appendChild(document.createElement('div'));
    petView.classList.add("pet-view");

    let html = '<h3>' + (viewModel.name || (viewModel.type + ' N' + viewModel.id)) + '</h3>' +
    '<img class="pet-image" src="' + viewModel.imageUrl +
    '" alt="' + viewModel.name + '" />' +
    '<p><strong>Type:</strong> ' + viewModel.type + '</p>' +
    '<p><strong>Color:</strong> ' + viewModel.color + '</p>' +
    '<p><strong>Price:</strong> ' + viewModel.price + '</p>' +
    '<a class="button">To cart</a>';
    petView.innerHTML = html;

    //li.addEventListener('click', this.onClickGetPet);
  }
}
