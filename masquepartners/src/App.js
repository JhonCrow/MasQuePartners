import './App.css';
import NavBar from './NavBar/NavBar';
import Form from './Form/Form';
import Footer from './Footer/Footer';
import Newsletter from './Newsletter/Newsletter';
import Courses from './Courses/Courses';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Form />
      <Courses />
      <Newsletter />
      <Footer />

    </div>
  );
}

export default App;
