import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export default function ContactUs() {

    const styles = {
        wrapper: 'flex p-4 md:p-[10rem] pb-8 flex-col gap-[1rem] justify-center place-items-center bg-[#c5b29e]',
        title: 'text-[3rem] tracking-[8px] text-center text-[#fff] pt-[2rem] uppercase font-[700]',
        subtitle: 'text-[1rem] text-[#fff] font-[500] px-[4rem] py-8 text-center',
        socials: 'flex place-items-center justify-center gap-[2rem]',
        socialIcon: 'text-[2rem] text-[#fff] hover:text-dark2 cursor-pointer',
    }

  return (
    <section id="contactus" className={styles.wrapper}>
        <h5 className={styles.title}>contact us</h5>
        <p className={styles.subtitle}>Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet convallis erat. Class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus nec dolor suscipit faucibus.</p>
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
    </section>
  )
}
