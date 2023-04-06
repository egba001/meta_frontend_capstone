import { Testimonials } from '../data.js';

const Testimonial = () => {
    return (
        <div className="bg-yellow h-[560px] flex flex-col items-center juustify-center">
            <h3 className='mb-36 mt-16 font-bold text-xl'>Testimonials</h3>
            <div className='flex'>
                <ul className='flex' role='list'>
                    {Testimonials.map(user => {
                        return (
                            <li className='mr-4 w-[200px] h-[200px] rounded-lg shadow-md p-3 bg-white'>
                                <div>
                                    <p>{user.text}</p>
                                    <p>{user.review}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Testimonial;