import React from 'react'
import phoneImg from "../images/phone.svg"
import { useGlobalContext } from './context'

const Hero = () => {
    const { closeSubmenu } = useGlobalContext()
    return (
        <section className="hero" onMouseOver={closeSubmenu}>
            <div className="container">
            <div className="hero--center row">
                <article className="hero--info mt-3 col-md-6">
                    <h1>Payments Infrastructure <br /> for the internet</h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.
                    </p>
                    <button className="btn btn-dark">Start now</button>
                </article>
                <article className="hero--images mt-3 col-md-6">
                    <img src={phoneImg} className="phone-image" alt="phone" />
                </article>
            </div>
            </div>
        </section>
    )
}

export default Hero