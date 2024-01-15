import React, {useEffect} from 'react';
import {validateAuthorization} from "@/features/protected-route/api";
import {useNavigate} from "react-router-dom";
import {ROUTES, Spin} from "@/shared";

interface Props {
  children: React.ReactElement
}
const ProtectedRoute:React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    validateAuthorization()
      .then((result) => {
        if (result) {
          setLoading(false)
        } else {
          console.log('redirected')
          navigate(ROUTES.LOGIN)
        }
      })
      .catch(() => {
        navigate(ROUTES.LOGIN)
      })
  }, [navigate]);

  return loading ? <Spin size={"large"} /> : props.children;
}
export default ProtectedRoute;
