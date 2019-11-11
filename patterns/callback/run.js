var Conference = require('./');

var attendees = Conference.attendeeCollection();
/*
It is so simple to define the callback function using anonymous function.
But it is impossible to debug the anonymous function.

attendees.iterate(function(attendee) {
  attendee.checkIn();
});
*/
attendees.iterate(function doCheckIn(attendee) {
  attendee.checkIn();
});
