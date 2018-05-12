import React, {Component} from 'react';
import Navbar from './components/Navbar';
import GameContainer from './components/GameContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br/>
                <GameContainer />
            </div>
        );
    };
}

export default App;