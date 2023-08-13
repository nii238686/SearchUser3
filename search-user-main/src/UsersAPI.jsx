import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./main";

function FetchApiData(){
    const[user , setUser] = useState('')
    const[userData , setUserData] = useState([])
    const[searched , setSearched] = useState(false)
    const[loading , setLoading] = useState(false)

    const theme = useContext(ThemeContext)
    console.log(theme)

function handerclick(){
    if(user.trim() === ''){
        alert('hello')
    } else{
     getData()
     setSearched(true)
    }
}

   const getData = async()=>{
    setLoading(true)
    const request = await fetch(`https://api.github.com/users/${user}`)
    if(request.ok){
        const response = await request.json()
        console.log(response)
      setUserData(response)
     
    }else{
        console.log('user not found')
        setUserData(null)
    }
    setLoading(false)
    
   }
   
   useEffect(()=>{
    setTimeout(()=>{
getData()
    }, 5000)
    
   } , [theme])

//    style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    return(
        <>
       {userData ? (<div className=" images flex flex-col items-center bg-slate-300 w-[35%] m-auto rounded-[10px] p-[30px] mt-[20px]" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div className="columns-positions flex justify-center w-[10%]">
       <input type="text" className="border-gray-200 bg-slate-200 text-black border-[2px] outline-emerald-400 rounded-[10px] p-1 w-[100%] mb-[20px] "   value={user} onChange={(event) => setUser(event.target.value)}/>
       <svg className="icon-position text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={handerclick}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

       </div>
        <div className=" container-element  w-[70%]">
            {loading ?(
              <div class="loader">
              <span class="l">L</span>
              <span class="o">o</span>
              <span class="a">a</span>
              <span class="d">d</span>
              <span class="i">i</span>
              <span class="n">n</span>
              <span class="g">g</span>
              <span class="d1">.</span>
              <span class="d2">.</span>
            </div>
            ): searched ? (
            userData ?(
                <>
                <img src={userData.avatar_url} className=" w-[180px] h-[180px] rounded-[50%] object-cover border-sky-500 border-[2px]" alt="" />
            <h4><span>Name: </span>{userData.name}</h4>
            <h4><span>userName: </span>{userData.login}</h4>
            <h4><span>Followers: </span>{userData.followers}</h4>
            <h4><span>Following: </span> {userData.following}</h4>
            <h4><span>Repo: </span>{userData.public_repos}</h4>
                </>
            ):(
                <p>Sorry user not found</p>
            )
            ):(
                <p>Please search for the user you want</p>
            )}
            
        </div>
       </div> ) : (
            <div className=" images flex flex-col items-center bg-slate-300 w-[35%] m-auto rounded-[10px] p-[30px] mt-[20px]">
            <div className="columns-positions flex justify-center w-[10%]">
           <input type="text" className="border-gray-200  border-[2px] outline-emerald-400 rounded-[10px] p-1 w-[100%] mb-[20px] "   value={user} onChange={(event) => setUser(event.target.value)}/>
           <svg className="icon-position" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={handerclick}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    
           </div>
            <div className=" container-element  w-[70%]">
                {loading ?(
                  <div class="loader">
                  <span class="l">L</span>
                  <span class="o">o</span>
                  <span class="a">a</span>
                  <span class="d">d</span>
                  <span class="i">i</span>
                  <span class="n">n</span>
                  <span class="g">g</span>
                  <span class="d1">.</span>
                  <span class="d2">.</span>
                </div>
                ): searched ? (
                userData ?(
                    <>
                    <img src={userData.avatar_url} className=" w-[180px] h-[180px] rounded-[50%] object-cover border-sky-500 border-[2px]" alt="" />
                <h4><span>Name: </span>{userData.name}</h4>
                <h4><span>userName: </span>{userData.login}</h4>
                <h4><span>Followers: </span>{userData.followers}</h4>
                <h4><span>Following: </span> {userData.following}</h4>
                <h4><span>Repo: </span>{userData.public_repos}</h4>
                    </>
                ):(
                    <p>Sorry user not found</p>
                )
                ):(
                    <p>Please search for the user you want</p>
                )}
                
            </div>
           </div> )}
        </>
    )
}

export default FetchApiData