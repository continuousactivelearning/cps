
import api from './api';

export const getDetails = async ()=>{
    const response = await api.get('/me');
    return response.data;
}
export const uploadPhoto = async(photo:string)=>{
    await api.post('/me/upload-photo',{photo});
};
export const updateDetails= async({item,value}:{item:string, value:number})=>{
    await api.post('/me/update',{item,value});
};