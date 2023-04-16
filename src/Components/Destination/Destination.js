import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';



const Destination = () => {
    const [date, setDate] = useState();
    const dateClick = (event) => {

        const showDate = event.target.value;
        setDate(showDate);

        console.log(showDate);
    }


    return (
        <div className=' bg-cover  bg-no-repeat h-screen w-full' style={{ backgroundImage: "url('https://media.istockphoto.com/id/474267374/photo/reflections-on-a-lake.jpg?s=1024x1024&w=is&k=20&c=GsjOKolPxOOUwD_aZxQe9FGttybPzOoIA-TQ-QwFwpc=')" }}>
            <div className='grid grid-cols-2'>
                <div className='m-20'>
                    <h1 className='text-6xl text-white rounded-md bg-orange-950 bg-opacity-50'>COX'S BAZAR</h1>
                    <div> {moment().format('Do, MMMM  YYYY, h:mm:ss a')};</div>
                    <p className='text-xl text-white p-10 rounded-md bg-orange-950 bg-opacity-50'>Cox's Bazar is a seaside town located in the southeastern region of Bangladesh. It is known for its beautiful sandy beaches, breathtaking views of the Bay of Bengal, and warm hospitality of the local people.

                        Cox's Bazar is home to the world's longest natural sea beach, which stretches over 120 km. The beach is lined with small restaurants, cafes, and souvenir shops, making it a popular destination for tourists. The town also has many other attractions, including Buddhist temples, markets, and the Himchori Waterfall.

                        One of the main attractions of Cox's Bazar is the panoramic view of the Bay of Bengal from the top of the Cox's Bazar lighthouse. The lighthouse, which is over 150 years old, is open to visitors and provides a stunning view of the beach and the surrounding area.</p>
                </div>
                <div>



                    <div className="card-body bg-white w-2/3 h-2/3 mt-20 rounded-md">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" placeholder="
                            Dhaka" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination </span>
                            </label>
                            <input type="text" placeholder="Cox's bazar" className="input input-bordered" />

                        </div>
                        <div className='grid grid-cols-2'>
                            <div>
                                <label className='label'>
                                    <span> From</span>
                                </label>




                                <input type="date" name="" className='input input-bordered input-success' onChange={dateClick} id="" />



                            </div>
                            <div>
                                <label className='label'>
                                    <span> To</span>
                                </label>
                                <input type="date" name="" className='input input-bordered input-success' onChange={dateClick} id="" />



                            </div>
                            <div className='flex items-center ml-14'>
                                <button className='btn btn-success w-80 mt-10'>Start Booking </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div >

    );
};

export default Destination; 