

const Login = () => {
  return (
    <div className="h-screen  bg-yellow-50 flex justify-center items-center ">
    <div className=" flex flex-col  space-y-4  item-center px-40 py-20 rounded-2xl bg-green-950 text-center text-2xl ">
    <h1 className="font-bold text-4xl  text-opacity-100py-1 text-white underline decoration-sky-600 hover:decoration-yellow-10">Login</h1>
    
<input className=" focus:ring-2 w-[100%] p-2 rounded-2xl text-center hover:placeholder:bg-slate-500" type="email" placeholder="Email" required/>
<input className=" focus:ring-2 w-[100%] p-2 rounded-2xl text-center hover:placeholder:bg-slate-500" type="password" placeholder="Password" required/>


<button className="rounded-lg bg-green-400 py-2  hover:bg-blue-400">Submit</button>




    </div>
    </div>
  )
}

export default Login