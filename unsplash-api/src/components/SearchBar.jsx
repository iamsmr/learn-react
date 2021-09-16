import { useState } from "react";

export default function SearchBar({ handelSubmit }) {
  const [term, setTerm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    handelSubmit(term);
  };
  return (
    <form className="searchbar" onSubmit={onFormSubmit}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="Type to search...,"
        className="search_field"
      />
    </form>
  );
}
