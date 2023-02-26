import { configureStore } from '@reduxjs/toolkit';

import centreNameReducer from './reducers/centreNameReducer';
import centreParamsReducer from './reducers/centreParamsReducer';

export const rtkStore = configureStore({
    reducer: {centreNameReducer, centreParamsReducer}
});

export type RootState = ReturnType<typeof rtkStore.getState>;
export type AppDispatch = typeof rtkStore.dispatch;