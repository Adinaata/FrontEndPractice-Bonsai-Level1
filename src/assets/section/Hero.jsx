import Toggle from '../../components/Toggle'
import { workflow, workflowPlus } from '../../constants'

const Hero = () => {
  return (
    <section className='w-full'>
        <div className='max-w-[1000px] w-full h-auto items  justify-center mx-auto flex flex-col py-10'>
            <p className='flex justify-end mb-4 font-semibold text-sm text-greenBon'>2 MONTHS FREE!</p>
            <div className='flex itemc-center justify-between text-grayBon pb-10'>
              <h2 className='text-3xl font-semibold '>Plans & Pricing</h2>
              <div className='flex gap-4 items-center'>
              <p className='font-medium'>MONTHLY</p>
              <Toggle></Toggle>
              <p className='text-neutral-300 font-medium'>YEARLY</p>
              </div>
            </div>


          <div className='flex justify-between px-4 my-6 gap-4'>
            <div className='bg-white shadow-2xl border border-neutral-200 rounded-sm w-[500px]
            h-auto px-14 py-14 hover:scale-105 duration-150 '>
              <h4 className='text-grayBon font-semibold text-2xl'>Workflow</h4>
              <p className='text-2xl py-4 flex text-grayBon justify-start border-b border-greenBon mb-8 '>$ 
              <span className='text-6xl font-bold px-2'>19</span> 
              <span className='flex items-end'>
              /MONTH
              </span>
              </p>
              {workflow.map((item)=>(
                <p key={item.label}
                className='m-6 text-sm text-grayBon font-medium'
                >
                  {item.label}
                </p>
              ))}
              <button 
              className='bg-greenBon text-white px-20 py-3 text-sm rounded-md uppercase font-medium hover:bg-yellowBon mx-auto flex mt-6'
              >Start free</button>
            </div>
            <div className='bg-white shadow-2xl border border-neutral-200 rounded-sm w-[500px]
            h-auto px-14 py-14 hover:scale-105 duration-150 '>
              <h4 className='text-grayBon font-semibold text-2xl'>Workflow</h4>
              <p className='text-2xl py-4 flex text-grayBon justify-start border-b border-greenBon mb-8 '>$ 
              <span className='text-6xl font-bold px-2'>19</span> 
              <span className='flex items-end'>
              /MONTH
              </span>
              </p>
              {workflowPlus.map((item)=>(
                <p key={item.label}
                className='m-6 text-sm text-grayBon font-medium'
                >
                  {item.label}
                </p>
              ))}
              <button 
              className='bg-greenBon text-sm text-white px-20 py-3 rounded-md uppercase font-medium hover:bg-yellowBon mx-auto flex mt-6'
              >Start free</button>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Hero