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
           
           <div id="tickBoxDiv">

                <div className="tickBoxSubdiv" onClick={checkInputs}>

                    <h3 className="tickBoxSubDivTitle">Colours</h3>

                    <TickBox label='Blue' value='blue' />
                    <TickBox label='Red' value='red' />
                    <TickBox label='Green' value='green' />
                    <TickBox label='White' value='white' />
                    <TickBox label='Yellow' value='yellow'/>
                    <TickBox label='Black' value='black' />

                </div>

                <div className="tickBoxSubdiv" onClick={checkInputs}>

                    <h3 className="tickBoxSubDivTitle">Design</h3>

                    <TickBox label='Cross' value='cross' />
                    <TickBox label='Saltire' value='saltire' />
                    <TickBox label='Two-stripe' value='two' />
                    <TickBox label='Three-stripe' value='three' />

                </div>

                <div className="tickBoxSubdiv" onClick={checkInputs}>

                    <h3 className="tickBoxSubDivTitle">Elements</h3>

                    <TickBox label='Union Jack' value='jack' />
                    <TickBox label='Shield' value='shield' />
                    <TickBox label='Animal' value='animal' />
                    <TickBox label='Star' value='star' />
                    
                </div>

            </div>

        </div>
    )
}

export default TickBoxes;
