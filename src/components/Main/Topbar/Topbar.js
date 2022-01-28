import Title from "./Title";
import Sort from "./Sort";

const Topbar = () => {
  return (
    <div className="main-top" data-testid="main-top">
      <Title />
      <Sort />
    </div>
  );
};

export default Topbar;
