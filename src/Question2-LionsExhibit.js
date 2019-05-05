/*
 * ============= Question 2 =============
 *
 * Create a new component named LionsExhibit.
 *
 * It should render an article element with a class "lions". Within the article,
 * render an h2 element with the text "Lions". Below the h2, render a p element
 * with the text "The mane is the most recognisable feature of the species"
 */

import React, {Component} from "react";

class Lion extends Component {
render(){
    return <article className='lion'>
        <h2>Lion</h2>
        <p>The mane is the most recognisable feature of the species</p>
    </article>
}
   
}

export default Lion;
