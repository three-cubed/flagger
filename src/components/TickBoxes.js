import TickBox from './TickBox';

const TickBoxes = ( props ) => {

    const inputs = document.getElementsByTagName('input');
    const tickBoxMessages = document.getElementsByClassName('tickBoxMessages');

    function checkInputs() {
        console.log('checkInputs()')
        let returnArray = [];
        // tickBoxMessages.innerHTML = ``;
        let anyInputs = false;
        for (var i = 0; i < inputs.length; i++)  {
            if (inputs[i].checked === true)   {
                anyInputs = true;
                // tickBoxMessages[0].innerHTML += `<br>Tickboxes.js identifies ${inputs[i].value}`;
                returnArray.push(inputs[i].value);
            }
        }
        if (anyInputs === false) {
            // tickBoxMessages[0].innerHTML = `Try ticking a box or two!`;
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
                    <TickBox label='Two-stripe' value='biclr' />
                    <TickBox label='Three-stripe' value='triclr' />

                </div>

                <div className="tickBoxSubdiv" onClick={checkInputs}>

                    <h3 className="tickBoxSubDivTitle">Elements</h3>

                    <TickBox label='Union Jack' value='jack' />
                    <TickBox label='Shield' value='shield' />
                    <TickBox label='Animal' value='animal' />
                    <TickBox label='Star' value='star' />
                    
                </div>

                <div className='tickBoxMessages'>
                    Messages from the tick boxes
                </div>

            </div>

        </div>
    )
}

export default TickBoxes;
