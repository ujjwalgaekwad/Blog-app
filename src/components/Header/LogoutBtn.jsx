import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logOut().then((res)=> {
          dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler} className=' inline-bock px-8 py-2 mx-1 duration-200 bg-[#202020] hover:text-gray-300 text-gray-200 rounded-md '>Log out</button>
  )
}
  
export default LogoutBtn;
