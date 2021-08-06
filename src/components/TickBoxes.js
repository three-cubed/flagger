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

                <h3 className="tickBoxGroupTitle">Colours</h3>

                <div className="tickBoxIntDiv" onClick={checkInputs}>

                    <div className="tickBoxSubdiv">

                        <TickBox label='Blue' value='blue' />
                        <TickBox label='Red' value='red' />
                        <TickBox label='White' value='white' />

                    </div>

                    <div className="tickBoxSubdiv">

                        <TickBox label='Green' value='green' />
                        <TickBox label='Yellow/Gold' value='yellow'/>
                        <TickBox label='Black' value='black' />

                    </div>

                </div>

            </div>

            <div className="tickBoxDiv">

                <h3 className="tickBoxGroupTitle">Design</h3>

                    <div className="tickBoxIntDiv" onClick={checkInputs}>

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Cross' value='cross' />
                        <TickBox label='Saltire' value='saltire' />

                    </div>

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Two-stripe' value='two' />
                        <TickBox label='Three-stripe' value='three' />

                    </div>

                </div>

            </div>

            <div className="tickBoxDiv">

                <h3 className="tickBoxGroupTitle">Elements</h3>

                <div className="tickBoxIntDiv" onClick={checkInputs}>

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Sun' value='sun' />
                        <TickBox label='Star' value='star' />
                        <TickBox label='Tree' value='tree' />
                        
                    </div>

                    <div className="tickBoxSubdiv" onClick={checkInputs}>

                        <TickBox label='Union Jack' value='jack' />
                        <TickBox label='Shield' value='shield' />
                        <TickBox label='Animal' value='animal' />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TickBoxes;
