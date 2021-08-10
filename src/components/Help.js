const Help = () => {
    return (
        <div id='help'>

            <h1>Help!</h1>

            <h5>This section is for your general information, and might be useful if you cannot find the flag that you are looking for.</h5>

            <h3>Flags</h3>

            <p>The project is currently aiming to show the current flags of all independent states, including flags used at sea.
                Unrecognised states are included.
                In addition, some other flags of the British Isles are in the Flagger data.
                In the future, other flags, such as historical or regional flags, may also be added.
            </p>

            <p>While Flagger shows flag designs, many countries prescribe very specific ratios of width to length. Flagger does not apply these exact proportions.</p>
                
            <h3>Main colours</h3>

            <p>
                Ticked boxes search for main colours. In some cases this is simple; for example blue-white-red is indisputable for France.
                In other this is disputable; for example, Flagger works on the basis that the Kenyan flag's main colours are black-red-green, and not white.
                A thin band of colour that sits alongside a thick stripe is not counted as a main colour.
                Blue, white and red are considered main colours in any flag containing the union jack.
            </p> 
            <p>
                The colour of imagery is generally included as a main colour, but this depends on the prominence.
                For example, Flagger includes yellow as a main colour of flag of South Sudan, due to the prominent yellow stars.
                However, Flagger does not include yellow as a main colour of the flag of Equatorial Guinea, as the six yellow stars are not prominent.
                As another example, for Belize, Flagger works on the basis the main colours are blue-white-red, and not, for example, green,
                although it is seen in the small leaves of the central emblem.
            </p>
            <p>
                Ticking 'not' a colour means it is not a main colour. It does not mean the colour is not in the flag.
            </p>
            <p>   
                If your search has not produced your flag, try to consider what choices you have made as regards which colours are the main colours.
            </p>

            <h3>Star and crescent</h3>

            <p>
                To streamline searches, as crescents generally come with stars, Flagger will not consider a crescent and star to separartely have a star.
                This reduces the number of results thrown up by ticking stars. 
                If you are searching for a flag that has a crescent and star, just tick 'crescent & star', and not 'stars'.
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
                The union jack contains both a cross and a saltire. A search for a saltire and cross will bring up the union jack itself. 
                However, for other flags which contain the union jack as an element Flagger will not consider the union jack element to contain a cross or saltire. 
                This is to make searches more effective, as otherwise so many flags which contain a union jack will be thrown up by ticking cross or saltire.
                Note that blue, white and red are considered main colours in any flag containing the union jack.
            </p>

            <h3>Notes on specific flags</h3>

            <ul>
                <li>The machete on the flag of Angola is an agricultural tool, not a weapon.</li>
                <li>The red circle on the flag of Bangladesh is blood, not the sun.</li>
                <li>The aquamarine on the flag of the Bahamas is interpreted by Flagger as blue, and the trident of Poseidon as a weapon.</li>
                <li>The emblem in the centre of the flag of El Salvador is a triangle, not a shield.</li>
            </ul>

        </div>
    )
}

export default Help;
