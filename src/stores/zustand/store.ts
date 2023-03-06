import create from "zustand";

interface ApplicationState {
  name?: string;
  params?: Array<Object>;
//  getName: () => string;
//  getParams: () => Array<Object>;
}

let nameRequest: Promise<{ names: string }>;
let paramsRequest: Promise<{ names: Array<Object> }>;

export const useApplicationState = create<ApplicationState>((set, get) => ({
  name: undefined,
  params: undefined,
/*  getName: async () => {
    const response = await fetch("http://localhost:8080/centre").then(async response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    })
    .then(data => {return data.name})
    .catch(error => console.log(error));
    set(state) => ({name: response.name})}
  },
  getName: async () => {

  },*/
}));
