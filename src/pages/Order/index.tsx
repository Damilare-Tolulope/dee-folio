import { useState } from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import SingleOrder from './components/SingleOrder';

import pp from 'assets/pp.jpg'


const Index = () => {

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

  const [data, setData] = useState(orderData);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (id: number) => {
    // setShowModal(!showModal)
    console.log(id, showModal);
  }

  const deleteOrder = (id: number) => {
    const newData = data.filter(item => {
      return item.id !== id
    });

    setData(newData);
  }

  return (
    <div id="history" onClick={() => setShowModal(false)}  className='order-container'>
      <div className='delete_all'>
        <button onClick={() => setData([])}>Delete All <FontAwesomeIcon icon={faTrash} /></button>
      </div>

      { showModal && <div id="modal"><SingleOrder /></div> }
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
                  <tr key={index} onClick={() => toggleModal(items.id)}>
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

export default Index