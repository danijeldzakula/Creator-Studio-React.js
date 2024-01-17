import { createContext, useContext, useMemo, useState, useEffect, useCallback } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [widgets, setWidgets] = useState(() => {
    if (typeof window !== 'undefined') {
      const widgets = JSON.parse(window.localStorage.getItem('widgets'));

      if (widgets !== null) {
        return widgets || [];
      }
    }

    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('widgets', JSON.stringify(widgets));
    }
  }, [widgets]);

  const handleWidgets = useCallback(({ action }) => {
    switch (action.type) {
      case 'add':
        const newWidgets = {
          _id: action.payload._id,
          name: action.payload.name,
        };

        setWidgets((prev) => {
          if (!prev.some(({ _id }) => _id === action.payload._id)) {
            return [...prev, newWidgets];
          }

          return prev;
        });
        break;
      case 'update':
        console.log('update');
        break;
      case 'remove':
        setWidgets((prev) => {
          const removeWidget = prev.filter(({ _id }) => _id !== action.payload._id);

          return removeWidget;
        });
        break;
      default:
        console.warn('Default of handleWidgets function!');
    }
  }, []);

  const [toggle, setToggle] = useState(false);
  const handleToggle = useCallback((bool) => {
    setToggle(bool);
  }, []);

  const value = useMemo(() => {
    return {
      loggedIn,
      setLoggedIn,
      widgets,
      handleWidgets,
      toggle,
      handleToggle,
    };
  }, [loggedIn, setLoggedIn, widgets, handleWidgets, toggle, handleToggle]);

  return <AppContext.Provider value={value} children={children} />;
};

export const useApp = () => {
  return useContext(AppContext);
};
