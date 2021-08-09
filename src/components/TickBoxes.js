import TickBox from './TickBox';

const TickBoxes = ( props ) => {

    const inputs = document.getElementsByTagName('input');

    function checkInputs() {
        console.log('checkInputs()')
        let returnArray = [];
        let anyInputs = false;
        for (var i = 0; i < inputs.length; i++)  {
            if (inputs[i].checked === true)   {
                anyInputs = true;
                returnArray.push(inputs[i].value);
            }
        }
        if (anyInputs === false) {
        }
        props.updateTicks(returnArray);
    }
    
    return (
        <div id ='TickBoxes'>
           
           <div className="tickBoxDiv">

                <h3 className="tickBoxGroupTitle">Main colours</h3>

                <div className="tickBoxIntDiv" onClick={checkInputs}>

                    <div className="tickBoxSubdiv">

                        <TickBox label='Blue' value='blue' />
                        <TickBox label='White' value='white' />
                        <TickBox label='Red' value='red' />
                        <TickBox label='Green' value='green' />
                    </div>

                    <div className="tickBoxSubdiv">
                        <TickBox label='Yellow/Gold' value='yellow'/>
                        <TickBox label='Black' value='black' />
                        <TickBox label='Orange' value='orange' />

                    </div>

                    <div className="tickBoxSubdiv">

                        <TickBox label='Not blue' value='not-blue' />
                        <TickBox label='Not white' value='not-white' />
                        <TickBox label='Not red' value='not-red' />
                        <TickBox label='Not green' value='not-green' />

                    </div>

                </div>

            </div>

            <div className="tickBoxDiv">

                <h3 className="tickBoxGroupTitle">Design, shapes, & imagery</h3>

                <div className="tickBoxIntDiv" onClick={checkInputs}>

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Cross' value='cross' />
                        <TickBox label='Saltire' value='saltire' />
                        <TickBox label='Canton' value='canton' />

                    </div>

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Two bands' value='two' />
                        <TickBox label='Three bands' value='three' />
                        <TickBox label='Stripey' value='stripey' />
                        <TickBox label='Triangle' value='triangle' />

                    </div>

                {/* </div> */}

            {/* </div>

            <div className="tickBoxDiv">

                <h3 className="tickBoxGroupTitle">Imagery</h3>

                <div className="tickBoxIntDiv" onClick={checkInputs}> */}

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Sun' value='sun' />
                        <TickBox label='Star(s)' value='star' />
                        <TickBox label='Crescent & star' value='crescent' />
                        <TickBox label='Tree' value='tree' />
                        
                    </div>

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Union Jack' value='jack' />
                        <TickBox label='Animal' value='animal' />
                        <TickBox label='Shield' value='shield' />
                        <TickBox label='Weapon' value='weapon' />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TickBoxes;
