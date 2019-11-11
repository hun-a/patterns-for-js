var CallbackArrow = CallbackArrow || {};

CallbackArrow.rootFunction = function() {
  CallbackArrow.firstFunction(function(arg) {
    // First callback logic
    CallbackArrow.secondFunction(function(arg) {
      // Second callback logic
      CallbackArrow.thirdFunction(function(arg) {
        // Third callback logic
        CallbackArrow.fourthFunction(function(arg) {
          // Fourth callback logic
        });
      });
    });
  });
};

CallbackArrow.firstFunction = function(callback1) {
  callback1(arg);
};

CallbackArrow.secondFunction = function(callback2) {
  callback2(arg);
};

CallbackArrow.thirdFunction = function(callback3) {
  callback3(arg);
};

CallbackArrow.fourthFunction = function(callback4) {
  callback4(arg);
};
