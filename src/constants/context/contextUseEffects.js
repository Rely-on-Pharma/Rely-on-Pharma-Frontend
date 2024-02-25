// contextEffects.js
import { useEffect } from 'react';

const useAuthEffect = (storedUser, dispatch) => {
  useEffect(() => {
    if (storedUser?.user) {
      dispatch({ type: 'LOGIN', payload: { user: JSON.parse(storedUser.user) } });
    }
  }, [storedUser?.user ]);
};

const useLocalStorageEffect = (user, dispatch) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure code is running in a browser environment
      const storedUser = localStorage.getItem('user');
      if(storedUser)
        localStorage.setItem('user', JSON.stringify(storedUser));
    }
  }, [user]);
};

const useCartUpdatedEffect = (cartUpdated, dispatch) => {
  useEffect(() => {
    if (cartUpdated) {
      alert('Cart Updated!');
      dispatch({ type: 'RESET_CART_UPDATED' });
    }
  }, [cartUpdated]);
};

export { useAuthEffect, useLocalStorageEffect, useCartUpdatedEffect };
