import React from "react";

const Home = () => {
    return (
        <div className="">
            <div className="flex flex-wrap justify-around items-center">
                <div className=" border-4 border-black w-[500px] p-2 text-center items-center rounded-xl">
                    <h1 className="text-[30px] my-4">New York Yankees</h1>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ao5OTdzJqbHGWMnvb-jPJWPx67DykS1yiXVpZSp2jJwAMwu2BQud9OENUhAkrkZCs1g&usqp=CAU"
                        alt=""
                        className="border-4 border-black mx-auto mb-4"
                    />
                    <h1 className="text-[30px] my-4">$25.99</h1>
                    <button className=" content-center bg-white hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2 text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4 border-4 border-black"
            type="button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
