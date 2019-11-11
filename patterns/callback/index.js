var Conference = Conference || {};

Conference.attendee = function(firstName, lastName) {
  var checkedIn = false, first = firstName || 'None', last = lastName || 'None';

  return {
    getFullName: function() {
      return first + ' ' + last;
    },
    isCheckedIn: function() {
      return checkedIn;
    },
    checkIn: function() {
      checkedIn = true;
    }
  };
};

Conference.attendeeCollection = function() {
  var attendees = [];

  return {
    contains: function(attendee) {
      return attendees.indexOf(attendee) > -1;
    },
    add: function(attendee) {
      if (!this.contains(attendee)) {
        attendees.push(attendee);
      }
    },
    remove: function(attendee) {
      var index = attendees.indexOf(attendee);
      if (index > -1) {
        attendees.splice(index, 1);
      }
    },
    iterate: function(callback) {
      // TODO
    }
  }
};

module.exports = Conference;
