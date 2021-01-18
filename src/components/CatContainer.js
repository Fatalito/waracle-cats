import React from "react";

import {connect} from "react-redux";
import {addFavourite, unFavourite, addVote} from "../store/actions";

import Cat from "./Cat";

const CatContainer = (props) => <Cat {...props} />;

const mapDispatchToProps = {addFavourite, unFavourite, addVote};
export default connect(null, mapDispatchToProps)(CatContainer);
