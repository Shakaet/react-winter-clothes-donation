import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataLoad from './DataLoad';

const Campaigns = () => {

    let data= useLoaderData()
    console.log(data)
    return (
        <div>
           

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ms-5 mr-5'>
             {
               data.map(data=><DataLoad key={data.id} data={data}></DataLoad>)
             }

           </div>

        </div>
    );
};

export default Campaigns;