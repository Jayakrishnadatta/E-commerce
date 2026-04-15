import './App.css';
import Product from './components/product';
import products from './product.js';
const App = () => {
  products

  return (
    <>
    <div className='container'>
    <header className='header'>
      <div className='logo'>
        <h3 className='store-Logo'>E-commerce</h3>
        <span className='store-name'> Store</span>
      </div>
      <nav  className='nav'>
        <ul className='nav-list'>
          <a href="" className='list-items'>Products</a>
          <a href="" className='list-items'>Deals</a>
          <a href="" className='list-items'>Contact</a>
          
          
        </ul>
        
      </nav>
      <div className='cart-container'>
        <a href="" className='Cart'>Cart</a>
      </div>
    </header>
    <main className='main-content'>
     <section className='tagLine'>
      <p>Shop Smarter. Live Better.</p>
      <span className='tagLine-Desc'>Everything You Need, Just a Click Away.</span> 
      <button className='shop-now'>Shop Now</button>
     </section>
     <section className='context'>
       <div  className='context-item'>
        <h2 className='Context-header'>50K</h2>
        <p className='context-text'>Subscribers</p>
       </div>
       <div className='context-item'>
        <h2 className='Context-header'> 100K</h2>
        <p className='context-text'>Products</p>
       </div>
        <div className='context-item'>
        <h2 className='Context-header'>1M</h2>
        <p className='context-text'>Happy Customers</p>
       </div>
     </section>
     <section className='products'>
      <h2 className='products-header'>Featured Products</h2>
      <div className='products-container'>
        {products.map((product) => (
          <Product 
          key={product.id}
          product={product}
          />
        ))}
      </div>
     </section>
     
    </main>
    <footer className='footer'>
      <p>&copy; 2026 E-commerce Store. All rights reserved.</p>
    </footer>
    </div>    
    </>
  )
}

export default App;