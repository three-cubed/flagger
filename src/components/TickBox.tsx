type props = {
    label: string;
    value: string;
}

const TickBox = ( { label, value } : props ) => {
    
    return (
                <label className="container">{label}
                <input 
                    type="checkbox" 
                    value={value}
                >
                </input>
                </label>

    )
}

export default TickBox;
