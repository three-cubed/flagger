import { useState } from 'react';

import TitleAndTop from './components/TitleAndTop';
import TickBoxes from './components/TickBoxes';
import MessagesComp from './components/MessagesComp';
import Flags from './components/Flags';

function App() {
    const [ticks, setTicks] = useState([]);

    return (
        <div className="App">
            <TitleAndTop />
            <br />
            <TickBoxes 
                updateTicks={ (returnArray) => setTicks(returnArray) }
            />
            <br />
            <MessagesComp
                messageToDisplay={ticks}
            />
            <br />
            <Flags 
                ticked={ticks}
            />
        </div>
    );
}

export default App;
