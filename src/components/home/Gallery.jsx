import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


export default function Gallery() {

    const carouselData = [
        {
            image: 'https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            image: 'https://images.pexels.com/photos/3317936/pexels-photo-3317936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            image: 'https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            image: 'https://images.pexels.com/photos/3535630/pexels-photo-3535630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            image: 'https://images.pexels.com/photos/4333606/pexels-photo-4333606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            image: 'https://images.pexels.com/photos/2868534/pexels-photo-2868534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            image: 'https://images.pexels.com/photos/1093087/pexels-photo-1093087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            image: 'https://images.pexels.com/photos/3109671/pexels-photo-3109671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]

    const styles = {
        wrapper: 'mt-[2rem] flex justify-center place-items-center',
        swipper: 'customGallerySwiper flex justify-center place-items-center',
        imageContainer: 'flex justify-center place-items-center',
        image: 'h-[400px] w-full md:w-[336px] object-cover cursor-pointer filter grayscale-[80%]',
    }

    const [modalActive, setModalActive] = useState(false)
    const [currImage, setCurrImage] = useState('')

    const openModal = (source) => {
        setCurrImage(source)
        setModalActive(true)
    }

    const closeModal = () => {
        setModalActive(false)
    }

    return (
        <section id="gallery" className={styles.wrapper}>
            <Swiper
                slidesPerView={1}
                navigation={true}
                speed={600}
                loop={true}
                breakpoints={{
                    548: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 4
                    }
                }}
                modules={[Navigation]}
                className={styles.swipper}
            >
                {
                    carouselData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt="" className={styles.image} onClick={() => openModal(item.image)}/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={modalActive ? 'modal' : 'hidden'}>
                <span className="close" onClick={() => closeModal()}>&times;</span>
                <img src={currImage} className="modal-content" alt=""/>
            </div>
        </section>
    )
}
