const Flag = ( props ) => {
    return (
        <div className='flagIndividualContainer'>

            <h4>{props.fullName}</h4>

            <br />
            {/* <small><small>_id: {props._id}</small></small> */}
            {/* <small><small>image: {props.image}</small></small> */}
            {/* <img className='flagImage' src={require('../images/UK_flag.png').default} alt='no image'/> */}

            <img className='flagImage' src={require(`../images/${props.image}`).default} alt='no image'/>
                
        </div>
    )
}

export default Flag;
