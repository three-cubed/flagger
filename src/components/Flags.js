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

    if (flagsToDisplay.length < 1) {
        return (
          <h3 className='centredText noFlags'>
            Unfortunately, none of the flags in the database match your search criteria.
          </h3>
        )
      }
    
    return (
        <div id='flagsDisplay'>
            {flagsToDisplay.map((item) => (
                <Flag 
                    key={item._id} 
                    _id={item._id}
                    fullName={item.fullName}
                    features={item.features} 
                    image={item.image} 
                />
            ))}
        </div>
    )
}

export default Flags;