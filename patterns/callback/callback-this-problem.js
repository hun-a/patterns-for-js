var Conference = require('.');

var checkInService = Conference.checkInService(Conference.checkInRecorder()),
    attendees = Conference.attendeeCollection(),
    counter = Conference.checkedInAttendeeCounter();

// Add the attendees to the collection
attendees.add(Conference.attendee('Huna', 'Kim'));
attendees.add(Conference.attendee('Sungeun', 'Park'));

// Check-in
attendees.iterate(checkInService.checkIn);

// Count the attendees who finished check-in
attendees.iterate(counter.countIfCheckedIn);

// TypeError: this.increment is not a function ... WTF?
// Because `this` reference the window or global object
console.log(counter.getCount());
