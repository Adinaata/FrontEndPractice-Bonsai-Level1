import { IoIosArrowForward } from "react-icons/io";

const AddOns = () => {
  return (
    <section className=" w-full">
        <div className="max-w-[1000px] w-full h-auto flex flex-col mx-auto mb-20">
        <p className="flex justify-center text-4xl mb-16 text-grayBon">Super Charge your work with add-ons</p>
        <div className="flex flex-col gap-2 text-grayBon pb-24">
            <div className="bg-white rounded-md flex items-center justify-between px-10 py-6 shadow-xl border hover:bg-neutral-100 cursor-pointer">
                <div>
                    <p className="text-xl font-medium">Collaborators</p>
                    <p>Invite other users to specific projects for limited access and functionality.</p>
                </div>
                <p className="text-3xl font-semibold p-2">Free</p>
            </div>
            <div className="bg-white rounded-md flex items-center justify-between px-10 py-6 shadow-xl border hover:bg-neutral-100 cursor-pointer">
                <div>
                    <p className="text-xl font-medium">Partners</p>
                    <p>Invite other users for full account access and company management.</p>
                </div>
                <p className="text-4xl font-semibold flex flex-col items-center p-2">$9 <span className="text-xs font-normal">/MONTH</span></p>
            </div>
            <div className="bg-white rounded-md flex items-center justify-between px-10 py-6 shadow-xl border hover:bg-neutral-100 cursor-pointer">
                <div>
                    <p className="text-xl font-medium">Bonsai Tax</p>
                    <p>Track exposes, identify write-offs, and estimate quarterly taxes easily.</p>
                    <div className="flex items-center hover:underline w-24">
                    <p className="text-greenBon "
                    >Learn More</p>
                    <IoIosArrowForward color="#00b289" size={15} />
                    </div>
                </div>
                <p className="text-4xl font-semibold flex flex-col items-center p-2">$10 <span className="text-xs font-normal">/MONTH</span></p>
            </div>
           
           
        </div>

        <div className="bg-[#F2FAFE] px-20 py-32 h-auto rounded-md flex justify-between items-center gap-8">
            <div className="mr-2">
                <h1 className="text-6xl mb-4">It&apos;s <span className="text-greenBon font-medium">your</span> business.</h1>
                <h1 className="text-6xl">We&apos;re here to help it grow.</h1>
            </div>
            
            <button 
              className='bg-greenBon text-white w-[12rem] h-[5rem] rounded-md uppercase font-medium hover:bg-yellowBon'
              >Start free</button>
        </div>
        </div>
    </section>
  )
}

export default AddOns