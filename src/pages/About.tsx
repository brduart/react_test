import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setOrder = (order: "asc" | "desc") => {
    searchParams.set("order", order);
    setSearchParams(searchParams);
  };

  return (
    <div>
      Filter: {searchParams.get("filter")}
      Order: {searchParams.get("order")}
      <hr />
      <button onClick={() => setOrder("asc")}>ASC</button>~
      <button onClick={() => setOrder("desc")}>DESC</button>
      <div>
        <Link to="/about/about1">ABOUT 1</Link>
        <Link to="/about/about2">ABOUT 2</Link>
      </div>
    </div>
  );
};

export default About;
