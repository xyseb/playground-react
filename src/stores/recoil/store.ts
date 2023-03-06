import { atom, atomFamily } from 'recoil';

export const loadingState = atom<boolean>({
    key: 'xLoadingState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
export const centreNameState = atom<string>({
    key: 'xCentreNameState', // unique ID (with respect to other atoms/selectors)
    default: undefined, // default value (aka initial value)
});
export const centreParamsState = atom<Array<Object>>({
    key: 'xCentreParamsState', // unique ID (with respect to other atoms/selectors)
    default: undefined, // default value (aka initial value)
});
  