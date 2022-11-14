import React from 'react'

export default function AboutUs() {

    const styles = {
        wrapper: 'mt-[2rem] lg:mt-[5rem] p-6',
        gridContainer: 'grid grid-cols-1 md:grid-cols-2 gap-[1rem]',
        rightContainer: 'flex flex-col justify-center place-items-center',
        aboutContainer: 'relative w-full md:w-auto',
        content: 'absolute p-[2rem] top-0 left-0 right-0 bottom-0 flex flex-col justify-center place-items-center gap-[2rem] text-[#fff]',
        rightTitle: 'text-[3rem] uppercase tracking-[8px] font-[700] text-center',
        rightSubtitle: 'text-[1rem] leading-[1.6] text-center ',
        rightButton: 'border-2 border-[#fff] px-6 py-2 hover:bg-[#fff] hover:text-dark uppercase font-[700]',
        imageContainer: '',
        imageRight: 'h-[600px] w-full lg:w-[550px] object-cover',
        leftContainer: 'flex flex-col gap-[2rem] justify-center place-items-center',
        leftImage: 'w-[400px] h-[400px] object-cover',
        leftText: 'uppercase tracking-[8px] text-[1.5rem] font-[400] text-center mb-4 lg:mb-0',
    }

    return (
        <section id="aboutus" className={styles.wrapper}>
            <div className={styles.gridContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.leftImageContainer}>
                        <img src="https://i.ibb.co/8DJdb2h/team1.jpg" alt="" className={styles.leftImage}/>
                    </div>
                    <div className={styles.leftTextContainer}>
                        <h4 className={styles.leftText}>Breathe in<br/>Inspiration</h4>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.content}>
                            <h1 className={styles.rightTitle}>About Studio</h1>
                            <p className={styles.rightSubtitle}>Part home studio, part design consultancy, and full of hidden wonders, our small boutique atelier, located in the middle of Downtown Greenville, houses a variety of exquisite furniture and charming, just-offbeat-enough tchotchkes, including statement pieces, wall coverings, curated art.</p>
                            <button className={styles.rightButton}>Read More</button>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="https://i.ibb.co/J2BHVkK/about.jpg" alt="" className={styles.imageRight} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
