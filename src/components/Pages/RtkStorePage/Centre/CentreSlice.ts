import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICentre
{
    name?: string;
    params?: {};
};


const initialState: ICentre = {
  name: undefined,
  params: undefined
}

export const centreSlice = createSlice({
  name: 'centre',
  initialState,
  reducers: {
    getNom: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   //const loadCentreName = async () => {
    //   //  await fetch('http://localhost:8080/centres')
    //     fetch('http://localhost:8080/centres')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw Error(response.statusText);
    //         }
    //         return response.json();
    //     })
    //     .then(data => state.name = data.name)
    //     .catch(error => console.log(error));
    //     // console.log('centre from getNom');
    //     // console.log(centre);
    //     return state;
    //   //}
        loadCentreName(state);
    },
    getParams: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        //const loadCentreName = async () => {
        //  await fetch('http://localhost:8080/centres')
          fetch('http://localhost:8080/params')
          .then(response => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              return response.json();
          })
          .then(data => state.params = state.params)
          .catch(error => console.log(error));
          // console.log('centre from getNom');
          // console.log(centre);
          return state;
          //}
      }
    },
})

const loadCentreName = async (state: any) => {
    await fetch('http://localhost:8080/centres')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => state.name = data.name)
    .catch(error => console.log(error));
      // console.log('centre from getNom');
      // console.log(centre);
}


// Action creators are generated for each case reducer function
export const { getNom, getParams } = centreSlice.actions

// export const epics = {
//     asyncGetNom: (action$, state$, action) =>
//       of([]).pipe(
//         delay(1000),
//         map(() => getNom())
//       )
//   };

export default centreSlice.reducer


// import {
//   createSlice,
//   createSelector,
//   createAsyncThunk,
//   createEntityAdapter
// } from '@reduxjs/toolkit'
// import { client } from '../../../../stores/api/client'
// //import { StatusFilters } from '../filters/filtersSlice'

// const centreAdapter = createEntityAdapter()

// export interface ICentre
// {
//     name?: string;
//     params?: {};
// };

// const initialState: ICentre = centreAdapter.getInitialState<ICentre>({
//   name: undefined,
//   params: undefined
// })





// // Thunk functions
// export const fetchNomCentre = createAsyncThunk('centre/fetchName', async () => {
//   const response = await client.get('/centre')
//   return response.name
// })
// export const fetchParamsCentre = createAsyncThunk('centre/fetchName', async () => {
//   const response = await client.get('/centre')
//   return response.name
// })

// export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async text => {
//   const initialTodo = { text }
//   const response = await client.post('/fakeApi/todos', { todo: initialTodo })
//   return response.todo
// })

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     todoToggled(state, action) {
//       const todoId = action.payload
//       const todo = state.entities[todoId]
//       todo.completed = !todo.completed
//     },
//     todoColorSelected: {
//       reducer(state, action) {
//         const { color, todoId } = action.payload
//         state.entities[todoId].color = color
//       },
//       prepare(todoId, color) {
//         return {
//           payload: { todoId, color }
//         }
//       }
//     },
//     todoDeleted: todosAdapter.removeOne,
//     allTodosCompleted(state, action) {
//       Object.values(state.entities).forEach(todo => {
//         todo.completed = true
//       })
//     },
//     completedTodosCleared(state, action) {
//       const completedIds = Object.values(state.entities)
//         .filter(todo => todo.completed)
//         .map(todo => todo.id)
//       todosAdapter.removeMany(state, completedIds)
//     }
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTodos.pending, (state, action) => {
//         state.status = 'loading'
//       })
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         todosAdapter.setAll(state, action.payload)
//         state.status = 'idle'
//       })
//       .addCase(saveNewTodo.fulfilled, todosAdapter.addOne)
//   }
// })

// export const {
//   allTodosCompleted,
//   completedTodosCleared,
//   todoAdded,
//   todoColorSelected,
//   todoDeleted,
//   todoToggled
// } = todosSlice.actions

// export default todosSlice.reducer

// export const { selectAll: selectTodos, selectById: selectTodoById } =
//   todosAdapter.getSelectors(state => state.todos)

// export const selectTodoIds = createSelector(
//   // First, pass one or more "input selector" functions:
//   selectTodos,
//   // Then, an "output selector" that receives all the input results as arguments
//   // and returns a final result value
//   todos => todos.map(todo => todo.id)
// )

// export const selectFilteredTodos = createSelector(
//   // First input selector: all todos
//   selectTodos,
//   // Second input selector: all filter values
//   state => state.filters,
//   // Output selector: receives both values
//   (todos, filters) => {
//     const { status, colors } = filters
//     const showAllCompletions = status === StatusFilters.All
//     if (showAllCompletions && colors.length === 0) {
//       return todos
//     }

//     const completedStatus = status === StatusFilters.Completed
//     // Return either active or completed todos based on filter
//     return todos.filter(todo => {
//       const statusMatches =
//         showAllCompletions || todo.completed === completedStatus
//       const colorMatches = colors.length === 0 || colors.includes(todo.color)
//       return statusMatches && colorMatches
//     })
//   }
// )

// export const selectFilteredTodoIds = createSelector(
//   // Pass our other memoized selector as an input
//   selectFilteredTodos,
//   // And derive data in the output selector
//   filteredTodos => filteredTodos.map(todo => todo.id)
// )