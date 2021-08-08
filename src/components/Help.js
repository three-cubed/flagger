const Help = () => {
    return (
        <div id='help'>

            <h1>Help!</h1>

            <h5>This section is for your general information, and might be useful if you cannot find the flag that you are looking for.</h5>

            <h3>Flags</h3>

            <p>The project is currently aiming to show the current flags of all independent states, including flags used at sea, whether for civilian ships or warships.
                In addition, some other flags of the British Isles are included.
                In the future, other flags, such as historical or regional flags, may be included.
            </p>
            <p>Independent states are judged by whether the population consider itself to constitute an independent state, regardless of external recognition.</p>
                
            <h3>Main colours</h3>

            <p>
                Ticked boxes search for main colours. In some cases this is simple; for example blue-white-red is indisputable for France. 
                In other this is disputable; for example, Flagger works on the basis that the Kenyan flag's main colours are black-red-green, and not white.   
            </p> 
            <p>
                The colour of imagery is generally included as a main colour, but this depends on the prominence. 
                For example, Flagger includes yellow as a main colour of flag of South Sudan, due to the prominent yellow stars.
                However, Flagger does not include yellow as a main colour of the flag of Equatorial Guinea, as the six yellow stars are not prominent.
                As another example, for Belize, Flagger works on the basis the main colours are blue-white-red, and not, for example, green, 
                although it is seen in the small leaves of the central emblem.  
            </p>
            <p>   
                If your search has not produced your flag, try to consider what choices you have made as regards which colours are the main colours.
            </p>

            <h3>Stars and crescents</h3>

            <p>
                To streamline searches, as crescents generally come with stars, Flagger will not consider a crescent and star to have a star.
                This reduces the number of results thrown up by ticking stars. 
                If your flag has a crescent and star, just tick crescent.
            </p>

            <h3>Canton</h3>

            <p>
                A canton is, strictly speaking any quarter of a flag. However, it is loosely used to mean a box in the upper corner on the side of the flagpole.
                Flagger uses the looser usage.
                Be aware that depending on the country's traditions, this may be displayed at the top left of the flag image, rather than the top right.
                If this part of the flag contains a union jack, however, Flagger considers this to be specifically a union jack element, rather than a canton element.
            </p>

            <h3>Union Jack</h3>

            <p>
                The union jack contains both a cross and a saltire. However, it is assumed that flags won't be searched as having a saltire when they contain the union jack as an element. 
                As a result, flags which contain the union jack as an element will not be considered by Flagger to have a saltire, although they will be considered to have a cross.
            </p>

        </div>
    )
}

export default Help;
