import { useParams, useNavigate } from "react-router-dom";

const AboutInfo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <div>
      About sobre {params.slug}
      <button onClick={handleNavigate}>Voltar</button>
      <button onClick={handleNavigateHome}>Home</button>
    </div>
  );
};

export default AboutInfo;
