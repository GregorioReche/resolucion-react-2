import React from 'react';
import PropTypes from 'prop-types'

function SmallCard(props){
    return(
        props.atributes.map( (atributes, index) => {
            return (
            <div className="col-md-4 mb-4" key={index}>
                <div className={`card border-left-${atributes.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${atributes.color} text-uppercase mb-1`}> {atributes.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{atributes.cuantity}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${atributes.icon} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        )
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaulProps = {
    atributes: [
        {
        title: 'Title',
        color: 'primary', 
        cuantity: 'No Cuatity',
        icon: 'fa-clipboard-list'
        }  
    ]
}

/* ACCEDIENDO A PROPIEDADES DE OBJETOS DENTRO DE UN ARRAY */

SmallCard.propTypes = {
    atributes: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cuantity: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
            icon: PropTypes.oneOf([
                'fa-clipboard-list',
                'fa-dollar-sign',
                'fa-user-check'
            ])
        })
    )

}


export default SmallCard;