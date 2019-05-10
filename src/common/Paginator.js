import React, { Component } from "react";
import { connect } from "react-redux";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./Paginator.scss";

class Paginator extends Component {
  handleClickPrevpage = () => {};

  handleClickNextpage = () => {};

  render() {
    const {
      page: { totalElements, currentPage }
    } = this.props;
    return (
      <section className="paginator">
        <TiChevronLeftOutline
          className="icon-button"
          onClick={this.handleClickPrevpage}
        />
        <span className="paginator__info">
          <div>Page {currentPage + 1} </div>
          <div>{totalElements} results</div>
        </span>
        <TiChevronRightOutline
          className="icon-button"
          onClick={this.handleClickNextpage}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  page: state.movie.page
});

export default connect(
  mapStateToProps,
  null
)(Paginator);
