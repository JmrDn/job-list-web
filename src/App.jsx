import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
}
from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import JobsPage from './Pages/JobsPage';
import JobPage, {jobLoader} from './Pages/JobPage';
import { toast } from 'react-toastify';
import AddJobPage from './Pages/AddJobPage';
import UpdateJobPage from './Pages/UpdateJobPage';
import APIPage from './Pages/APIPage';

function App() {

  const deleteJob = async (id) =>{
    try{
      const res = await fetch(`/api/jobs/${id}`,{
        method: 'DELETE',
      });
  
      if (!res.ok){
        toast.error('Failed to delete job');
      }
      else{
        toast.success('Job deleted successfully');
      }
    } catch(error){
      toast.error('Failed to delete', error);
    }
  }

  const addJob = async (newJob) =>{
    try{
      const res = await fetch('/api/jobs',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob),
      });

      if (!res.ok){
        toast.error('Failed to add job');
      }
      else{
        toast.success('Job added successfully');
      }
    } catch (error){
      toast.error('Failed to add job', error);
    }
  }

  const updateJob = async (job) =>{
    try{
      const res = await fetch(`/api/jobs/${job.id}`,{
        method:'PUT',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job)
      });
  
      if (!res.ok){
        toast.error('Failed to update job');
      }
      else{
        toast.success('Job updated');
      }
    }catch(error){
      toast.error('Failed to update job', error);
    }
  }

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} documentTitle='Job'/>} loader={jobLoader}/>
      <Route path='/add-jobs' element={<AddJobPage addNewJob={addJob}/>}/>
      <Route path='/jobs/:id/update-job' element={<UpdateJobPage updateJob={updateJob}/>} loader={jobLoader}/>
      <Route path='/football' element={<APIPage/>}/>
    </Route>
    
  )
 )

  return <RouterProvider router={router}/>
}

export default App
