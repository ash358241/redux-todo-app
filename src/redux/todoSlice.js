import { createSlice } from "@reduxjs/toolkit";

//A slice gives us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve that data.

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id:1, title: 'todo1', completed: false},
        {id:2, title: 'todo2', completed: false},
        {id:3, title: 'todo3', completed: false},
    ],
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
            state.push(newTodo);
        }, 
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                todo => todo.id === action.payload.id
            )
            state[index].completed = action.payload.completed
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer; 

//explained steps: 
/* 
The createSlice function will give us back some stuff and assign it to the todoSlice variable 

This is where we get our actions and reducers which we can export.

We need to pass some properties to this function so it gives us back the right things. We do this with an object.

First, we give the slice a name. We’re in the todo’s slice so we’ll call it todos. This is also what we’ll see in the Redux dev tools.

Next we add initial state. We’re going to add some dummy data for now. This can be empty, but we’re going to add stuff so we can see what’s going on 

Now we add the reducers. The reducer responds to the action, takes the current state, and creates new state based on the action payload. The first one we are adding is the addTodo reducer 

This is just a plain function. Redux passes in the state and action behind the scenes. The state is the current state of this slice, and the action contains the type and the payload.

So when we dispatch the addTodo action, this is the reducer that handles that action.

Within the reducer, this is where we want to perform the logic to update the state.

Since we’re adding a todo, the first thing we want to do is create a new todo object. This object is going to have the same properties that our other todos have. We’ll generate a new ID based on the date to make sure it's unique, take the title from the payload, and default completed to false.

Now we just push this to the state object. At this point, redux will take this new state and update the store

This is the first one we need, but we’ll add more reducers as we go through the tutorial

When we add a reducer object like this, the createSlice function creates actions based on the reducer names.

We use destructuring to get the actions and export them, so our components can access them.

So the todoSlice has created a bunch of actions for us based on our reducer names, and we just use destructuring to get the addTodo action and export it.

And we export the reducer so we can add it to our store.
*/



/* 
Mark a Todo as Complete --> 

explained:
When our component dispatches the toggleComplete action, this reducer will handle that action.

Now that we have our reducer we need to implement the logic to update the state.

So remember that each todo in the list has an ID. Our component will pass this ID as part of the action payload and we’ll use the ID to determine which todo in the array we need to update.

We’ll use the ID to find the index of the todo in the array, so if the ID is 1, it will return index 0.

Now that we know the index, we can update the “completed” property for the given todo.

We’ll set the complete property for that todo to be whatever it is in the payload.

Lastly we export the action so that the components can dispatch it. Remember that the createSlice function automatically creates actions based on our reducer names, so since we have a toggleComplete reducer, that means we have a toggleComplete action.
*/