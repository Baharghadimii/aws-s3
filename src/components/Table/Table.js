import React, { useState, useEffect } from 'react';
import './Table.scss';
import { Table } from 'react-bootstrap';
import Unit from '../Unit/Unit';
import useApplicationData from '../../hooks/useApplicationData';

export default function PriceList(props) {
  const {
    prices,
    setDataTransferCost,
    setGetRequestCost,
    setPostRequestCost,
    setDataSizeCost
  } = useApplicationData();
  const [total, setTotal] = useState({
    totalStandard: (0).toFixed(2),
    totalAI: (0).toFixed(2)
  })
  useEffect(() => {
    setTotal({
      totalStandard: (Number(prices.standardPostRequestCost) +
        Number(prices.standardDataSizeCost) + Number(prices.standardGetRequestCost)).toFixed(2),
      totalAI: (Number(prices.dataTransferCost) + Number(prices.IAdataSizeCost) +
        Number(prices.IAGetRequestCost) + Number(prices.IAPostRequestCost)).toFixed(2)
    })
  }, [prices]);

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
          <td><Unit unitName={"TB"}
            onChange={value => setDataSizeCost(value, props.region)} /></td>
          <td>$
          {prices.standardDataSizeCost}
          </td>
          <td>$
          {prices.IAdataSizeCost}
          </td>
        </tr>
        <tr>
          <td id="title">No. of POST/PUT requests in Millions</td>
          <td><Unit unitName={"Million"} onChange={setPostRequestCost} /></td>
          <td>$
          {prices.standardPostRequestCost}
          </td>
          <td>$
          {prices.IAPostRequestCost}
          </td>
        </tr>
        <tr>
          <td id="title">No. of GET requests in Millions</td>
          <td><Unit unitName={"Million"} onChange={setGetRequestCost} /></td>
          <td>$
          {prices.standardGetRequestCost}
          </td>
          <td>$
          {prices.IAGetRequestCost}
          </td>
        </tr>
        <tr>
          <td id="title">S3 IA Data transfer cost in GB</td>
          <td><Unit unitName={"GB"} onChange={setDataTransferCost} /></td>
          <td>$ 0.00</td>
          <td>$
          {prices.dataTransferCost}
          </td>
        </tr>
        <tr id="total-row">
          <td id="title">Totals</td>
          <td>Savings: $ {(total.totalStandard - total.totalAI).toFixed(2)}</td>
          <td>$ {total.totalStandard}</td>
          <td>$ {total.totalAI}</td>
        </tr>
      </tbody>
    </Table>
  )
}

