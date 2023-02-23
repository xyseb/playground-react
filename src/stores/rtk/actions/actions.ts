import { createAction } from "@reduxjs/toolkit";

const actions = {
    fetchCentreName: createAction('fetchCentreName'),
    updateCentreName: createAction('updateCentreName')
};

export default actions;