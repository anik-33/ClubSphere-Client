
import useAxiosSecure from '@/Hooks/UseAxiosSecure';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const CreateClub = () => {
    const axiosSecure = useAxiosSecure();
   const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Submit logic here
        console.log(data);
        const userInfo = {

            clubName: data.clubName,
            description: data.description,
            location: data.location,
            bannerImage: data.bannerImage,
            membershipFee: data.membershipFee,
            category: data.category,
            managerEmail: data.managerEmail

        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",

            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, "
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post('/clubs', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('Club created successfully');
                            Swal.fire({
                                title: "Deleted!",
                                text: "Club Created Succesfully!.",
                                icon: "success"

                            });
                            navigate('/clubs');
                        }
                        
                    })


            }
        });



    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Create a Club</h2>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Club Name</label>
                <input type="text" {...register('clubName', { required: true })} className="input input-bordered w-full" />
                {errors.clubName && <span className="text-red-500 text-sm">Club Name is required</span>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Description</label>
                <textarea {...register('description', { required: true })} className="textarea textarea-bordered w-full" />
                {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Location (City/Area)</label>
                <input type="text" {...register('location', { required: true })} className="input input-bordered w-full" />
                {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Banner Image URL</label>
                <input type="text" {...register('bannerImage', { required: true })} className="input input-bordered w-full" />
                {errors.bannerImage && <span className="text-red-500 text-sm">Banner image URL is required</span>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Membership Fee</label>
                <input type="number" min="0" {...register('membershipFee', { required: true, min: 0 })} className="input input-bordered w-full" />
                {errors.membershipFee && <span className="text-red-500 text-sm">Membership fee is required</span>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Category</label>
                <select {...register('category', { required: true })} className="select select-bordered w-full">
                    <option value="Tech">Tech</option>
                    <option value="Sports">Sports</option>
                    <option value="Photography">Photography</option>
                </select>
                {errors.category && <span className="text-red-500 text-sm">Category is required</span>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Manager Email</label>
                <input type="email" {...register('managerEmail', { required: true })} className="input input-bordered w-full" />
                {errors.managerEmail && <span className="text-red-500 text-sm">Manager email is required</span>}
            </div>
            <button type="submit" className="btn bg-[#f05537] text-white w-full">Create Club</button>
        </form>
    );
};

export default CreateClub;