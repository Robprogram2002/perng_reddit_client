/* eslint-disable no-unused-vars */
import { createContext, FC, useReducer } from 'react';

interface SubTheme {
  baseColor: string;
  highlightColor: string;
  bodyBackground: string;
  bannerSize: string;
  postTitleColor: string;
  postBackground: string;
}

interface IAppContext {
  theme: SubTheme;
  setTheme: (theme: SubTheme) => void;
  changeBaseColor: (color: string) => void;
  changeHighlightColor: (color: string) => void;
  changeBodyBackground: (color: string) => void;
  resetTheme: () => void;
}

interface IContextAction {
  type: string;
  payload: any;
}

const initialState: IAppContext = {
  theme: {
    baseColor: '',
    highlightColor: '',
    bodyBackground: '',
    bannerSize: '',
    postTitleColor: '',
    postBackground: '',
  },
  setTheme: () => {},
  changeBaseColor: () => {},
  changeHighlightColor: () => {},
  changeBodyBackground: () => {},
  resetTheme: () => {},
};

export const subThemeContext = createContext(initialState);

const appContextReducer = (
  state: IAppContext['theme'],
  action: IContextAction
) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...(action.payload as SubTheme),
      };

    case 'SET_BASE_COLOR':
      return {
        ...state,
        baseColor: action.payload,
      };
    case 'SET_HIGHLIGHT_COLOR':
      return {
        ...state,
        highlightColor: action.payload,
      };
    case 'SET_BODY_BACKGROUND':
      return {
        ...state,
        bodyBackground: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const SubThemeProvider: FC<{ subSettings: any }> = ({
  children,
  subSettings,
}) => {
  const { id, __typename, ...initialTheme } = subSettings;
  const [subThemeState, dispatch] = useReducer(appContextReducer, initialTheme);

  const setTheme = (theme: SubTheme) =>
    dispatch({
      type: 'SET_THEME',
      payload: theme,
    });

  const resetTheme = () =>
    dispatch({
      type: 'SET_THEME',
      payload: initialTheme,
    });

  const changeBaseColor = (color: string) =>
    dispatch({
      type: 'SET_BASE_COLOR',
      payload: color,
    });

  const changeHighlightColor = (color: string) =>
    dispatch({
      type: 'SET_HIGHLIGHT_COLOR',
      payload: color,
    });

  const changeBodyBackground = (color: string) =>
    dispatch({
      type: 'SET_BODY_BACKGROUND',
      payload: color,
    });

  return (
    <subThemeContext.Provider
      value={{
        theme: subThemeState,
        setTheme,
        changeBaseColor,
        changeBodyBackground,
        changeHighlightColor,
        resetTheme,
      }}
    >
      {children}
    </subThemeContext.Provider>
  );
};

export default SubThemeProvider;
