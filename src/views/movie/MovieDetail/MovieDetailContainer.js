import { connect } from "react-redux";
import MovieDetail from "./MovieDetail";

const mapStateToProps = state => ({
  currentMovie: state.movie.currentMovie
});

export default connect(mapStateToProps)(MovieDetail);
