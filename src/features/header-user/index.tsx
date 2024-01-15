import React from 'react';
import {useMe, User} from "@/entities/user";
import {Spin} from "@/shared";

export const HeaderUser = () => {
  const [user, loading] = useMe();
  if (loading) return <Spin />
  if (user) {
    return <User email={user.name} id={user.id} />
  }
  return <span>'A place for your API\'s ad'</span>
};

