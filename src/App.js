import { useState } from 'react';

import TitleAndTop from './components/TitleAndTop';
import TickBoxes from './components/TickBoxes';
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
            <Flags 
                ticked={ticks}
            />
        </div>
    );
}

export default App;
