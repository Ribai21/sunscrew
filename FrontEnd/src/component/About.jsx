import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
    triggerOnce: false,   // Only animate once
    threshold: 0.3,       // Start when 30% visible
  });
  return (
    <div>
        <section ref={ref} id='about' className="bg-gray-100 p-3 text-center   md:p-10">
            <h1 className='text-5xl md:m-3 m-5 font-bold'>Our <span className='text-yellow-500'>Story</span><hr className='bg-yellow-500 h-1 w-[10%] rounded mt-3 mx-auto' /></h1>
            <p className='indent-32  text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis voluptatibus autem, fugit iusto perspiciatis omnis facere provident, nisi sequi, eius adipisci? Eveniet perferendis repellat ducimus? Nulla nostrum maiores placeat nisi, ab, in repellat dolorum libero, soluta aspernatur debitis aperiam quia nam unde porro fugit enim! Adipisci dolorum ab fugiat nesciunt earum expedita dignissimos, soluta deleniti assumenda nostrum quam consequuntur quas odit ipsam veritatis saepe. Praesentium laboriosam ullam optio eius magni labore dolor consequuntur quis nisi minus doloremque nemo, vitae, commodi a quas consequatur velit. Eveniet aliquid magni dolorem voluptatem iusto maxime dolores temporibus esse neque, explicabo asperiores odio minima sed reiciendis culpa atque repellendus quasi assumenda rem necessitatibus officiis! Accusantium corrupti aliquid, nihil autem, nisi non tenetur voluptate quo, eaque quis quia cum officia quisquam labore alias repellat mollitia culpa iusto dolorum et iste incidunt delectus aperiam id. Nesciunt omnis, temporibus eligendi ab quisquam sequi ex hic mollitia necessitatibus ad ea repellat id quod tenetur laborum veritatis delectus! Itaque ipsam iusto, dignissimos dolorum accusantium facere sed cupiditate esse asperiores a, quas beatae obcaecati voluptas sint numquam nihil dolore ipsa porro voluptatum blanditiis. Inventore officia est pariatur, ullam accusantium recusandae quisquam iste nam! Totam assumenda pariatur suscipit asperiores. Mollitia, qui.</p>
        </section>
        <section className='flex bg-[#1d2a3a] justify-evenly items-center  flex-wrap gap-5 p-5 text-capitaliz'>
            <div className="flex flex-col text-white text-xl justify-center gap-2 items-center"><span className='text-yellow-500 text-4xl font-bold '><CountUp end={25} duration={2}/>+</span>years of experience</div>
            <div className="flex flex-col text-white text-xl justify-center gap-2 items-center"><span className='text-yellow-500 text-4xl font-bold '><CountUp end={365} duration={2} />Days</span>stock Available</div>
            <div className="flex flex-col text-white text-xl justify-center gap-2 items-center"><span className='text-yellow-500 text-4xl font-bold '><CountUp end={200} duration={2} />+</span>happy customer</div>
        </section>
    </div>
  )
}

export default About