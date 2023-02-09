import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICentre
{
    Nom?: string;
    Params?: {};
};


const initialState: ICentre = {
  Nom: undefined,
  Params: undefined
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
    //   //  await fetch('http://localhost:8080/centre')
    //     fetch('http://localhost:8080/centre')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw Error(response.statusText);
    //         }
    //         return response.json();
    //     })
    //     .then(data => state.Nom = data.name)
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
        //  await fetch('http://localhost:8080/centre')
          fetch('http://localhost:8080/params')
          .then(response => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              return response.json();
          })
          .then(data => state.Params = state.Params)
          .catch(error => console.log(error));
          // console.log('centre from getNom');
          // console.log(centre);
          return state;
          //}
      }
    },
})

const loadCentreName = async (state: any) => {
    await fetch('http://localhost:8080/centre')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => state.Nom = data.name)
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
