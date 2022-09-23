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


                <h1 className='my-4 pb-2 text-xl border-b-2 font-medium '>General Information</h1>
                <select className="select select-bordered w-full max-w-xs mr-10 mb-8" required>
                    <option disabled selected>Last Completed Degree</option>
                    <option>Higher Secondary Ceritificate </option>
                    <option>Diploma Holder</option>
                    <option>A- Level </option>
                </select>
                <select className="select select-bordered w-full max-w-xs mr-10 mb-8" required>
                    <option disabled selected>Passing Year</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select>
                <select className="select select-bordered w-full max-w-xs mr-10 mb-8" required>
                    <option disabled selected>Exam Board</option>
                    <option>Dhaka </option>
                    <option>Rajshahi </option>
                    <option>Mymensigh </option>
                    <option>Chitagong </option>
                    <option>Cumilla </option>
                    <option>Sylhet </option>
                    <option>Jessore </option>
                    <option>Dinajpur </option>
                </select>

                <h1 className='my-4 pb-2 text-xl border-b-2 font-medium '>Personal Information</h1>
                <div className='grid lg:grid-cols-3'>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Full Name</label>
                        <input type="text" placeholder="Full name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Father's Name</label>
                        <input type="text" placeholder="Father's name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Mother's Name</label>
                        <input type="text" placeholder="Mother's name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Present Address </label>
                        <input type="text" placeholder="Present address" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Permanent Address</label>
                        <input type="text" placeholder="Permanent address" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Postal Code</label>
                        <input type="number" placeholder="Area code" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Personal Email </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Personal Phone</label>
                        <input type="number" placeholder="+880" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">Gurdian Phone</label>
                        <input type="number" placeholder="+880" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control w-full max-w-xs mt-10">
                    <input type="submit" placeholder="+880" className="input input-bordered w-full max-w-xs btn btn-primary" />
                </div>

            </form>
        </div>
    );
};

export default Addmission;