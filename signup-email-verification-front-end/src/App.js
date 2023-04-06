import './App.css';
import SignUp from './components/SignUp';
import SignUpFooter from './components/SignUp_footer'


function App() {
  return (
    <div>
    <section
      className="first-fold signup-form-overlap gradient-dark-blue-2 font-color-light banner-form clearfix-md"
      id=""
    >
      <div className="App">
        <div className='row' style={{ height: "auto" }}>
          <div className='col-md-12'style={{ paddingBottom:"10px"  }} >
          <SignUp />
          </div>
        </div>
      </div>
    </section>
    <div >
      <SignUpFooter />
    </div>
  </div>
  );
}

export default App;
