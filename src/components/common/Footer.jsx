import React from 'react'

export default function Footer() {

    const styles = {
        footer: 'w-full flex justify-center place-items-center bg-[#333333]',
        container: 'p-6',
        content: 'text-[#fff] text-[1rem] hover:text-dark2'
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.content}>&copy; <i><a href="https://github.com/baxsm" target="_blank" rel="noreferrer">B A X S M</a></i></span>
            </div>
        </footer>
    )
}
