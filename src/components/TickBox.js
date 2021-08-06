const TickBox = ( props ) => {
    
    return (
                <label className="container">{props.label}
                <input 
                    type="checkbox" 
                    value={props.value}
                >
                </input>
                </label>

    )
}

export default TickBox;
