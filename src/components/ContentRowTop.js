import React from 'react';
import SmallCard from './SmallCard';

function ContentRowTop(){
    return (
        <div className="row">
        {/* <!-- Products in DB --> */}
            <SmallCard 
                title='Products in Data Base'
                color='primary' 
                cuantity='135' 
                icon='fas fa-clipboard-list fa-2x text-gray-300'
            />
          

        {/* <!-- $$$ of all products in DB --> */}
            <SmallCard 
                title='Amounts in products' 
                color='success'
                cuantity='$546.456' 
                icon='fas fa-dollar-sign fa-2x text-gray-300'
            />
           

        {/* <!-- Amount of users in DB --> */}
            <SmallCard 
                title='Users quantity' 
                color='warning'
                cuantity='38' 
                icon='fas fa-user-check fa-2x text-gray-300'
            />
            

    </div>
    )
}

export default ContentRowTop;