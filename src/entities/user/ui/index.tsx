import React from 'react'

export interface UserProps {
  email: string
  id: string
}
export const User: React.FC<UserProps> = (props) => (
  <span>{`${props.id}: ${props.email}`}</span>
)
