const Conference = require('./');

describe('Conference.attendeeCollection', function() {
  describe('contains(attendee)', function() {
    // Suppose this test will be pass.
  });

  describe('add(attendee)', function() {
    // Suppose this test will be pass.
  });

  describe('remove(attendee)', function() {
    // Suppose this test will be pass.
  });

  describe('iterate(callback)', function() {
    var collection, callbackSpy;

    // Helper function
    function addAttendeesToCollection(attendeeArray) {
      attendeeArray.forEach(function(attendee) {
        collection.add(attendee);
      });
    }

    function verifyCallbackWasExecutedForEachAttendee(attendeeArray) {
      // Check if the spy is called once for each element

      expect(callbackSpy.mock.calls.length).toBe(attendeeArray.length);

      // Check the first argument of attendee is delivered from the spy on each call
      var allCalls = callbackSpy.mock.calls;
      for (var i = 0; i < allCalls.length; i++) {
        expect(allCalls[i][0]).toBe(attendeeArray[i]);
      }
    }

    beforeEach(function() {
      collection = Conference.attendeeCollection();
      callbackSpy = jest.fn();
    });

    it('should never call when the collection is empty', function() {
      collection.iterate(callbackSpy);
      expect(callbackSpy).not.toHaveBeenCalled();
    });

    it('should call the callback just once when the collection has one element', function() {
      var attendees = [
        Conference.attendee('Huna', 'Kim')
      ];
      addAttendeesToCollection(attendees);

      collection.iterate(callbackSpy);

      verifyCallbackWasExecutedForEachAttendee(attendees);
    });

    it('should call the callback once for each element', function() {
      var attendees = [
        Conference.attendee('Huna', 'Kim'),
        Conference.attendee('Haeun', 'Kim'),
        Conference.attendee('Hajun', 'Kim')
      ];

      addAttendeesToCollection(attendees);

      collection.iterate(callbackSpy);

      verifyCallbackWasExecutedForEachAttendee(attendees);
    });
  });

  describe('Conference.checkInService', function() {
    var checkInService, checkInRecorder, attendee;

    beforeEach(function() {
      checkInRecorder = Conference.checkInRecorder();
      jest.spyOn(checkInRecorder, 'recordCheckIn');

      checkInService = Conference.checkInService(checkInRecorder);
      attendee = Conference.attendee('Huna', 'Kim');
    });

    describe('CheckInService(attendee)', function() {
      it('should process the attendee to the checked-in status', function() {
        checkInService.checkIn(attendee);
        expect(attendee.isCheckedIn()).toBe(true);
      });

      it('should register the check-in', function() {
        checkInService.checkIn(attendee);
        expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
      });
    });
  });
});