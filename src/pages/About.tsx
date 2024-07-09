import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div>
        <Link to="/about/about1">ABOUT 1</Link>
        <Link to="/about/about2">ABOUT 2</Link>
      </div>
    </div>
  );
};

export default About;
