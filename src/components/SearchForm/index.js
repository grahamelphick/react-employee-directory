import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder=""
          id="searchbox"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
          name="sort"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
