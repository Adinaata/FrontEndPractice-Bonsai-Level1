// import './Toggle.css';

function Toggle (){
    return (
        <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600">
  <div className="absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform duration-300 peer-checked:translate-x-5"></div>

  </div>
</label>



    )
}

export default Toggle;