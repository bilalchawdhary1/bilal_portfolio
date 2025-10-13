const LoadingSpinner = () => {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin'></div>
        <p className='text-gray-600 font-medium'>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
