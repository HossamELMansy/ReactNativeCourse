import { EMAIL_CHANGED } from "./types";

// Action Creator
export const emailChanged = email => ({
        type: EMAIL_CHANGED,
        payload: email
});
