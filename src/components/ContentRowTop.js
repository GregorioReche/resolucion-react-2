import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Products in Data Base',
    color: 'primary', 
    cuantity: '135',
    icon: 'fas fa-clipboard-list fa-2x text-gray-300'
}

/* <!-- $$$ of all products in DB --> */

let amountOfProducts = {
    title:'Amounts in products', 
    color:'success',
    cuantity:'$546.456', 
    icon:'fas fa-dollar-sign fa-2x text-gray-300'
}

/* <!-- Amount of users in DB --> */

let amountOfUsers = {
    title:'Users quantity' ,
    color:'warning',
    cuantity:'38',
    icon:'fas fa-user-check fa-2x text-gray-300'
}

let cartProps = [productsInDB, amountOfProducts, amountOfUsers];

function ContentRowTop(){
    return (
        <div className="row">

            <SmallCard atributes={cartProps} />

        </div>
    )
}

export default ContentRowTop;