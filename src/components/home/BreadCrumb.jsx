import React from 'react'

export default function BreadCrumb() {

    const styles = {
        wrapper: 'flex md:justify-center md:place-items-center p-4',
        gridContainer: 'grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[4rem]',
        leftContainer: 'flex md:justify-center place-items-center p-4',
        leftText: 'text-[3rem] uppercase tracking-[8px] font-[700]',
        rightContainer: 'md:pt-8 p-4',
        rightText: 'text-[1rem] max-w-[500px]',
    }

    return (
        <section id="breadcrumb" className={styles.wrapper}>
            <div className={styles.gridContainer}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.leftText}>Creative form <br/>in our design</h2>
                </div>
                <div className={styles.rightContainer}>
                    <p className={styles.rightText}>Our agents are engaged and experienced in the Miami real estate market and well informed about the communities they service. </p>
                </div>
            </div>
        </section>
    )
}
