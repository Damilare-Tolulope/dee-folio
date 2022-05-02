import { useState } from 'react'
import pp from '../assets/pp.jpg'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Order = () => {

  const orderData = [
    {
      id: 1,
      customer: "Ajele Dare",
      orderId: "#342",
      date: "24 Feb, 2022",
      status: "Completed",
    },
    {
      id: 2,
      customer: "Dae",
      orderId: "#342",
      date: "24 Feb, 2022",
      status: "Pending",
    },
    {
      id: 3,
      customer: "AjDee",
      orderId: "#342",
      date: "24 Feb, 2022",
      status: "Pending",
    },
    {
      id: 4,
      customer: "AjDee",
      orderId: "#342",
      date: "24 Feb, 2022",
      status: "Pending",
    },
    {
      id: 5,
      customer: "AjDee",
      orderId: "#342",
      date: "24 Feb, 2022",
      status: "Completed",
    },
    {
      id: 6,
      customer: "AjDee",
      orderId: "#342",
      date: "24 Feb, 2022",
      status: "Completed",
    },
  ]

  const [data, setData] = useState(orderData)

  const deleteOrder = (id: number) => {
    const newData = data.filter(item => {
      return item.id !== id
    });

    setData(newData);
  }

  return (
    <div id="history"  className='order-container'>
      <h3 className='o-h'>Order History</h3>
      <div>
        <table>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Customer</td>
              <td>Order ID</td>
              <td>Date</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((items, index) => {
                return (
                  <tr>
                    <td>{items.id}.</td>
                    <td><img src={pp} alt="" /> {items.customer}</td>
                    <td>{items.orderId}</td>
                    <td>{items.date}</td>
                    <td>{items.status}</td>
                    <td><button onClick={() => deleteOrder(items.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order