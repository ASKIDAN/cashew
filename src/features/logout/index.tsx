import React from 'react';
import {Button, ROUTES, TOKEN_KEY} from "@/shared";
import {useNavigate} from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate()
  const onClick = () => {
    localStorage.removeItem(TOKEN_KEY)
    navigate(ROUTES.LOGIN);
  };
  return <Button onClick={onClick} size="large" type="default">Logout</Button>
};
