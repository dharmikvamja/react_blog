// import React, { useEffect, useState } from "react";

// function Getlocal() {
//     const [textDATA, settextDATA] = useState([]);
    


//     useEffect(() => {
//       const storedData = localStorage.getItem('demo');
//       console.log(JSON.parse(storedData))
//       if (storedData) {
//         settextDATA(JSON.parse(storedData));
//       }
//     }, []);
//     return (
//         <div className="container mt-5 h-100"> 
//         <h1>Get Data</h1>
//             <table className="table  table-bordered table-responsive">
//                 <tr scope="row">
//                     <th scope="col" className="p-3">EMAIL</th>
//                     <th scope="col" className="p-3">PASSWORD</th>
//                 </tr>
//                {
//                    textDATA.map((e)=>{
//                     return <tr>
//                         <td className="p-2">{e.email}</td>
//                         <td className="p-2">{e.password}</td>
//                     </tr>
//                    }) 

//                }
               
//             </table>
//         </div>
//     );
// }

// export default Getlocal;
