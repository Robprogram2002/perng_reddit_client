/* eslint-disable no-unused-vars */
import { createContext, FC, useReducer } from 'react';

interface IAppContext {
  state: { openSideBar: boolean; openModal: boolean };
  toggleSideBar: (prop: boolean) => void;
  toggleModal: (prop: boolean) => void;
}

interface IContextAction {
  type: string;
  payload: any;
}

const initialState: IAppContext = {
  state: { openSideBar: false, openModal: false },
  toggleSideBar: () => {},
  toggleModal: () => {},
};

export const appContext = createContext(initialState);

const appContextReducer = (
  state: IAppContext['state'],
  action: IContextAction
) => {
  switch (action.type) {
    case 'SIDEBAR_TOGGLE':
      return {
        ...state,
        openSideBar: action.payload as boolean,
      };

    case 'MODAL_TOGGLE':
      return {
        ...state,
        openModal: action.payload as boolean,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const AppContextProvider: FC = ({ children }) => {
  const [authState, dispatch] = useReducer(
    appContextReducer,
    initialState.state
  );

  const toggleSideBar = (status: boolean) =>
    dispatch({
      type: 'SIDEBAR_TOGGLE',
      payload: status,
    });

  const toggleModal = (status: boolean) =>
    dispatch({
      type: 'MODAL_TOGGLE',
      payload: status,
    });

  return (
    <appContext.Provider
      value={{ state: authState, toggleSideBar, toggleModal }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
