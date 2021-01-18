import {call, put, takeLatest, all} from "redux-saga/effects";
import {Cats, Favourites, Votes} from "./constants";
import {
  listImages,
  listFavourites,
  listVotes,
  addFavourite,
  unFavourite,
  addVote,
} from "../api";
import {
  fetchCatsSuccess,
  fetchCatsError,
  addFavouriteSuccess,
  unFavouriteSuccess,
  addVoteSuccess,
} from "./actions";

function* getCats() {
  yield takeLatest(Cats.fetchCats, getCatsFromAPI);
}

function* getCatsFromAPI(action) {
  try {
    const transform = (cats, favourites, votes) =>
      cats.map((c) => ({
        ...c,
        favouriteId: favourites.find((f) => f.image_id === c.id)?.id,
        score: votes
          .filter((v) => c.id === v.sub_id)
          .reduce((acc, v) => acc + (v.value ? 1 : -1), 0),
      }));

    const cats = yield call(listImages, {response: action.payload});
    const favourites = yield call(listFavourites, {
      response: action.payload,
    });
    const votes = yield call(listVotes, {
      response: action.payload,
    });

    const catsWithfavouriteAndVotes = transform(cats, favourites, votes);

    yield put(fetchCatsSuccess(catsWithfavouriteAndVotes));
  } catch (e) {
    yield put(fetchCatsError(e));
  }
}

function* addFavouriteSaga() {
  yield takeLatest(Favourites.addFavourite, addFavouriteWithAPI);
}

function* addFavouriteWithAPI(action) {
  try {
    const fav = yield call(addFavourite, action.payload);
    yield put(addFavouriteSuccess({id: action.payload, favouriteId: fav.id}));
  } catch (e) {
    yield put(fetchCatsError(e));
  }
}

function* unFavouriteSaga() {
  yield takeLatest(Favourites.unFavourite, unFavouriteWithAPI);
}

function* unFavouriteWithAPI(action) {
  try {
    yield call(unFavourite, action.payload);
    yield put(unFavouriteSuccess({favouriteId: action.payload}));
  } catch (e) {
    yield put(fetchCatsError(e));
  }
}

function* addVoteSaga() {
  yield takeLatest(Votes.castVote, castVoteWithAPI);
}

function* castVoteWithAPI(action) {
  try {
    yield call(addVote, action.payload.id, action.payload.value);
    yield put(addVoteSuccess(action.payload));
  } catch (e) {
    yield put(fetchCatsError(e));
  }
}

export default function* rootSaga() {
  yield all([getCats(), addFavouriteSaga(), unFavouriteSaga(), addVoteSaga()]);
}
