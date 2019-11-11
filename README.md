# What's this?

- Popular Design patterns for JavaScript!

# How to run?

- Just type the below command to your cmd.

  ```
  $ npm i && npm run test
  ```

# List of Patterns

## Callback pattern

- [Business logic](./patterns/callback/index.js#L37)
  - I develop the `Check-in` module for the biggest of a world conference.
  - The attendees should input their information by the function of `Conference.attendee()`.
  - All attendee's information should handle by `Conference.attendeeCollection.iterate()` and send to `checkInService`.
    - The [`checkInService`](./patterns/callback/index.js#L51) could check-in the information of the attendee to the Database.
  - The `iterate()` function should have scalability using a callback function.

- [Test scenario](./patterns/callback/index.spec.js#L16)
  - Main purpose
    - The count of calling callback should be correct.
    - The correct argument should deliver to the callback when it called.
  - Details
    - The callback should never call when the collection is empty
    - The callback should call just once when the collection has one element
    - The callback should call once for each element