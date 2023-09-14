import React from "react";

const Contact = () => {
    return (
        <div name='contact' className="w-full h-screen bg-[#111111] text-gray-300 flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/542a1e89-e211-466a-985f-bfeb4d14a7f1" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#ffbf50]">Contact</p>
                    <p className="text-gray-300 py-4">// Submit the form below or shoot me an email - bbtanapon@gmail.com</p>
                </div>
                <input className="border-solid border-2 border-[#ffbf50] bg-[#7e7e7e41] p-2" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 border-solid border-2 border-[#ffbf50] bg-[#7e7e7e41]" type="email" placeholder="Email" name="email" />
                <textarea className="border-solid border-2 border-[#ffbf50] bg-[#7e7e7e41] p-2" name="message"  rows="10" placeholder="Message"></textarea>
                <button className="text-white border-2 hover:bg-[#ffbf50] hover:border-[#111] hover:text-[#111] hover:duration-150 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>

        </div>
    )
}

export default Contact