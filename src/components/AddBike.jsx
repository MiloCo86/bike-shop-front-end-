import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

//img and icons
import closeIcon from '../assets/close_icon.svg'
//css
import '../styles/AddBike.css'

const AddBike = () => {

  const navigate = useNavigate()
  const [newBike, setNewBike] = useState({
    make: "",
    model: "",
    year: "",
    price: 0,
    bike_type: "",
    frame: "",
    bike_weight: "",
    is_new: true,
    in_stock: 0,
    img_url: ""
  })
  const API = import.meta.env.VITE_BASE_URL

  const handleChange = (e) => {
      setNewBike((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value }
      })
  }

  const handleCheckBox = (e)=>{

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch(API,{
        method:"POST",
        body: JSON.stringify(newBike),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            navigate('/bikes')
        })
        .catch(err=>console.log(err))
  }
  return (
    <div className='addBike__container'>
      <h2>Add new bike</h2>
      <form className='addBike__form' onSubmit={handleSubmit}>
        <Link className='addBike__closeIcon' to={'/bikes'} ><img  src={closeIcon} alt="close" /></Link>
        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="text"
            name="make"
            value={newBike.make}
            onChange={handleChange}
            required 
          />
          <label className='addBike__label' htmlFor="make">Make:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="text"
            name="model"
            value={newBike.model}
            onChange={handleChange} 
            required
          />
          <label className='addBike__label' htmlFor="model">Model:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="number"
            name="year"
            value={newBike.year}
            onChange={handleChange} 
          />
          <label className='addBike__label' htmlFor="year">Year:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="number"
            name="price"
            value={newBike.price}
            onChange={handleChange}
            required
          />
          <label className='addBike__label' htmlFor="price">Price:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="text"
            name="bike_type"
            value={newBike.bike_type}
            onChange={handleChange} 
          />
          <label className='addBike__label' htmlFor="bike_type">Bike Type:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="text"
            name="frame"
            value={newBike.frame}
            onChange={handleChange} 
          />
          <label className='addBike__label' htmlFor="frame">Frame:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="text"
            name="weight"
            value={newBike.bike_weight}
            onChange={handleChange} 
          />
          <label className='addBike__label' htmlFor="weight">Weight:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="checkbox"
            name="is_new"
            value={newBike.is_new}
            onChange={handleCheckBox} 
          />
          <label className='addBike__label' htmlFor="is_new">Is New:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="number"
            name="in_stock"
            value={newBike.in_stock}
            onChange={handleChange} 
            required
          />
          <label className='addBike__label' htmlFor="in_stock">In Stock:</label>
        </div>

        <div className="addBike__fields">
          <input 
            className='addBike__input'
            type="text"
            name="img_url"
            value={newBike.img_url}
            onChange={handleChange} 
          />
          <label className='addBike__label' htmlFor="img_url">Img Url:</label>
        </div>


        <button className='addBike__submitBTN'>Add Bike</button>
      </form>
    </div>
  )
}



export default AddBike
