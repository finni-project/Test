import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme'
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

function reducer(currentState: any, action: any){
  if(currentState === undefined){
      return {
          page: "start",
          depositActive: false,
          savingInfo:{
            cycle: 0,
            amount: 0,
            goalEmogi: "",
            goalText: "",
            total: 0,
          }
      }
  }
  const newState = {...currentState};
  if(action.type === "GONEXT"){
    newState.page = action.payload;
  }
  if(action.type === "ACTIVE_DEPOSIT"){
    newState.depositActive = true;
  }
  if(action.type === "INACTIVE_DEPOSIT"){
    newState.depositActive = false;
  }
  if(action.type === "GET_SAVING_CYCLE"){
    newState.savingInfo = {...newState.savingInfo, cycle: action.payload};
  }
  if(action.type === "GET_SAVING_AMOUNT"){
    newState.savingInfo = {...newState.savingInfo, amount: action.payload};
  }
  if(action.type === "GET_SAVING_GOAL"){
    newState.savingInfo = {...newState.savingInfo, goalEmogi: action.payload.emogi, goalText: action.payload.text};
  }
  if(action.type === "GET_SAVING_TOTAL"){
    newState.savingInfo = {...newState.savingInfo, total: action.payload};
  }
  return newState;
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
