//declaring different action types
export const SET_DATA_TRANSFER_COST = 'SET_DATA_TRANSFER_COST';
export const SET_GET_REQUEST_COST = 'SET_GET_REQUEST_COST';
export const SET_POST_REQUEST_COST = 'SET_POST_REQUEST_COST';
export const SET_DATA_SIZE_COST = 'SET_DATA_SIZE_COST';

//reducer hooks
export default function reducer(prices, action) {

  switch (action.type) {
    case SET_DATA_TRANSFER_COST:
      return { ...prices, dataTransferCost: (action.cost / 100).toFixed(2) }
    case SET_GET_REQUEST_COST:
      return {
        ...prices,
        IAGetRequestCost: (action.cost * 1).toFixed(2),
        standardGetRequestCost: (action.cost * 0.4).toFixed(2)
      }
    case SET_POST_REQUEST_COST:
      return {
        ...prices,
        IAPostRequestCost: (action.cost * 10).toFixed(2),
        standardPostRequestCost: (action.cost * 5).toFixed(2)
      }
    case SET_DATA_SIZE_COST:
      return {
        ...prices,
        standardDataSizeCost: action.cost >= 1 ? ((action.cost * 30) - ((action.cost * 0.5) - 0.5)).toFixed(2) : 0.00,
        IAdataSizeCost: (action.cost * 12.5).toFixed(2)
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}