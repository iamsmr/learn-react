import { useState } from "react";

const SearchBar = ({ handelSubmit }) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    handelSubmit(term);
  };
  return (
    <form onSubmit={onSubmit} className="search-bar">
      <input
        value={term}
        placeholder="Search..."
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        className="search-bar__field"
      />
    </form>
  );
};

export default SearchBar;
