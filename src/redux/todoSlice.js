import { createSlice } from "@reduxjs/toolkit";

//A slice gives us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve that data.

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id:1, title: 'todo1', completed: false},
        {id:2, title: 'todo2', completed: false},
        {id:3, title: 'todo3', completed: true},
    ],
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
            state.push(newTodo);
        }
    }
})

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer; 

//explained steps: 
/* 
The createSlice function will give us back some stuff and assign it to the todoSlice variable (line 3)

This is where we get our actions and reducers which we can export.

We need to pass some properties to this function so it gives us back the right things. We do this with an object.

First, we give the slice a name. We’re in the todo’s slice so we’ll call it todos. This is also what we’ll see in the Redux dev tools (line 4).

Next we add initial state. We’re going to add some dummy data for now. This can be empty, but we’re going to add stuff so we can see what’s going on (line 5)

Now we add the reducers. The reducer responds to the action, takes the current state, and creates new state based on the action payload. The first one we are adding is the addTodo reducer (line 13)

This is just a plain function. Redux passes in the state and action behind the scenes. The state is the current state of this slice, and the action contains the type and the payload.

So when we dispatch the addTodo action, this is the reducer that handles that action.

Within the reducer, this is where we want to perform the logic to update the state (line 14).

Since we’re adding a todo, the first thing we want to do is create a new todo object. This object is going to have the same properties that our other todos have. We’ll generate a new ID based on the date to make sure it's unique, take the title from the payload, and default completed to false.

Now we just push this to the state object. At this point, redux will take this new state and update the store

This is the first one we need, but we’ll add more reducers as we go through the tutorial

When we add a reducer object like this, the createSlice function creates actions based on the reducer names.

We use destructuring to get the actions and export them, so our components can access them.

So the todoSlice has created a bunch of actions for us based on our reducer names, and we just use destructuring to get the addTodo action and export it.

And we export the reducer so we can add it to our store.
*/