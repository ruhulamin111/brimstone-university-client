import React from 'react';

const Addmission = () => {
    return (
        <div className='w-11/12 mx-auto bg-secondary p-8'>
            <form className='py-5 '>
                <h1 className='my-4 pb-4 text-xl border-b-2 font-medium '>Applicant Information</h1>
                <select className="select select-bordered w-full max-w-xs mr-10 mb-8" required>
                    <option disabled selected>Applicant Type</option>
                    <option>Local Student </option>
                    <option>Internation Student</option>
                </select>
                <select className="select select-bordered w-full max-w-xs mr-10 mb-8" required>
                    <option disabled selected>Program Type</option>
                    <option>Bachelor Program </option>
                    <option>Masters Program</option>
                </select>
                <select className="select select-bordered w-full max-w-xs mr-10 mb-8" required>
                    <option disabled selected>Last Completed Degree</option>
                    <option>Higher Secondary Ceritificate </option>
                    <option>Diploma Holder</option>
                    <option>A- Level </option>
                </select>

                <h1 className='my-4 pb-2 text-xl border-b-2 font-medium '>General Information</h1>
                <select className="select select-bordered w-full max-w-xs mr-10 mb-8" required>
                    <option disabled selected>Last Completed Degree</option>
                    <option>Higher Secondary Ceritificate </option>
                    <option>Diploma Holder</option>
                    <option>A- Level </option>
                </select>
            </form>

        </div>
    );
};

export default Addmission;