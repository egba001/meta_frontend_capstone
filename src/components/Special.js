import { mealData } from "../data.js";
import { NavLink } from "react-router-dom";

const Special = () => {
    return (
        <div className="w-full px-[280px] rounded-b-lg bg-white pt-[10px] pb-[280px]">
            <div className="flex justify-between mt-20 w-full">
                <h2 className="font-bold text-[18pt] text-green">This Weeks Specials</h2>
                <button className="bg-yellow rounded-lg px-3">Online Menu</button>
            </div>
            <ul className="flex justify-center gap-4 mt-16">
                {mealData.map(meal => {
                    return (
                    <li className="w-[80%] h-[300px]">
                            <div className="h-full">
                                <img src={meal.image} className='object-cover w-full h-[60%] rounded-t-2xl' alt="Food" />
                                <div className="pt-5 px-5 h-[70%] rounded-b-xl bg-[#EDEFEE]">
                                    <div className="flex justify-between mb-4 items-center">
                                        <h3 className="text-green font-bold text-[14pt]">{meal.name}</h3>
                                        <p className="text-[#EE9972] font-medium">{meal.price}</p>
                                    </div>
                                    <p className="text-sm text-[#333333] mb-3">{meal.description}</p>
                                    <button><NavLink to='/reservation' className='text-sm'>Order a delivery</NavLink></button>
                                </div>
                            </div>
                    </li>
                )
                })}
            </ul>
        </div>
    )
}

export default Special;