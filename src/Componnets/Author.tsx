import img from '../assets/images/adam.f69b0b90.jpg'
export default function Author() {
  return (
<section id="author">
    <div className="container px-5 mx-auto my-32 text-center">
        <h2 className='font-bold text-4xl'>Best Practice dosen't Really Work </h2>
        <p className='mt-8 max-w-5xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis repellat veniam doloribus tenetur nesciunt expedita doloremque totam ipsum voluptatem et numquam, enim temporibus esse. Aliquid eveniet quae culpa minima ad!</p>
        <div className="mt-10 mx-10 flex flex-col space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
            <div className="md:w-1/3 flex items-center flex-col p-6 space-y-2 rounded-lg border border-slate-300 bg-slate-200">
                <img src={img} alt="avatar" className='w-16 rounded-full -mt-14'/>
                <h5 className='font-bold text-lg text-slate-900'>Adam Sandler</h5>
                <p className='leading-6 text-sm text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo voluptas deleniti minima ipsam ut! Iste totam maxime ex nisi odio praesentium eum ipsum, animi ab officia porro quaerat suscipit?</p>
            </div>   
            <div className="md:w-1/3 flex items-center flex-col p-6 space-y-2 rounded-lg border border-slate-300 bg-slate-200">
                <img src={img} alt="avatar" className='w-16 rounded-full -mt-14'/>
                <h5 className='font-bold text-lg text-slate-900'>Adam Sandler</h5>
                <p className='leading-6 text-sm text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo voluptas deleniti minima ipsam ut! Iste totam maxime ex nisi odio praesentium eum ipsum, animi ab officia porro quaerat suscipit?</p>
            </div> 
                <div className="md:w-1/3 flex items-center flex-col p-6 space-y-2 rounded-lg border border-slate-300 bg-slate-200">
                <img src={img} alt="avatar" className='w-16 rounded-full -mt-14'/>
                <h5 className='font-bold text-lg text-slate-900'>Adam Sandler</h5>
                <p className='leading-6 text-sm text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo voluptas deleniti minima ipsam ut! Iste totam maxime ex nisi odio praesentium eum ipsum, animi ab officia porro quaerat suscipit?</p>
            </div>    
            
        </div>
    </div>

</section>  )
}
