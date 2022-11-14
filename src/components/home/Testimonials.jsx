import React from 'react'

export default function Testimonials() {

    const testimonialData = [
        {
            name: 'Mike Perry',
            text: 'Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.',
            image: 'https://i.ibb.co/SQTmj8v/testimonial1.jpg',
            color: ''
        },
        {
            name: 'linda hudson',
            text: 'Ut euismod augue a fermentum rutrum. Sed sit amet euismod nisl. Donec eget sodales mauris. Aenean facilisis massa a turpis euismod, nec lobortis massa rhoncus. Maecenas fringilla erat non molestie fringilla. Curabitur faucibus quam quis volutpat tempor. Nunc in dui risus. Quisque mauris nunc, condimentum ac purus semper, elementum pulvinar sapien.',
            image: 'https://i.ibb.co/6gZFHJz/testimonial2.jpg',
            color: 'bg-[#fff]'
        }
    ]

    const styles = {
        wrapper: 'flex flex-col justify-center place-items-center p-4 mt-[2rem] gap-[2rem]',
        header: 'text-center flex flex-col gap-[1rem]',
        headerSubtitle: 'uppercase tracking-[8px] font-[700]',
        headerTitle: 'text-[3rem] uppercase tracking-[8px] font-[700]',
        bottomContainer: 'flex flex-col gap-[2rem] justify-center place-items-center',
        contentWrapper: 'flex flex-col sm:flex-row p-6 justify-center place-items-center max-w-[900px]',
        imageContainer: 'mx-6 pb-4 sm:pb-0',
        contentImage: 'h-[120px] w-[120px] min-w-[120px] min-h-[120px] object-cover rounded-[50%] overflow-hidden object-center',
        contentName: 'uppercase tracking-[2px] font-[700] text-[1.25rem]',
        contentText: 'text-[1rem] text-[#333]',
        contentContainer: 'flex flex-col gap-[1rem]'
    }


    return (
        <section id="testimonials" className={styles.wrapper}>
            <div className={styles.header}>
                <h6 className={styles.headerSubtitle}>Testimonials</h6>
                <h2 className={styles.headerTitle}>Student Reviews</h2>
            </div>
            <div className={styles.bottomContainer}>
                {
                    testimonialData.map((item, index) => {
                        return (
                            <div className={item.color ? styles.contentWrapper + ' ' + item.color : styles.contentWrapper} key={index}>
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt="" className={styles.contentImage}/>
                                </div>
                                <div className={styles.contentContainer}>
                                    <h6 className={styles.contentName}>{item.name}</h6>
                                    <p className={styles.contentText}>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
