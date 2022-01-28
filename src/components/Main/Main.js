import Topbar from "./Topbar";
import Content from "./Content";

const Main = () => {
  return (
    <main data-testid="main">
      <div className="container">
        <Topbar />
        <Content />
      </div>
    </main>
  );
};

export default Main;
