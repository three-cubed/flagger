import Country from "../model/Country"

type props = {
    country: Country;
    amendClasses: string;
}

const Flag = ( { country, amendClasses } : props ) : JSX.Element => {
    return (
        <div className={`flagIndividualContainer${amendClasses}`} onClick={() => window.open(`https://en.wikipedia.org/wiki/${country.wikiRef}`)}>

            <br />

            <img className={`flagImage${amendClasses}`} src={require(`../images/${country.image}`)} alt='no image'/>

            <h5>{country.fullName}</h5>
                
        </div>
    )
}

export default Flag;
