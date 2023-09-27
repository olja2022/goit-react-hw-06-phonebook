import { createSlice } from '@reduxjs/toolkit';

const phoneSlice = createSlice({
  name: 'phoneBook',

  initialState: {
    stateContacts: [],
  },

  reducers: {
    addInStateContact(state, action) {
      state.stateContacts.push(action.payload);
    },

    deleteInStateContact(state, action) {
      state.stateContacts = state.stateContacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addInStateContact, deleteInStateContact } = phoneSlice.actions;
export default phoneSlice.reducer;
