const inicialState = {
  sortBy: 'popular',
  category: 0,
}

const filters = (state = inicialState, action) => {
  if (action.type === 'SET_SORT_BY')
    return {
      ...state,
      sortBy: action.payload,
    };
  return state;
}

export default filters;