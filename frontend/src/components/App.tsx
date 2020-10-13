import * as React from "react";
import { Provider } from "react-redux";
import "fontsource-roboto";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IndexPage from '../page/index';
import Create from '../page/create';
import Edit from '../page/edit';


import store from '../store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Router>
            <div className="main">
                <Container>
                    <Route exact path="/" component={ IndexPage } />
                    <Route path="/create" component={ Create } />
                    <Route path="/edit/:id" component={ Edit } />
                </Container>
            </div>
        </Router>
      
    </Provider>
  );
};

export default App;
