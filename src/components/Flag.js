const Flag = ( props ) => {

    return (
        <div className='flagIndividualContainer'>

            <br />

            <img className='flagImage' src={require(`../images/${props.image}`).default} alt='no image'/>

            <h5>{props.fullName}</h5>
                
        </div>
    )
}

export default Flag;
