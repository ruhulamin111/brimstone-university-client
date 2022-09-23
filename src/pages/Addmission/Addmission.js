import React from 'react';

const Addmission = () => {
    return (
        <div className='w-11/12 mx-auto bg-secondary p-8'>
            <h1 className='pb-4 text-xl border-b-2 '>Applicant Information</h1>
            <form className='py-5 '>
                <select className="select select-bordered w-full max-w-xs mr-10">
                    <option disabled selected>Applicant Type</option>
                    <option>Local Student </option>
                    <option>Internation Student</option>
                </select>
                <select className="select select-bordered w-full max-w-xs" required>
                    <option disabled selected>Program Type</option>
                    <option>Bachelor Program</option>
                    <option>Masters Program</option>

                </select>
            </form>

        </div>
    );
};

export default Addmission;