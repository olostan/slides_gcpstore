// Get a reference to the database service
var database = firebase.database();

// write
firebase.database().ref('events/' +eventId).set({
    name: 'DevFest Ukraine 2017',
    participants: 1382,
    location: 'Lviv'
});

// read
firebase.database().ref('events/' + eventId).once('value')
  .then(function(snapshot) {
    var event = snapshot.val();
  // event.name === 'DevFest Ukraine 2017'
});