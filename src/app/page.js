import React from 'react';
import Table from '../components/table';
import { callApi } from '@/utils/apiManager';


const  fetchData = async()=> {
  try {
    const  response = await callApi({method: "GET", path: "/api/leads"});
    return response.data?.data?.map(item=> {
      const date = new Date(item.updatedAt)
      
      return {...item, updatedAt: `${date.toDateString()} ${date.toLocaleTimeString()}`}}) || []
  }
  catch(err){
    console.log(err)
    return []
  }

}
const App = async() => {
 
  const columns = [
    { title: 'title', key: 'title', dataIndex: 'title', align: 'left' },
    { title: 'description', key: 'description', dataIndex: 'description', align: 'center' },
    { title: 'Time', key: 'updatedAt', dataIndex: 'updatedAt', align: 'left' },
  ];


  const data = await fetchData()

  return (
    <div style={{ padding: '20px' }}>
      <h1>Static Site</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
