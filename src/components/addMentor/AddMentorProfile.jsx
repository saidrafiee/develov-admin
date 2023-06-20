import Image from 'next/image';
import React from 'react';

export default function AddMentorProfile() {

    return (

        <div className='flex flex-col gap-5'>
            <header>
                <ul className='flex gap-2'>
                    <li className="flex items-center gap-3 border        w-fit h-fit px-3 py-1 rounded-full border-blue-800 text-blue-800">
                        <div className="w-6 h-6 p-2 rounded-full border border-blue-800 flex justify-center items-center ">1</div>
                        Profil
                    </li>
                    <hr className='w-10 mt-5 border rounded-full border-gray-300' />
                    <li className="flex items-center gap-3 border w-fit h-fit px-3 py-1 rounded-full border-gray-300 text-gray-300">
                        <div className="w-6 h-6 p-2 rounded-full border border-gray-300 flex justify-center items-center ">2</div>
                        Komitmen
                    </li>
                    <hr className='w-10 mt-5 border rounded-full border-gray-300' />
                    <li className="flex items-center gap-3 border w-fit h-fit px-3 py-1 rounded-full border-gray-300 text-gray-300">
                        <div className="w-6 h-6 p-2 rounded-full border border-gray-300 flex justify-center items-center ">3</div>
                        Akun Bank
                    </li>
                </ul>
            </header>
            <section className='flex gap-5 items-center '>
                <img className='rounded-xl'
                    src="https://placeholder.com/640x640"
                    alt="profile-picture"
                    width={130}
                    height={130} />
                <div>
                    <button className='text-sm w-fit h-fit py-2 px-7 rounded-md bg-gray-200 no-animation hover:bg-gray-300  flex-1 items-center justify-center font-semibold'>Pilih Foto</button>
                    <br />
                    <p className='text-sm'>Ketentuan Foto:<br />
                        • Maksimal 1MB<br />
                        • Resolusi minimal 64 x 64
                    </p>
                </div>
            </section>
            <section>
                <form className="form-control w-full">
                    <div className='flex gap-5'>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Nama Mentor</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-96" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Lokasi</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-96" />
                        </div>
                    </div>
                </form>
            </section>
        </div>


    )

}