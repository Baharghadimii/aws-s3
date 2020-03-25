import React, { useState } from 'react';
import './Table.scss';
import { Table } from 'react-bootstrap';
import Unit from '../Unit/Unit';
import useApplicationData from '../../hooks/useApplicationData';

export default function PriceList() {

  const [state, setState] = useState({
    dataSize: 100,
    postPutRequest: 10,
    getRequest: 100,
    dataTransfer: 100
  });

  const {
    prices,
    setDataTransferCost,
    setGetRequestCost,
    setPostRequestCost,
    setDataSizeCost
  } = useApplicationData();
  const changeDataTransferPrice = (value) => {
    setState({ ...state, dataTransfer: value });
    setDataTransferCost(value);
  }
  const changeGetRequestCost = (value) => {
    setState({ ...state, getRequest: value });
    setGetRequestCost(value);
  }
  const changePostRequestCost = (value) => {
    setState({ ...state, postPutRequest: value });
    setPostRequestCost(value);
  }
  const changeDataSizeCost = (value) => {
    setState({ ...state, dataSize: value });
    setDataSizeCost(value);
  }
  // const setDataSizeCost = (cost) => {
  //   setPrices({
  //     ...prices,
  //     standardDataSizeCost: cost >= 1 ? ((cost * 30) - ((cost * 0.5) - 0.5)).toFixed(2) : 0.00,
  //     IAdataSizeCost: (cost * 12.5).toFixed(2)
  //   })
  // }
  return (
    <Table id="table" responsive="sm" bordered>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Unit</th>
          <th>S3 Standard</th>
          <th>S3 Infrequent Access</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="title">Data Size in TB</td>
          <td><Unit unitName={"TB"} onChange={changeDataSizeCost} /></td>
          <td>$
          {prices.standardDataSizeCost}
          </td>
          <td>$
          {prices.IAdataSizeCost}
          </td>
        </tr>
        <tr>
          <td id="title">No. of POST/PUT requests in Millions</td>
          <td><Unit unitName={"Million"} onChange={changePostRequestCost} /></td>
          <td>$
          {prices.standardPostRequestCost}
          </td>
          <td>$
          {prices.IAPostRequestCost}
          </td>
        </tr>
        <tr>
          <td id="title">No. of GET requests in Millions</td>
          <td><Unit unitName={"Million"} onChange={changeGetRequestCost} /></td>
          <td>$
          {prices.standardGetRequestCost}
          </td>
          <td>$
          {prices.IAGetRequestCost}
          </td>
        </tr>
        <tr>
          <td id="title">S3 IA Data transfer cost in GB</td>
          <td><Unit unitName={"GB"} onChange={changeDataTransferPrice} /></td>
          <td>$ 0.00</td>
          <td>$
          {prices.dataTransferCost}
          </td>
        </tr>
        <tr id="total-row">
          <td id="title">Totals</td>
          <td>Savings: $ 0.0</td>
          <td>$ 0.0</td>
          <td>$ 0.0</td>
        </tr>
      </tbody>
    </Table>
  )
}

