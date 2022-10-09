import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <button type="button" className="bg-indigo-500 text-white px-4 py-2 rounded" disabled> Loading...
            </button>
        </div>
    );
};

export default Loading;