// eslint-disable-next-line import/prefer-default-export
export const getBooksState = (store) => store.books

export const bookListSelector = (store) => getBooksState(store)?.books || []

export const bookListLoadingSelector = (store) => getBooksState(store)?.loading

export const bookListErrorSelector = (store) => getBooksState(store)?.error

export const getCounterState = (store) => store.counter.counter
