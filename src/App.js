import { useState } from 'react';

import HelpButton from './components/HelpButton';
import TitleAndTop from './components/TitleAndTop';
import TickBoxes from './components/TickBoxes';
import Flags from './components/Flags';
import Help from './components/Help';


function App() {
    const [ticks, setTicks] = useState([]);
    const [showHelp, setShowHelp] = useState(false);

    function helpButtonFunction () {
        setShowHelp(!showHelp);
    }

    if (showHelp === true) {
        return (
            <div className="App">
                <HelpButton helpButtonLabel='&emsp;Back&emsp;' helpButtonFunction={helpButtonFunction} />
                <TitleAndTop />
                <br />
                <Help />
            </div>
        );
    }

    return (
        <div className="App">
            <HelpButton helpButtonLabel='&emsp;Help!&emsp;' helpButtonFunction={helpButtonFunction} />
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
