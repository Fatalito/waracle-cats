import {Cats, Votes, Favourites} from "./constants";

export const fetchCatsSuccess = (data) => {
  return {
    type: Cats.fetchCatsSuccess,
    payload: data,
  };
};

export const fetchCats = () => {
  return {
    type: Cats.fetchCats,
  };
};

export const fetchCatsError = (data) => {
  return {
    type: Cats.fetchCatsError,
    payload: data,
  };
};

export const addFavourite = (data) => {
  return {
    type: Favourites.addFavourite,
    payload: data,
  };
};

export const addFavouriteSuccess = (data) => {
  return {
    type: Favourites.addFavouriteSuccess,
    payload: data,
  };
};

export const unFavourite = (data) => {
  return {
    type: Favourites.unFavourite,
    payload: data,
  };
};

export const unFavouriteSuccess = (data) => {
  return {
    type: Favourites.unFavouriteSuccess,
    payload: data,
  };
};

export const addVote = (id, value) => {
  return {
    type: Votes.castVote,
    payload: {id, value},
  };
};

export const addVoteSuccess = (data) => {
  return {
    type: Votes.castVoteSuccess,
    payload: data,
  };
};
