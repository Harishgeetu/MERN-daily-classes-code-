import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children, authenticated }) => {
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRouter;
