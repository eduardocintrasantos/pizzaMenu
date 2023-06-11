import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      { numPizzas > 0 ?  (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
        
          <ul className="pizzas">
            {/*{pizzaData.map((e) => (
              <Pizza name={e.name}
                ingredients={e.ingredients}
                price={e.price}
                photoName={e.photoName}
                soldOut={e.soldOut}
              />
            ))}*/}
            
              {pizzas.map((e) => (
                <Pizza pizzaObj={e} key={e.name}/>
              ))}
          </ul>
        </>
      ) : "We're still working on our menu. Please come back later:"}

      {/*<Pizza 
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza 
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
      />*/}
  </main>
  )
}

function Pizza(props) {

  //if (props.pizzaObj.soldOut) return null;

  return (
      <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ''}`}>
          <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
          <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.soldOut ? 'SOLD OUT' : `R$${props.pizzaObj.price}`}</span>
          </div>
      </li>
  );
}

function Footer() {

  let hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /*
  if(hour >= openHour && hour <= closeHour) {
    alert('Aberto')
  }
  else {
    alert('Fechado')
  }
  */

  return (
    <footer className="footer">
      {isOpen ? (  
        <Order closeHours={closeHour}/>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>)}         
    </footer>
  )
}

function Order({closeHours}) {
  return (
    <div className="order">
      <p>We're open until {closeHours}:00</p>
      <button className="btn">Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

