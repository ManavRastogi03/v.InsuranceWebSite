const Loader = () => {
    return (
      <div className="relative w-[96px] h-[64px] rotate-[45deg] mt-[-48px] perspective">
        <div className="absolute w-[32px] h-[32px] top-0 left-0 transform-gpu animate-box1 bg-green-500"></div>
        <div className="absolute w-[32px] h-[32px] top-[32px] left-0 transform-gpu animate-box2 bg-green-600"></div>
        <div className="absolute w-[32px] h-[32px] top-[32px] left-[32px] transform-gpu animate-box3 bg-green-400"></div>
        <div className="absolute w-[32px] h-[32px] top-0 left-[64px] transform-gpu animate-box4 bg-green-300"></div>
      </div>
    );
  };
  
  export default Loader;
  