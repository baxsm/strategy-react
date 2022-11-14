import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export default function Banner() {

    const styles = {
        wrapper: 'bannerBackground p-[4rem]',
        container: 'py-0 px-[60px]',
        content: 'flex flex-col gap-[2rem] justify-start place-items-start py-[6rem] px-[4rem] pl-[40vw]',
        socials: 'flex place-items-center justify-center gap-[2rem]',
        socialIcon: 'text-[2rem] text-dark hover:text-dark2 cursor-pointer',
        logoText: 'font-[700] text-[4.5rem] tracking-[100px] leading-[2.2] margin-0',

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
                    <h1 className={styles.logoText}>stra<br/>tegy</h1>
                </div>
                <div className={styles.title}></div>
                </div>
            </div>
        </section>
    )
}
