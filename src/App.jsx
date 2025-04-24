import AddProductForm from './components/AddProductForm'
import ProductList from './components/ProductsList'
import Cart from './components/Cart'
import './App.css'
function App() {

  return (
    <>
      <h1>Shopping Cart</h1>
      <h3>Jotai Learning</h3>
      <AddProductForm />
      <ProductList />
      <Cart />
    </>
  )
}

export default App
