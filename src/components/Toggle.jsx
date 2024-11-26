function Toggle({ onChange }) {
  return (
    <label className="relative flex justify-between items-center cursor-pointer">
      <input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
        onChange={onChange}
      />
      <span className="w-11 h-7 flex items-center flex-shrink-0 p-0.5 bg-greenBon rounded-full duration-300 ease-in-out after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-lg after:duration-300 peer-checked:after:translate-x-4 after:content-[''] after:border after:border-neutral-400 cursor-pointer"></span>
    </label>
  );
}

export default Toggle;
