import Title from "./Title";
import Sort from "./Sort";

const Topbar = () => {
  return (
    <div className="main-top" data-testid="main-top">
      <div className="container">
        <Title />
        <Sort />
      </div>
    </div>
  );
};

export default Topbar;
