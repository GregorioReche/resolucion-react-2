import React from 'react';
import MainContent from './MainContent';
import Footer from './Footer';

function Content(){
    return (

        /* <!-- Content Wrapper --> */
		<div id="content-wrapper" className="d-flex flex-column">
            
            <MainContent />

            <Footer />

        </div>

    )
}

export default Content;