import React,{useEffect,useState} from 'react'
import { report_fetchfirstsuthors } from '../services/ConferenceServices'

function Listoffirstauthors() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const conference_id=sessionStorage.getItem('con');
    if(conference_id){
      report_fetchfirstsuthors(conference_id).then((res)=>{
          setData(res.data);
        }).catch((err)=>{

        })
    }
  },[]);
  return (
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
    {/*
      Heads up! 👋
    
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    */}
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mobile</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Affiliation</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Country</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Track</th>
          </tr>
        </thead>
    
        <tbody className="divide-y divide-gray-200">
        {data.map((item, index) => (
      <tr >
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.mobile}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.email}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.affiliation}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.country}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.paper_title}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.track_name}</td>


       
      </tr>
    ))}
        </tbody>
      </table>
    </div>
    
        </div>
  )
}

export default Listoffirstauthors