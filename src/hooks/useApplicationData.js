import { useReducer } from 'react';
import reducer from '../reducers/application';
import {
  SET_DATA_TRANSFER_COST,
  SET_GET_REQUEST_COST,
  SET_POST_REQUEST_COST,
  SET_DATA_SIZE_COST
} from '../reducers/application';

export default function useApplicationData() {

  const [prices, dispatch] = useReducer(reducer, {
    dataTransferCost: (0).toFixed(2),
    IAGetRequestCost: (0).toFixed(2),
    standardGetRequestCost: (0).toFixed(2),
    IAPostRequestCost: (0).toFixed(2),
    standardPostRequestCost: (0).toFixed(2),
    IAdataSizeCost: (0).toFixed(2),
    standardDataSizeCost: (0).toFixed(2)
  });
  function setDataTransferCost(value) {
    return dispatch({ type: SET_DATA_TRANSFER_COST, cost: value });
  }
  function setGetRequestCost(value) {
    return dispatch({ type: SET_GET_REQUEST_COST, cost: value })
  }
  function setPostRequestCost(value) {
    return dispatch({ type: SET_POST_REQUEST_COST, cost: value })
  }
  function setDataSizeCost(value) {
    return dispatch({ type: SET_DATA_SIZE_COST, cost: value });
  }
  return {
    prices,
    setDataTransferCost,
    setGetRequestCost,
    setPostRequestCost,
    setDataSizeCost
  };

}