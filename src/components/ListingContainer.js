import React, {useEffect} from "react";

import {fetchCats} from "../store/actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import Listing from "./Listing";
import {Alert} from "@material-ui/lab";

const ListingContainer = ({fetchCats, cats, error}) => {
  useEffect(() => {
    fetchCats();
  }, [fetchCats]);
  if (error) return <Alert severity="error">{error}</Alert>;
  return <Listing cats={cats} />;
};

const structuredSelector = createStructuredSelector({
  cats: (state) => state.cats,
  error: (state) => state.error,
});

const mapDispatchToProps = {fetchCats};
export default connect(
  structuredSelector,
  mapDispatchToProps
)(ListingContainer);
