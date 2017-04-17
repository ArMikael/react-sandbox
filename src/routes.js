import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';

// class RouterModule extends React.Component {
//     render() {
//         return (
//             <Router history={hashHistory}>
//                 <Route path="/" component={App}>
//                     <IndexRoute component={Home}></IndexRoute>
//                     <Route path="/about" component={About}></Route>
//                 </Route>
//             </Router>
//         )
//     }
// }
//
// export default RouterModule;

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/about" component={About}></Route>
    </Route>
)