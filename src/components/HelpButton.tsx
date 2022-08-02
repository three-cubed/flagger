type props = {
    helpButtonLabel: string;
    helpButtonFunction: () => void;
}

const HelpButton = ( { helpButtonLabel, helpButtonFunction } : props ) => {

    return (
        <div id='helpButtonDiv'>

            <button type='button' id='helpButton' onClick={helpButtonFunction}>{helpButtonLabel}</button>
                
        </div>
    )
}

export default HelpButton;
