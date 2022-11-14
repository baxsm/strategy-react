import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import ReactModal from 'react-modal'

export default function Header() {

    const navList = [
        {
            title: 'Home',
            href: '#',
        },
        {
            title: 'Work',
            href: '#work',
        },
        {
            title: 'About Us',
            href: '#aboutus',
        },
        {
            title: 'Team',
            href: '#team',
        },
        {
            title: 'Testimonials',
            href: '#testimonials',
        },
        {
            title: 'Pricing',
            href: '#pricing',
        },
        {
            title: 'Gallery',
            href: '#gallery',
        },
        {
            title: 'Contact Us',
            href: '#contactus',
        },
    ]

    const styles = {
        header: 'w-full flex justify-center place-items-center absolute',
        container: 'p-6',
        openIcon: 'text-[1.5rem] text-dark hover:text-dark2 cursor-pointer',
        modal: 'md:max-w-[250px] fixed left-0 right-0',
        modalCloseContainer: 'flex justify-end pb-[1rem]',
        closeIcon: 'text-[#fff] text-[1.5rem] hover:text-dark2 cursor-pointer',
        contentUl: 'flex flex-col gap-[1rem] justify-center place-items-center',
        contentLi: '',
        anchor: 'text-[#fff] hover:text-dark2 text-[1.25rem]',
    }

    const [modalActive, setModalActive] = useState(false)

    const openModal = () => {
        setModalActive(true)
    }

    const closeModal = () => {
        setModalActive(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <AiOutlineMenu className={styles.openIcon} onClick={() => openModal()} />
            </div>
            <ReactModal
                isOpen={modalActive}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}
                overlayClassName="modalOverlay"
                className={"reactModal " + styles.modal}
                closeTimeoutMS={500}
                ariaHideApp={false}
            >
                <div className={styles.container}>
                    <div className={styles.modalCloseContainer}>
                        <AiOutlineClose className={styles.closeIcon} onClick={() => closeModal()} />
                    </div>
                    <div className={styles.content}>
                        <ul className={styles.contentUl}>
                            {
                                navList.map((item, index) => {
                                    return (
                                        <li key={index} className={styles.contentLi}>
                                            <a href={item.href} className={styles.anchor} onClick={() => closeModal()}>{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </ReactModal>
        </header>
    )
}
