# What's this?

- Popular Design patterns for JavaScript!

# List of Patterns

## [Callback pattern](./patterns/callback/index.js#L37)

- Business logic
  - I develop the `Check-in` module for the biggest of a world conference.
  - The attendees should input their information by the function of `Conference.attendee()`.
  - All attendee's information should handle by `Conference.attendeeCollection.iterate()` and send to `checkInService`.
    - The `checkInService` is not my concern.
    - I have only concern to `iterate()` function.
  - The `iterate()` function should have scalability using a callback function.