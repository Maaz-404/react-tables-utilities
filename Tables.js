import React from 'react';

const Tables = () => {

//Sample Json data
            var data = [
                {
                    "title": "Operating Systems(OS)",
                    "author": "Unknown",
                    "price": "380",
                    "category": "Computer Science(CS)",
                    "description": "Nothing"
                },
                {
                    "title": "Human Computer Interaction (HCI)",
                    "author": "Qamar Shahzad",
                    "price": "510",
                    "category": "Information Technology(IT)",
                    "description": "UX/UI Design"
                },
                {
                    "title": "Database",
                    "author": "Tasleem Mustafa",
                    "price": "455",
                    "category": "Information Technology(IT)",
                    "description": "Nothing"
                }
            ]


//1st method
return (

  data.map((data, index) => {
         const { title, author, price, category } = data //destructuring
         return (
            <tr key={title}>
               <td>{title}</td>
               <td>{author}</td>
               <td>{price}</td>
               <td>{category}</td>
            </tr>
         )
      })
);
//   -------->  Note:  <---------
/*2nd Method
return(

  <div>
      {data.map(data => (

<table>

        <th>{data.title}</th>
        <tr>{data.author}</tr>
</table>

      ))}
    </div>
  );
*/

}
export default Tables;