import React from 'react'
import img1 from '../assets/img/buy-comics-digital-comics.png'
import img2 from '../assets/img/buy-comics-merchandise.png'
import img3 from '../assets/img/buy-comics-shop-locator.png'
import img4 from '../assets/img/buy-comics-subscriptions.png'
import img5 from '../assets/img/buy-dc-power-visa.svg'
import ComicCard from './ComicCard'
import ListComix from './ListComix'


const Main = () => {
    return (
        <main>

            <section className="black-main">
                <div className="card">
                    <div className='containerCard'>  
                        <ComicCard props={ListComix[0]} />
                    </div>
                </div>
            </section>
            
            <section className="blue-main">
                <div className="img1">
                    <img src={img1} alt="" />
                    <span>Digital Comics</span>
                </div>
                <div className="img1">
                    <img src={img2} alt="" />
                    <span>DC Merchandise</span>
                </div>
                <div className="img1">
                    <img src={img3} alt="" />
                    <span>Subscription</span>
                </div>
                <div className="img1">
                    <img src={img4} alt="" />
                    <span>Comic Shop Locator</span>
                </div>
                <div className="img1">
                    <img src={img5} alt="" />
                    <span>DC Power Visa</span>
                </div>
            </section>
        </main>

    )

}

export default Main
