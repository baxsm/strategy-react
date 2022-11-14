import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'

export default function Pricing() {

    const pricingData = [
        {
            type: 'Basic',
            price: '29',
            users: 'For up to 1 full user',
            list: [
                {
                    text: '1,000 Email Previews'
                },
                {
                    text: '5 contacts per client'
                },
                {
                    text: 'Providing 5 coffee'
                },
                {
                    text: 'Slack Integration'
                },
            ],
            bannerColor: 'bg-[#011638]',
            buttonText: 'Try For Free',
        },
        {
            type: 'Standard',
            price: '59',
            users: 'For up to 5 full users',
            list: [
                {
                    text: '2,000 Email Previews'
                },
                {
                    text: '15 contacts per client'
                },
                {
                    text: 'Providing 10 coffee'
                },
                {
                    text: 'Google Calender and more'
                },
            ],
            bannerColor: 'bg-[#093A3E]',
            buttonText: 'Get Started',
        },
        {
            type: 'Advanced',
            price: '139',
            users: 'Custom users',
            list: [
                {
                    text: 'Unlimited Email Previews'
                },
                {
                    text: 'Unlimited contracts'
                },
                {
                    text: 'Providing 30 coffee'
                },
                {
                    text: '1:1 Onboarding and more'
                },
            ],
            bannerColor: 'bg-[#4B3B40]',
            buttonText: 'Get Started',
        },
    ]

    const styles = {
        wrapper: 'flex flex-col justify-center place-items-center p-8 md:p-[5rem] gap-[2rem]',
        headerContent: 'flex flex-col gap-[1rem]',
        headerTitle: 'text-[3rem] uppercase tracking-[8px] font-[700]',
        headerSubtitle: 'text-[1rem] text-[#111]',
        pricingContainer: 'w-full',
        cards: 'flex flex-col lg:flex-row gap-[2rem] lg:gap-[1rem] w-full',
        card: 'bg-[#fff] rounded-[15px] min-h-[500px] w-full min-w-full lg:min-w-[25vw]',
        cardBanner: 'p-6',
        cardTypeContainer: 'rounded-full w-[fit-content]',
        cardType: 'text-[#fff] uppercase text-[0.8rem] px-4 py-2 font-[400]',
        cardContent: 'flex flex-col justify-center place-items-start p-6 pt-0 gap-[1rem]',
        contentHeaderContainer: 'flex flex-row place-items-baseline gap-[5px]',
        contentHeaderTitle: 'text-[4rem] font-[700]',
        contentHeaderSubtitle: 'text-[0.8rem] text-[#858585]',
        contentUsersContainer: '',
        contentUsers: 'text-[#222] text-[1rem] font-[400]',
        contentButtonContainer: 'w-full',
        contentButton: 'w-full bg-[#000] text-[#fff] border-2 border-[#000] py-2 font-[700] tracking-[2px] rounded-[15px] hover:bg-transparent hover:text-[#000]',
        contentListContainer: 'flex flex-col gap-[1rem] w-full',
        contentListUl: 'flex flex-col gap-[1rem] w-full pb-4',
        contentListLi: 'flex flex-row gap-[10px] place-items-center border-b-[#0002] border-b-[1px] w-full p-1',
        contentListIcon: 'text-[1rem]',
        contentListItem: 'w-full',
    }

    return (
        <section id="pricing" className={styles.wrapper}>
            <div className={styles.headerContent}>
                <h2 className={styles.headerTitle}>Pricing Table</h2>
                <p className={styles.headerSubtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur commodi inventore debitis eaque, odio quo soluta ad asperiores similique impedit ratione tempora veritatis eveniet nostrum velit iusto accusamus! Nisi, eveniet?</p>
            </div>
            <div className={styles.pricingContainer}>
                <div className={styles.cards}>
                    {
                        pricingData.map((item, index) => {
                            return (
                                <div className={styles.card} key={index}>
                                    <div className={styles.cardBanner}>
                                        <div className={styles.cardTypeContainer + ' ' + item.bannerColor}>
                                            <p className={styles.cardType}>{item.type}</p>
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.contentHeaderContainer}>
                                            <h1 className={styles.contentHeaderTitle}>${item.price}</h1>
                                            <p className={styles.contentHeaderSubtitle}>/per month</p>
                                        </div>
                                        <div className={styles.contentUsersContainer}>
                                            <p className={styles.contentUsers}>{item.users}</p>
                                        </div>
                                        <div className={styles.contentButtonContainer}>
                                            <button className={styles.contentButton}>{item.buttonText}</button>
                                        </div>
                                        <div className={styles.contentListContainer}>
                                            <p>Everything in {item.type === 'Basic' ? item.type : item.type + ', plus'}</p>
                                            <ul className={styles.contentListUl}>
                                                {
                                                    item.list.map((listItem, listIndex) => {
                                                        return (
                                                            <li key={listIndex} className={styles.contentListLi}>
                                                                <FiCheckSquare className={styles.contentListIcon}/>
                                                                <p className={styles.contentListItem}>{listItem.text}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
