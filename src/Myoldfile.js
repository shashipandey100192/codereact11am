import React, { Fragment } from 'react'
import Aboutpage, { About, Aboutone } from './About';
import Mybootstrappage from './Mybootstrappage';
import Myreactbootstrappage from './Myreactbootstrappage';
import Mymuipage from './Mymuipage';


function Myoldfile() {
    return (
        <Fragment>
            <Aboutpage />
            <About />
            <Aboutone />
            <Mybootstrappage />
            <Myreactbootstrappage></Myreactbootstrappage>
            <Mymuipage />

        </Fragment>
    )
}

export default Myoldfile