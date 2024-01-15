import React from 'react'

export type UserProps = {
  email: string,
  id: string,
}
export const User:React.FC<UserProps> = (props) => (
  <span>{`${props.id}: ${props.email}`}</span>
);
