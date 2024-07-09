import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const auth = true;

  if (!auth) {
    <Navigate to="login" />;
  }

  return children;
};

export default ProtectedRoute;
