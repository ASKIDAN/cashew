import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES, Spin, validateToken } from '@/shared'

interface Props {
  children: React.ReactElement
}
export const ProtectedRoute: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    validateToken()
      .then((result) => {
        if (result) {
          setLoading(false)
        } else {
          navigate(ROUTES.LOGIN)
        }
      })
      .catch(() => {
        navigate(ROUTES.LOGIN)
      })
  }, [navigate])

  return loading ? <Spin size={'large'} /> : props.children
}
