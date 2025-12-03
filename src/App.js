import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Header from './ui/Header';
import { CategoriaView } from './components/categoria/CategoriaView';
import { MarcaView } from './components/marca/MarcaView';
import { ProductoView } from './components/producto/ProductoView';
import { VendedorView } from './components/vendedor/VendedorView';



function App() {
  return  <Router>
    <Header/>     
    <Switch>
  
  <Route exact path="/" component={CategoriaView} />
  <Route exact path="/categoria" component={CategoriaView} />
  <Route exact path="/marca" component={MarcaView} />
  <Route exact path="/producto" component={ProductoView} />
  <Route exact path="/vendedor" component={VendedorView} />  
  <Redirect to="/" />

</Switch>

</Router> 
}

export default App;
