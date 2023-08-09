import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThaWK3SaqZg2SR5gxP6OelHwNMATu1-8F7yB5mqbEJAjeypM4_ZO7EtN-QKCnmnKHN9nw&usqp=CAU" />
      </div>
      <div className="Navitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cobtact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestranuntCard = (props) => {
  return props.resData.restaurants.map((data) => {
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="reslogo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/itkm1p3on9gzd7fuuudj"
        />
        <h3>{data.id}</h3>
        <h3>{data.name}</h3>
        <h3>{data.cuisine}</h3>
        <h4>{data.rating}</h4>
      </div>
    );
  });
};

const resObj = {
  restaurants: [
    {
      id: 1,
      name: "Delicious Bites",
      cuisine: "Italian",
      rating: 4.5,
      image: "https://example.com/images/restaurant1.jpg",
      menu: [
        {
          item_id: 101,
          name: "Margherita Pizza",
          price: 12.99,
          image: "https://example.com/images/margherita_pizza.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Spice Fusion",
      cuisine: "Indian",
      rating: 4.2,
      image: "https://example.com/images/restaurant2.jpg",
      menu: [
        {
          item_id: 201,
          name: "Butter Chicken",
          price: 14.99,
          image: "https://example.com/images/butter_chicken.jpg",
        },
      ],
    },
  ],
};

const Body = () => {
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestranuntCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
