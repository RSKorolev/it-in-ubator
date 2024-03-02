import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Articl 1
      <Rating value={3} />
      <Accordion title={"Меню"} />
      <Accordion title={"Подменю"} />
      Articl 2
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
    </div>
  );
}

export function PageTitle(props: any) {
  return <h1>{props.title}</h1>;
}
export default App;
