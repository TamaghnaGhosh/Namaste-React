### 1.Reducer:

In Redux, a reducer is a pure function that takes in the current state of the
application and an action, and returns a new state.
Reducers are called whenever an action is dispatched to the store.

### 2.Dispatch:
In Redux, the dispatch method is used to update the state of the store.
The dispatch method is available on the store object.

### 3.Slice:
A "slice" is a collection of Redux reducer logic and actions for a
single feature in your app, typically defined together in a single file.

### 4.Selector: 
A selector is a pure function that takes a state object from the Redux store
and returns some information extracted from that state object.

### 5.explain createslice and the configuration it takes in redux ?
Ans: In Redux Toolkit, the createSlice method creates a slice of the redux-store.
It's a higher-order function that takes the following parameters: Initial state,
Reducer functions, Slice name.
