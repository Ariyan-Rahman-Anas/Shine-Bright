const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-spin h-10 w-10 border-8 border-dotted border-sBtnBg border-t-transparent rounded-full mr-2"></div>
      {/* <p className="font-semibold px-4 mt-3 ">Loading...</p> */}
    </div>
  );
};
export default Loading;