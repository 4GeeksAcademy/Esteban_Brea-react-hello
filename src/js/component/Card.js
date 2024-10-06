import React from 'react'

const Card = ({title, description, images}) => {
  return (
    <div className="card my-3 mx-auto" style= {{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <img src={images} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover", borderRadius: "8px 8px 0 0"}}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  );
};

export default Card