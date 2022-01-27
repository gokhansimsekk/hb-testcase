import searchIcon from "assets/images/search-icon.svg";

const Search = () => {
  return (
    <div className="header__search">
      <img src={searchIcon} alt="arama ikonu" />
      <input
        type="text"
        className="header__search-input"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
      />
    </div>
  );
};

export default Search;
