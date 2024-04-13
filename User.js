import React from 'react';

const User = (props) => { 
    return (
        <div>
           
{
 props.list.map((details) =>
 {
   return(
    
        <div><table style={{border: '1px solid #000'}}>
            <tbody>
            <tr>
           <td><h1>{details.name}</h1></td> 
           <td><h1>{details.age}</h1></td></tr>
           </tbody>
        </table>
           
        </div>
         )
 }            
             )  
}                  
    </div>
    );
};

const Profile = () => {

    const pro ={
        name :"Janaki",
        age :25
    };
    const proof =[{
        name :"Janu harsha",
        age :27
       
    },
    {
        name :"Aravind",
        age :30
    }
];
    return (
        <div>
            <User list={proof}/>
        </div>
    );
};

export default Profile;