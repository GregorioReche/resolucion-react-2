import React from 'react';


function ChartRow(props){
    return (
        props.data.map( (data, i) => {
            return(
                <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Description}</td>
                    <td>{data.Price}</td>
                    <td>
                        <ul>
                            {data.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li><span className="text-danger">{data.Colors[0]}</span></li>
                            <li><span className="text-primary">{data.Colors[1]}</span></li>
                            <li><span className="text-success">{data.Colors[2]}</span></li>
                        </ul>
                    </td>
                    <td>{data.Stock}</td>
                </tr>
            )
        }))
    }
    
        

export default ChartRow;