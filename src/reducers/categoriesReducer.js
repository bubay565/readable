import { FETCH_CATEGORIES, DISPLAY_CATEGORIES } from '../actions/types'

function categoriesReducer(
  state = {
    categories: [],
    isLoading: false
  }, action
){
  switch(action.type){
    case FETCH_CATEGORIES:
      return {
        ...state,
        isLoading: true
      }

    case DISPLAY_CATEGORIES:
      return {
          ...state,
          isLoading: false,
          categories: action.categories
      }

    default:
      return state
  }
}

export default categoriesReducer
