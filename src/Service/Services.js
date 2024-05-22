import axios from 'axios';
import { toast } from 'react-toastify';
const URL ="https://freeapi.gerasim.in/api/TrainApp/";
const getData =async(endpoint)=>{
    
    try {
        
    const result =await axios.get(`${URL}${endpoint}`);
    return result.data.data;
    } catch (error) {
        toast.alert(error);
    }
}
const postData =async(endpoint,obj)=>{
    debugger
try {
    debugger
    const result = await axios.post(`${URL}${endpoint}`,obj);
    return result.data.data;
} catch (error) {
    toast.error(error);
}
}
export{getData,postData}