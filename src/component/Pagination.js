import React from "react";
import ReactPaginate from "react-paginate";
import "../globalcss/global.css";

export default function Pagination(props) {
  return (
    <ReactPaginate
      nextLabel="next"
      onPageChange={props.handleClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={props.pageCount}
      previousLabel="previous"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
}
