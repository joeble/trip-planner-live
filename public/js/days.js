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

  let value;
  $('#options-panel button').on('click', function() {
    value = $(this).prev().val();
    console.log(value)
  })

  // function itenItem
})
