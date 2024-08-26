"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import { Autoplay } from 'swiper';
import useLanguage from '@/Hooks/useLanguage';
// import { Autoplay, Pagination } from 'swiper/modules';
// import {FreeMode, Autoplay, Pagination} from "swiper";



// const Clients = [
//     {id:1,
//         description:``,
//         name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
//         {id:2,
//             description:``,
//             name:'',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
//         {id:3,
//             description:``,
//             name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

// ]
const tests =[
  {
      reviewer: "John Doe",
      description: "I absolutely love the DIY Crafts Diamond Painting kits. The quality of the diamonds and the canvas is top-notch. Highly recommended!"
  },
  {
      reviewer: "Jane Smith",
      description: "The DIY Crafts Diamond Painting kit was a joy to work with. The instructions were clear and the end result was beautiful. I'm definitely buying more."
  },
  {
      reviewer: "Alex Johnson",
      description: "DIY Crafts Diamond Painting offers a great way to relax and create art at the same time. The variety of designs available is impressive."
  },
  {
      reviewer: "Emily Davis",
      description: "I'm new to diamond painting and found the DIY Crafts Diamond Painting kit to be a great starting point. The guide was easy to follow and the process was so much fun."
  }
];

const Testimonial = () => {


 
  const {text} = useLanguage()
    
    
  return (
    <Box id='FEEDBACK' className=' flex col ' sx={{width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'2em'}}>
 <Typography
 component='h1'
                className='sectionTitle  text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:1,
                  width:'100%',
                  display:'flex',
                  fontSize: {
                    xs: '1.62em',
                    sm: '2em',md:'2.5em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              {text('Our Customers speak for us')}

            </Typography>
            </Box>
       <Box
            sx={{
            
         
            margin: '0em auto',
            width: '100%',
            maxWidth: 'lg',
            mb:'2em',
            display: {
                xs: 'flex'
            },
            // height: '100%'
        }}>

            <Swiper
                pagination={{
                clickable: true
            }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            
                // navigation={true}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={
 {// when window width is >= 320px
 320: {
    slidesPerView:1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  940: {
    slidesPerView: 3,
    spaceBetween: 20
  }

}

                }
                modules={[ Autoplay]}
              >

                {tests.map((item ) => {
                    if (!item?.description) 
                        return
                    return <SwiperSlide
                        style={{
                        padding:'2em 0',
                        marginRight: '0 !important'
                    }}
                        key={item?.description}>
                         <TestimonialCard title={item?.description} reviewer={item.reviewer} description={item.description}/>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>
    </Box>
  )
}

export default Testimonial