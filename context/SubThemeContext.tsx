/* eslint-disable no-unused-vars */
import { ImageObject, ImageColor } from 'types/ImageObject';
import { createContext, FC, useReducer } from 'react';
import { Size } from 'types/BannerSizes';

interface SubTheme {
  profile: ImageObject | null;
  banner: ImageObject | null;
  title: string | null;
  baseColor: string;
  highlightColor: string;
  bodyBackground: ImageColor;
  bannerSize: Size;
  postTitleColor: string;
  postBackground: ImageColor;
}

interface IAppContext {
  theme: SubTheme;
  setTheme: (theme: SubTheme) => void;
  changeBaseColor: (color: string) => void;
  changeHighlightColor: (color: string) => void;
  changeBodyBackground: (prop: ImageColor) => void;
  changeProfileImage: (prop: ImageObject) => void;
  changeTitle: (text: string) => void;
  changeBannerSize: (prop: Size) => void;
  changeBannerImage: (text: ImageObject) => void;
  changePostTitleColor: (color: string) => void;
  changePostBackground: (prop: ImageColor) => void;
  resetTheme: () => void;
}

interface IContextAction {
  type: string;
  payload: any;
}

const initialState: IAppContext = {
  theme: {
    banner: null,
    profile: null,
    title: '',
    baseColor: '',
    highlightColor: '',
    bodyBackground: {
      type: 'color',
      value: '',
    },
    bannerSize: Size.Small,
    postTitleColor: '',
    postBackground: {
      type: 'color',
      value: '',
    },
  },
  setTheme: () => {},
  changeBaseColor: () => {},
  changeHighlightColor: () => {},
  changeBodyBackground: () => {},
  changeProfileImage: () => {},
  changeTitle: () => {},
  changeBannerSize: () => {},
  changeBannerImage: () => {},
  changePostTitleColor: () => {},
  changePostBackground: () => {},
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

    case 'SET_IMAGE_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };

    case 'SET_IMAGE_BANNER':
      return {
        ...state,
        banner: action.payload,
      };

    case 'SET_BANNER_SIZE':
      return {
        ...state,
        bannerSize: action.payload,
      };

    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      };

    case 'SET_POST_TITLE_COLOR':
      return {
        ...state,
        postTitleColor: action.payload,
      };

    case 'SET_POST_BACKGROUND':
      return {
        ...state,
        postBackground: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const SubThemeProvider: FC<{ subResponse: any }> = ({
  children,
  subResponse,
}) => {
  const { id, __typename, ...initialTheme } = subResponse.Sub.sub.settings;
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

  const changeBodyBackground = (payload: ImageColor) =>
    dispatch({
      type: 'SET_BODY_BACKGROUND',
      payload,
    });

  const changeProfileImage = (payload: ImageObject | null) =>
    dispatch({
      type: 'SET_IMAGE_PROFILE',
      payload,
    });

  const changeBannerImage = (payload: ImageObject | null) =>
    dispatch({
      type: 'SET_IMAGE_BANNER',
      payload,
    });

  const changeBannerSize = (size: Size) =>
    dispatch({
      type: 'SET_BANNER_SIZE',
      payload: size,
    });

  const changeTitle = (text: string | null) =>
    dispatch({ type: 'SET_TITLE', payload: text });

  const changePostTitleColor = (color: string) =>
    dispatch({ type: 'SET_POST_TITLE_COLOR', payload: color });

  const changePostBackground = (payload: ImageColor) =>
    dispatch({ type: 'SET_POST_BACKGROUND', payload });

  return (
    <subThemeContext.Provider
      value={{
        theme: subThemeState,
        setTheme,
        changeBannerSize,
        changeBannerImage,
        changeBaseColor,
        changeHighlightColor,
        changeProfileImage,
        changeBodyBackground,
        changeTitle,
        changePostTitleColor,
        changePostBackground,
        resetTheme,
      }}
    >
      {children}
    </subThemeContext.Provider>
  );
};

export default SubThemeProvider;
