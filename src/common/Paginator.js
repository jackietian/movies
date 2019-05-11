import React, { Component } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./Paginator.scss";

class Paginator extends Component {
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
