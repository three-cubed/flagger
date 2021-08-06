import Flag from './Flag';
import flagData from '../flagData/flagData';

const Flags = ( props ) => {

    function matchFlagsToTicks(flagsAll, tickedData) {
        const checkFlagMatches = (flag) => {
            const result = flag.features.filter(feature => tickedData.includes(feature)).length === tickedData.length;
            return [flag, result]
        }
        return flagsAll.filter(flag => checkFlagMatches(flag)[1] === true);
    }

    let flagsToDisplay = matchFlagsToTicks(flagData, props.ticked);
    
    return (
        <div>
            FLAGS COMPONENT - Ticked: { props.ticked }
            <br />
            {flagsToDisplay.map((item) => (
                <Flag 
                    key={item._id} 
                    _id={item._id}
                    fullName={item.fullName}
                    features={item.features} 
                />
            ))}
        
        </div>
    )
}

export default Flags;
