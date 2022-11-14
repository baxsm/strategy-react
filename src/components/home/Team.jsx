import React from 'react'

export default function Team() {

    const styles = {
        wrapper: 'w-full',
        container: 'p-[4rem] flex flex-col justify-center place-items-center gap-[4rem] sm:gap-[1rem]',
        topContainer: 'grid grid-cols-1 lg:grid-cols-2',
        topLeftContainer: 'relative w-full',
        topLeftImageContainer: 'sm:pr-[20vw]',
        topLeftImage: 'w-full sm:w-[250px] sm:h-[320px] object-cover',
        topLeftContentContainer: 'relative bottom-[6rem] left-4 sm:bottom-[6rem] sm:left-[12rem]',
        topRightContainer: 'flex place-items-center lg:h-[320px]',
        topRightText: 'font-[700] text-[3rem] uppercase tracking-[8px] leading-[1.1] text-left',
        bottomContainer: 'flex flex-col lg:flex-row justify-end align-items-start gap-[4rem] w-full',
        bottomLeftContainer: 'relative sm:p-2',
        bottomLeftImage: 'w-full sm:w-[215px] sm:h-[285px] sm:ml-auto object-cover',
        bottomLeftContentContainer: 'sm:text-end absolute w-full bottom-5 right-[-1rem] sm:right-[10rem] md:bottom-[2rem] lg:bottom-[5rem]',
        bottomRightContainer: 'relative sm:p-2 md:min-w-[450px]',
        bottomRightImage: 'mr-auto sm:w-[270px] sm:h-[345px] object-cover',
        bottomRightContentContainer: 'absolute bottom-5 left-4 sm:bottom-[2rem] sm:left-[12rem]'
    }

    return (
        <section id="team" className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <div className={styles.topLeftContainer}>
                        <div className={styles.topLeftImageContainer}>
                            <img src="https://i.ibb.co/8DJdb2h/team1.jpg" alt="" className={styles.topLeftImage} />
                        </div>
                        <div className={styles.topLeftContentContainer}>
                            <h5 className="teamTitle">Margo Hudson</h5>
                            <h6 className="teamSubtitle">Manager</h6>
                        </div>
                    </div>
                    <div className={styles.topRightContainer}>
                        <h1 className={styles.topRightText}>
                            Our
                            <br />
                            Perfect
                            <br />
                            Team
                        </h1>
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.bottomLeftContainer}>
                        <div className={styles.bottomLeftImageContainer}>
                            <img src="https://i.ibb.co/HDcGTLB/team2.jpg" alt="" className={styles.bottomLeftImage} />
                        </div>
                        <div className={styles.bottomLeftContentContainer}>
                            <h5 className="teamTitle">Mike Cave</h5>
                            <h6 className="teamSubtitle">Developer</h6>
                        </div>
                    </div>
                    <div className={styles.bottomRightContainer}>
                        <div className={styles.bottomRightImageContainer}>
                            <img src="https://i.ibb.co/sJ9jjPJ/team3.jpg" alt="" className={styles.bottomRightImage} />
                        </div>
                        <div className={styles.bottomRightContentContainer}>
                            <h5 className="teamTitle">Nataly Perry</h5>
                            <h6 className="teamSubtitle">Designer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
