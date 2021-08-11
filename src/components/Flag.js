const Flag = ( props ) => {
    return (
        <div className={`flagIndividualContainer${props.amendClasses}`}>

            <br />

            <img className={`flagImage${props.amendClasses}`} src={require(`../images/${props.image}`).default} alt='no image'/>

            <h5>{props.fullName}</h5>
                
        </div>
    )
}

export default Flag;
