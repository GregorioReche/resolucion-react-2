import React from 'react';

function SmallCard(props){
    return(
        props.atributes.map( (atributes) => {
            return (
            <div className="col-md-4 mb-4">
                <div className={`card border-left-${atributes.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${atributes.color} text-uppercase mb-1`}> {atributes.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{atributes.cuantity}</div>
                            </div>
                            <div className="col-auto">
                                <i className={atributes.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        )
    )
}

export default SmallCard;