const Help = () => {
    return (
        <div className='help'>

            <h1 className='centredText'>Help!</h1>

            <h4 className='centredText'>This section is for your general information, and might be useful if you cannot find the flag that you are looking for.</h4>

            <h3 className='centredText'>Introduction</h3>

            <p>
                Flagger allows you to identify a flag you have seen by ticking boxes about its characteristics.
                Click on a flag's box to be redirected to information about that country!
            </p>

            <p> Flagger has over three hundred flags.
                The project uses the flags of all independent states, including official alternative flags for a number of countries.
                Unrecognised states are included.
                In addition, the Flagger data includes:
                <ul>
                    <li>some other flags of the British Isles;</li>
                    <li>nearly all civil and naval ensigns.</li>
                </ul>
                Historic flags are not included.
            </p>

            <p>Many countries prescribe very specific ratios of width to length for official usage. Flagger does not apply these exact proportions.</p>
                
            <h3 className='centredText'>Main colours</h3>

            <p>
                Ticked boxes search for main colours. In some cases this is simple; for example blue-white-red is indisputable for France.
                In many other cases, however, the main colours are debatable; for example, Flagger works on the basis that the Kenyan flag's main colours are black-red-green, but not white.
                A thin band of colour that sits alongside a thick stripe is not counted as a main colour.
                Blue, white and red are considered to be main colours in any flag containing the union jack.
            </p> 
            <p>
                The colour of imagery is generally included as a main colour, but this depends on the prominence.
                For example, Flagger includes yellow as a main colour of flag of South Sudan, due to the prominent yellow star.
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

            <h3 className='centredText'>Star and crescent</h3>

            <p>
                To streamline searches, as crescents generally come with a star/sun, Flagger will not consider a crescent and one single star/sun to also, separately from the crescent search, have a star/sun.
                This reduces the number of results thrown up by ticking 'One star' or 'Sun'. 
                Nepal's flag includes a crescent and star separately from the sun, so is considered to have both separately.
                If you are searching for a flag that has a crescent and just one star/sun, just tick 'Crescent & star', and not 'One star' or 'Sun'.
            </p>
            <p>
                Uniquely, the flag of the Maldives has a crescent but no star/sun. Nonetheless, exceptionally, Flagger will accept it in crescent and star searches.
            </p>

            <h3 className='centredText'>Corner box</h3>

            <p>
                If a corner box contains a union jack, Flagger considers this to be a union jack element, rather than a corner box element. 
                This makes searches more differentiated and therefore more streamlined.
            </p>

            <h3 className='centredText'>Union Jack</h3>

            <p>
                The union jack contains both a cross and a saltire. A search for a saltire and cross will bring up the union jack itself, including the embassy and consulate versions. 
                However, for other flags which contain the union jack as an element Flagger will not consider the union jack element to contain a cross or saltire. 
                This is to make searches more effective, as otherwise so many flags which contain a union jack will be thrown up by ticking cross or saltire.
                Note that blue, white and red are considered main colours in any flag containing the union jack.
            </p>

            <h3 className='centredText'>Circles on flags</h3>

            <p>
                Circles of colour on flags may represent the sun, the moon, blood, or an abstract concept.
                Where it represents the sun or moon, Flagger will consider the circle an emblem. In other cases, it will not consider the circle an emblem.
                The intended meaning of the orange circle on the flag of Niger is not recorded. Flagger interprets it as being the sun, which is a common interpretation.
            </p>
            <p>
                If you do not know the flag, the meaning of the circle is likely to be unknown to you.
                If you have ticked 'sun' or 'no emblem', this may well affect your search, and you may wish to amend you search if you do not find the flag you want.
            </p>

            <h3 className='centredText'>Notes on specific flags</h3>

            <ul>
                <li>The machete on the flag of Angola is an agricultural tool, not a weapon.</li>
                <li>The red circle on the flag of Bangladesh represents blood, not the sun, and is not considered an emblem by this programme.</li>
                <li>The yellow circle on the flag of Palau represents the moon, not the sun.</li>
                <li>On the flag of the Bahamas, the aquamarine is interpreted by Flagger as blue, and the trident of Poseidon as a weapon.</li>
                <li>The emblem in the centre of the flag of El Salvador is a triangle, not a shield.</li>
            </ul>

        </div>
    )
}

export default Help;
