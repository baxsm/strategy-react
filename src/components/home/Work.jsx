import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export default function Work() {

    const styles = {
        wrapper: '',
        gridContainer: 'grid grid-cols-1 md:grid-cols-2',
        contentContainer: 'relative',
        image: 'w-full h-full contain max-h-[100vh] md:max-h-[115vh]',
        content: 'absolute bottom-[5rem] sm:bottom-[13rem] pl-[2rem] max-w-[350px] flex flex-col gap-[1rem]',
        contentTitle: 'uppercase tracking-[8px] font-[400] text-[1.25rem]',
        contentSubtitle: 'text-dark2',
        rightContainer: 'flex flex-col justify-center place-items-center gap-[1rem] p-6',
        rightTitle: 'tracking-[8px] text-[3rem] uppercase font-[700]',
        socials: 'flex place-items-center justify-center gap-[2rem]',
        socialIcon: 'text-[1.25rem] text-dark hover:text-dark2 cursor-pointer',
    }

    return (
        <section id="work" className={styles.wrapper}>
            <div className={styles.gridContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.contentContainer}>
                        <div className={styles.content}>
                            <h5 className={styles.contentTitle}>Projects</h5>
                            <p className={styles.contentSubtitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="https://i.ibb.co/R7YvT87/work.jpg" alt="" className={styles.image} />
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.titleContainer}>
                        <h4 className={styles.rightTitle}>Work</h4>
                    </div>
                    <div className={styles.socialContainer}>
                        <div className={styles.socials}>
                            <div className={styles.socialContainer}>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <AiFillFacebook className={styles.socialIcon} />
                                </a>
                            </div>
                            <div className={styles.socialContainer}>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <AiOutlineTwitter className={styles.socialIcon} />
                                </a>
                            </div>
                            <div className={styles.socialContainer}>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <AiOutlineInstagram className={styles.socialIcon} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
