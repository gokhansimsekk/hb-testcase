import sortOptions from "mocks/sort-options";

const Sort = () => {
  return (
    <select className="main-top__select" data-testid="sort-select">
      <option value="">Sıralama</option>
      {sortOptions.map((item) => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default Sort;
