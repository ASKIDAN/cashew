import React from 'react';
import {getUser} from '@/shared/api/getUser';
import {User} from '@/shared';

export const useMe: () => [User | null, boolean, Error | null] = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const USER_ID = '4';
    getUser({ id: USER_ID })
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false))
  }, []);
  return [user, loading, error]
}
