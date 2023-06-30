import { useContext } from 'react';

// import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { SettingsContext } from './Context/Settings';

function App() {

  const { title, email } = useContext(SettingsContext)
  return (
    <>
    <Header />
  <Auth capability="read">
    <p>I can read!</p>
  </Auth>
  <Auth capability="create">
    <p>I can create!</p>
  </Auth>
  <Auth capability="update">
    <p>I can update!</p>
  </Auth>
  <Auth capability="delete">
    <p>I can delete!</p>
  </Auth>
    <Footer />
    </>
  );

}

export default App;

