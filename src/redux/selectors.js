export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
export const getIsLoading = (state) => state.contacts.loading;
export const getError = (state) => state.contacts.error;
