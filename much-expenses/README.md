# Comments on the challenge

This is a pretty straightforward exercise, which is why I used the opportunity to sue some libraries that I'm not that experienced with, namely `xState`.

`xState` is a library for managing state via `Finite State Machines`. I've recently attended a workshop about it and thought it would be interesting to model React components and FSM that act as `Actors`, akin to the Actor model seen in `Erlang` for example.

Implementing this actor model, and thinking about how different components communicate with each other was perhaps the toughest part of this project. 

I resolved to pass a callback as a prop to child components so they can send events to the parent components. This allows for each component to have its own state machine that does not need to be aware of the parent's state machine. In turn, this allowed me to use `recompose` to abstract the effects of the FSM to Higher Order Component. 
In this manner, every component that requires a state machine only needs the definition of the states, and its respective actions, so it becomes very easy to add functionality, while preventing bugs creeping in due to the nature of a FSM. I think it overall worked very well, even if there are some rough edges. Particularly, testing becomes less that ideal.

As for styling, I used `styled-components` which wraps React components into a HoC with the styles applied, making into perfect to use in tandem with `recompose`. 


This all means my components can just focus on getting some props and render the correct bit of HTML. Everything else is abstracted away into reusable bits. I could go further and start creating factories that produces reusable parts of state machines. That would be the next step in a larger project, but I thought that overkill for this simple one.


I didn't have much free time to devote to this. In fact there was a whole week where I didn't even pick it up. But with the architecture I chose, and the state machines, it was very easy to understand what I'd done before. I'm quite happy with that.
Overall I'd say I did this in a grand total of 10-12h. Most of the time, I would say, was spent on styling, getting everything perfect.



# How it works

When opening the app, it will automatically fetch all the expenses.

You can filter the items by writing on the top search bar. It will try and match based on the `user name`, `merchant` and `comment`.

On the right side of each item you can choose to upload a receipt. This will then show in the gallery on the bottom of the item - the dark bar. You can click on it to open.

Clicking on the comment will open a `textarea` where it can be edited.

At any point something gets saved and sent to the server, the whole app refreshes. Ideally, only the item in need of updating would request the new data, but unfortunately, there was no API endpoint for that.
Also, please note that the I added a `timeout` to delay the `POST` request while updating an item, just so it's easier to see that state, with the active spinner.


# How to run

Simply run 

```
yarn start
```

or

```
npm start
```

*NOTE*: I changed the port of the API to `3030`, just so the react app runs on `3000`, otherwise I would have needed to do a lot of messing about with the `create-react-app` settings. This was quicker.