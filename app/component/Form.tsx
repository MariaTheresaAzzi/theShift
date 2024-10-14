import { MdLocationPin, MdCall, MdEmail  } from "react-icons/md";

export default function Form() {
  
    return(
        <div className="grid grid-cols-1 gap-10 items-center py-8 px-2 md:grid-cols-[2fr_auto_1fr]">
            <div className="py-4">
                
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent block w-full p-2.5" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent block w-full p-2.5" placeholder="Doe" required />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent block w-full p-2.5" placeholder="Flowbite" required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
    </div>
    <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent block w-full p-2.5 mt-1"
            required
          ></textarea>
        </div> 
    <button type="submit" className="text-white bg-[#8243FF] hover:bg-[#783feb] focus:ring-4 focus:outline-none focus:ring-[#783feb]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">SEND</button>
</form>

            </div>
            <div className="h-full w-px bg-gray-300 hidden md:block"></div> {/* This is the vertical line */}
            <div className="py-4 flex flex-col h-full">
                <div className="font-bold pb-2">If you prefer, you can also contact us directly via email or phone:</div>
                <div>
                    <ul>
                        <li className="flex flex-row items-center gap-2 p-2"><MdEmail />info@theshiftagency.com</li>
                        <li className="flex flex-row items-center gap-2 p-2"><MdCall />(123) 456-7890</li>
                        <li className="flex flex-row items-center gap-2 p-2"><MdLocationPin />123 Main Street, City, Country</li>
                    </ul>
                </div>
                <div className="font-bold pb-2 mt-8 flex h-full justify-end items-end">
                    <div className="font-bold">We look forward to hearing from you and exploring how we can help your business thrive.</div>
                </div>
            </div>
        </div>
    );

}