var CallbackArrow = CallbackArrow || {};

CallbackArrow.rootFunction = function() {
  CallbackArrow.firstFunction(CallbackArrow.firstCallback);
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

CallbackArrow.firstCallback = function() {
  // First callback logic
  CallbackArrow.secondFunction(CallbackArrow.secondCallback);
};

CallbackArrow.secondCallback = function() {
  // Second callback logic
  CallbackArrow.thirdFunction(CallbackArrow.thirdCallback);
};

CallbackArrow.thirdCallback = function() {
  // Third callback logic
  CallbackArrow.fourthFunction(CallbackArrow.fourthCallback);
};

CallbackArrow.fourthCallback = function() {
  // Fourth callback logic
};
