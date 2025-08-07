import Header from '../Header/Header.jsx'
import HomePage from '../../pages/HomePage.jsx'
import { Footer } from '../Footer/Footer.jsx'
import Counter from '../Counter.jsx'
import UserProfile from '../UserProfile.jsx'
import ParentComponent from '../ParentComponent.jsx'
import './App.css'

function App() {

  return (
    <main className='app'>
      <Header />
      <HomePage />
      <Counter />
      <UserProfile />
      <ParentComponent />
      <Footer />
    </main>
  )
}

export default App
