
function Navbar() {
  return (
    <nav className='w-screen fixed  top-0 z-50 mb-4 bg-zinc-800 p-2 flex flex-row justify-between' >
     
     <div className=" flex flex-row align-middle  justify-between ">
     <img src="motionarteffect-img2.png" alt="logo"  className="mr-2 w-10 h-10 rounded-xl"/>
     <h1 className="self-center text-white font-bold md:text-xl text-lg mr-1">envato</h1>
     <h1 className="self-center text-green-400 font-bold  md:text-xl text-lg">market</h1>
     </div>

     <a  className=" p-2 md:text-base text-sm self-center bg-green-600 text-white rounded-md">Buy Now</a>
    </nav>
  );
}

export default Navbar;