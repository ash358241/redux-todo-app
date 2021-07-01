import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = useSelector(state => state.todos);
	
	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;


/* 
Display the Todo List --> 

Explained: 
In our TodoList component we want to take the TODO’s from Redux, as opposed to using the dummy list

To do this we use what’s called the useSelector hook. 

The useSelector hook accepts a function, and returns us the data based on that function.

So we’ll pass in our function – in this case we’ll do an arrow function. This accepts the state which is passed in by Redux. In this case, we want to do state.todos to get all the todos.

Now this is going to go to the store, pick out all the todos from state, and assign this to the todos variable which we defined ourselves

If we try this, you can see that the todos are now being pulled from our todosSlice!

The state value that gets passed in to the useSelector hook function is the entire state tree that is stored in Redux.
*/
