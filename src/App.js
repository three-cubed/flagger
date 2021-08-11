import { useState } from 'react';

import HelpButton from './components/HelpButton';
import TitleAndTop from './components/TitleAndTop';
import TickBoxes from './components/TickBoxes';
import Flags from './components/Flags';
import Help from './components/Help';


function App() {
    const [ticks, setTicks] = useState([]);
    const [showHelp, setShowHelp] = useState(false);
    const [tooNarrow, setTooNarrow] = useState(false);

    let amendClasses = '';

    function helpButtonFunction () {
        setShowHelp(!showHelp);
    }
    
    function detectMobileOrNarrow() { 
        if (window.innerWidth <= 990) {
            setTooNarrow(true);
        } else {
            setTooNarrow(false);
        }
    }

    window.onresize = detectMobileOrNarrow;

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

    if (tooNarrow === true || window.innerWidth <= 990) {
        amendClasses = 'NarrowScreen';
    }

    return (
        <div className="App">
            <HelpButton helpButtonLabel='&emsp;Help!&emsp;' helpButtonFunction={helpButtonFunction} />
            <TitleAndTop />
            <br />
            <TickBoxes 
                updateTicks={ (returnArray) => setTicks(returnArray) }
                amendClasses={amendClasses}
            />
            <br />
            <Flags 
                ticked={ticks} 
                amendClasses={amendClasses}
            />
        </div>
    );
}

export default App;
