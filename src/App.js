import React from 'react';

import ContactsList from './contacts/ContactsList';
import Router from './routes';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router />
            </div>
        );
    }
}

export default App;
