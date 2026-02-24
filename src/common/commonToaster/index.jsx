import {toast} from 'react-hot-toast';
export const showToast = {
    success: (message, options ={}) =>{
        toast.success(message,{
            duration: 3000,
            position:'top-right',
            ...options ,
        })
    },
    error: (message, options ={})=> {
        toast.error(message,{
            duration: 4000,
            position:'top-right',
            ...options,
        });
    },
    dismiss: (toastId)=> {
        toast.dismiss(toastId);
    }
};