const DigitalClock = () => {

    const getCurrentDate = () => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };


  return (
    <>
      <div className="App">
        <div className='border border-gray-700 p-10 bg-orange-100 h-80 flex flex-col gap-5 justify-center w-96'>
          <div className='text-orange-400 font-bold text-2xl w-80 text-center'>
            Digital Clock
          </div>

          <div className='text-orange-400 font-bold text-2xl w-80 text-center'>
            Digital Clock
          </div>
          <div className='text-orange-400 font-bold text-2xl w-80 text-center'>
            {getCurrentDate()}
          </div>

        </div>
      </div>
    </>
  );
}

export default DigitalClock;