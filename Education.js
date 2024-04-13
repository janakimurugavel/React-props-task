import React from 'react';
const Degree = (props) =>{

    return(
        <div>
           
{
    props.list.map((detatils)=>{
        
        return(
            <div><table style={{border: '1px solid #000'}}>
            <tbody>
            <tr>
            <td><h1>{detatils.name}</h1></td> 
            <td><h1>{detatils.sec}</h1></td> 
            </tr>
                </tbody>
                </table>
            </div>
        )
    }         )
}

        </div>
    );
};
const Department = () =>{
    const depdetails =[{
        name : "IT",
        sec :"A"},
        {
            name : "IT",
            sec :"B"
        }
      
    ]
      
    return(
        <div>
            <Degree list={depdetails} />
        </div>
    )
}
export default Department;