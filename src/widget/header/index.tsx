import React from 'react';
import {Logout, HeaderUser} from "@/features";
import css from './header.module.css';

export const Header = () => {
  return (
    <div className={css.container}>
      <HeaderUser />
      <Logout />
    </div>
  )
};
