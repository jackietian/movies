import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./Paginator.scss";

class Paginator extends Component {
  static propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    size: PropTypes.number,
    totalElements: PropTypes.number,
    onChangePage: PropTypes.func,
  }

  isPrevDisabled = () => {
    const { currentPage } = this.props;
    return currentPage === 0;
  };

  isNextDisabled = () => {
    const { currentPage, totalPages } = this.props;
    return currentPage + 1 === totalPages;
  };

  handleClickPrevpage = () => {
    const { currentPage, onChangePage } = this.props;
    onChangePage(currentPage - 1);
  };

  handleClickNextpage = () => {
    const { currentPage, onChangePage } = this.props;
    onChangePage(currentPage + 1);
  };

  render() {
    const { totalElements, currentPage } = this.props;
    return (
      <section className="paginator">
        <button
          className="icon-button"
          data-test="prev-btn"
          onClick={this.handleClickPrevpage}
          disabled={this.isPrevDisabled()}
        >
          <TiChevronLeftOutline />
        </button>
        <span className="paginator__info">
          <div>Page {currentPage + 1} </div>
          <div>{totalElements} results</div>
        </span>
        <button
          className="icon-button"
          data-test="next-btn"
          onClick={this.handleClickNextpage}
          disabled={this.isNextDisabled()}
        >
          <TiChevronRightOutline />
        </button>
      </section>
    );
  }
}

export default Paginator;
