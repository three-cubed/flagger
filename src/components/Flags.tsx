import Flag from './Flag';
import flagData from '../flagData/flagData';
import Country from '../model/Country';

type props = {
    amendClasses: string;
    ticked: string[];
}

const Flags = ( { amendClasses, ticked } : props ) : JSX.Element => {

    function matchFlagsToTicks(flagsAll: Country[], tickedData: string[]): Country[] {
        const checkFlagMatches = (flag: Country) => {
            const result = flag.features.filter(feature => tickedData.includes(feature)).length === tickedData.length;
            return [flag, result]
        }
        return flagsAll.filter(flag => checkFlagMatches(flag)[1] === true);
    }
    let flagsToDisplay: Country[] = matchFlagsToTicks(flagData, ticked);

    if (flagsToDisplay.length < 1) {
        return (
            <>
                <br /><br />
                <div className='centredText noFlags'>
                    <br />
                    <h3>Unfortunately, none of the flags currently in the Flagger data match your search criteria.</h3>
                    <p>You may find it useful to look at the help section by clicking on the help button at the top right of the screen.</p>
                    <br />
                </div>
            </>
        )
    }
    
    return (
        <div id='flagsDisplay'>
            {flagsToDisplay.map((item) => (
                <Flag 
                    key={item._id}
                    country={item}
                    amendClasses={amendClasses}
                />
            ))}
        </div>
    )
}

export default Flags;
