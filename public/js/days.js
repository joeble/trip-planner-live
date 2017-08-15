$(function populateSelects() {

  hotels.forEach(function(hotel) {
    $('#hotel-choices').append($('<option>', { value: hotel.id, text: hotel.name }))
  })
  restaurants.forEach(function(restaurant) {
    $('#restaurant-choices').append($('<option>', { value: restaurant.id, text: restaurant.name }))
  })
  activities.forEach(function(activity) {
    $('#activity-choices').append($('<option>', { value: activity.id, text: activity.name }))
  })

  let idVal;
  let place, myType, tableBoi, hName;
  $('#options-panel button').on('click', function() {
    idVal =  $(this).prev().val();

    myType = $(this).prev().data('type');

    // we get the header name
    if (myType === 'hotel'){
      tableBoi = hotels
      hName = 'My Hotel'
    } else if (myType === 'restaurant') {
      tableBoi = restaurants
      hName = 'My Restaurants'
    } else {
      tableBoi = activities
      hName = 'My Activities'
    }
    // we get the place data
    place = tableBoi.filter((hotel) => {
      return hotel.id == idVal;
    })

    // insert data into next sibling of HEader name
    $(`#${myType}-list`).append(`<div class="itinerary-item"><span class="title">${place[0].name}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`)

    drawMarker(myType, place[0].place.location);

  })

})
