const Flag = ( props ) => {
    return (
        <div className={`flagIndividualContainer${props.amendClasses}`} onClick={() => window.open(`https://en.wikipedia.org/wiki/${props.wikiRef}`)}>

            <br />

            <img className={`flagImage${props.amendClasses}`} src={require(`../images/${props.image}`)} alt='no image'/>

            <h5>{props.fullName}</h5>
                
        </div>
    )
}

export default Flag;
