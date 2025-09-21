import {  toast } from 'react-toastify';
export function ShowSucess(message){
    toast.success(message,
        {
            position:toast.POSITION_TOP_RIGHT
        }
    )
}
export function ShowError(message){
    toast.error(message, {
            position:toast.POSITION_TOP_RIGHT
        })
}