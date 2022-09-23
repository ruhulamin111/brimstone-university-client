import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <button type="button" class="bg-indigo-500 text-white px-4 pb-2 rounded" disabled>
                <svg class="animate-spin h-5 w-5 " viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        </div>
    );
};

export default Loading;