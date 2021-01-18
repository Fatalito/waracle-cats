import {Cats, Favourites, Votes} from "./constants.js";

export const initialState = {cats: []};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Cats.fetchCats:
      return initialState;
    case Cats.fetchCatsSuccess:
      return {cats: [...action.payload]};
    case Cats.fetchCatsError:
      return {...state, error: action.payload.message};
    case Favourites.addFavouriteSuccess:
      const favouriteCat = state.cats.findIndex(
        (c) => c.id === action.payload.id
      );

      return {
        cats: [
          ...state.cats.slice(0, favouriteCat),
          {
            ...state.cats[favouriteCat],
            favouriteId: action.payload.favouriteId,
          },
          ...state.cats.slice(favouriteCat + 1, state.cats.length),
        ],
      };
    case Favourites.unFavouriteSuccess:
      const unFavouriteCat = state.cats.findIndex(
        (c) => c.favouriteId === action.payload.favouriteId
      );

      return {
        cats: [
          ...state.cats.slice(0, unFavouriteCat),
          {
            ...state.cats[unFavouriteCat],
            favouriteId: null,
          },
          ...state.cats.slice(unFavouriteCat + 1, state.cats.length),
        ],
      };
    case Votes.castVoteSuccess:
      const votedCat = state.cats.findIndex((c) => c.id === action.payload.id);

      return {
        cats: [
          ...state.cats.slice(0, votedCat),
          {
            ...state.cats[votedCat],
            score: state.cats[votedCat].score + (action.payload.value ? 1 : -1),
          },
          ...state.cats.slice(votedCat + 1, state.cats.length),
        ],
      };
    default:
      return state;
  }
};
