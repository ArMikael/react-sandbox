import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Home} />
            </Router>
        );
    }
}

// App.propTypes = {
//     children: PropTypes.object.isRequired
// };

export default App;
