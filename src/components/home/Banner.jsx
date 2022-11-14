import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export default function Banner() {

    const styles = {
        wrapper: 'p-[4rem] bannerBackground',
        container: 'py-0 lg:px-[60px]',
        content: 'flex flex-col gap-[2rem] justify-start place-items-start py-[5rem] lg:py-[6rem] lg:px-[4rem] lg:pl-[40vw] md:py-[5rem] md:pl-[30vw]',
        socials: 'flex place-items-center justify-center gap-[2rem]',
        socialIcon: 'text-[2rem] text-dark hover:text-dark2 cursor-pointer',
        logoText: 'font-[700] text-[4.5rem] tracking-[30px] sm:tracking-[60px] md:tracking-[100px] leading-[2.2] margin-0 lowercase',
        title: 'uppercase text-[1.5rem] tracking-[8px] font-[700]'
    }

    return (
        <section id='banner' className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
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
                <div className={styles.logo}>
                    <h1 className={styles.logoText}>Stra<br/>tegy</h1>
                </div>
                <div className={styles.title}>Collection</div>
                </div>
            </div>
        </section>
    )
}
