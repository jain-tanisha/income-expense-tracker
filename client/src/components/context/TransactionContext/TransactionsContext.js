import axios from "axios";
import React, { createContext } from "react";
import { useReducer } from "react";
import { API_URL_TRANSACTION } from "../../../utils/apiURL";

import {
  TRANSACTION_CREATION_SUCCES,
  TRANSACTION_CREATION_FAIL,
} from "./transactionsActionTypes";

export const transactionContext = createContext();

const INITIAL_STATE = {
  transaction: null,
  transactions: [],
  loading: false,
  error: null,
  token: JSON.parse(localStorage.getItem("userAuth")),
};

const transactionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRANSACTION_CREATION_SUCCES:
      return {
        ...state,
        loading: false,
        transaction: payload,
      };
    case TRANSACTION_CREATION_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const TransactionConextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, INITIAL_STATE);

  //create account
  const createTransactionAction = async (accountData) => {
    try {
      //header
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state?.token?.token}`,
        },
      };
      //request
      const res = await axios.post(API_URL_TRANSACTION, accountData, config);
      console.log(res);
      if (res?.data?.status === "success") {
        dispatch({
          type: TRANSACTION_CREATION_SUCCES,
          payload: res?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: TRANSACTION_CREATION_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };
  return (
    <transactionContext.Provider
      value={{
        transaction: state.transaction,
        transactions: state.transactions,
        createTransactionAction,
        error: state?.error,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
};
