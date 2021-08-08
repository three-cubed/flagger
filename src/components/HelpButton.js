const HelpButton = ( props ) => {

    return (
        <div id='helpButtonDiv'>

            <button type='button' id='helpButton' onClick={props.helpButtonFunction}>{props.helpButtonLabel}</button>
                
        </div>
    )
}

export default HelpButton;
