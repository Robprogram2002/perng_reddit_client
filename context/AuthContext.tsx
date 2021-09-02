/* eslint-disable no-unused-vars */
import { gql, useQuery } from '@apollo/client';
import { createContext, FC, useReducer } from 'react';

interface IUser {
  username: string;
  email: string;
  avatarUrl: string;
  bannerUrl: string | null;
}

interface IAuthContext extends IUser {
  authenticated: boolean;
}

interface IAuthContextFunctions {
  login: (prop: IUser) => void;
  logout: () => void;
  me: (prop: IUser) => void;
}

interface IContextAction {
  type: string;
  payload: any;
}

const initialState: IAuthContext = {
  username: '',
  email: '',
  avatarUrl: '',
  bannerUrl: '',
  authenticated: true,
};

const initialStateFunctions: IAuthContextFunctions = {
  login: () => {},
  logout: () => {},
  me: () => {},
};

export const authContext = createContext(initialState);
export const authFunctContext = createContext(initialStateFunctions);

const authReducer = (state: IAuthContext, action: IContextAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
        authenticated: true,
      };
    case 'LOGOUT':
      return initialState;

    case 'ME':
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
        authenticated: true,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const ME_QUERY = gql`
  query MeQuery {
    me {
      avatarUrl
      email
      username
      bannerUrl
    }
  }
`;

const AuthProvider: FC = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const authFunctionsState = {
    login: async (userData: IUser) => {
      dispatch({
        type: 'LOGIN',
        payload: userData,
      });
    },

    logout: () => {
      dispatch({
        type: 'LOGOUT',
        payload: {},
      });
    },

    me: (userData: IUser) => {
      dispatch({
        type: 'ME',
        payload: userData,
      });
    },
  };

  const { loading } = useQuery(ME_QUERY, {
    onCompleted: (data) => {
      if (data.me !== null) {
        authFunctionsState.login(data.me);
      }
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return (
    <authContext.Provider value={authState}>
      <authFunctContext.Provider value={authFunctionsState}>
        {loading ? <h1>Initilization ....</h1> : children}
      </authFunctContext.Provider>
    </authContext.Provider>
  );
};

export default AuthProvider;
