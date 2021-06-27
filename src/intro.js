import React from 'react'
import './intro.css'
import {Link} from 'react-router-dom'
import './footer.css'

const intro = () => {
    const text = 'A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation. '
    const security = 'Cryptocurrencies are usually built using blockchain technology. Blockchain describes the way transactions are recorded into "blocks" and time stamped. It iss a fairly complex, technical process, but the result is a digital ledger of cryptocurrency transactions that is hard for hackers to tamper with. In addition, transactions require a two-factor authentication process. For instance, you might be asked to enter a username and password to start a transaction. Then, you might have to enter an authentication code that is sent via text to your personal cell phone. While securities are in place, that does not mean cryptocurrencies are un-hackable. In fact, several high-dollar hacks have cost cryptocurrency startups heavily. Hackers hit Coincheck to the tune of $534 million and BitGrail for $195 million in 2018. That made them two of the biggest cryptocurrency hacks of 2018, '
    return (
        <div className="intro">
            <h1 className="intro-text">What is Crypto Currency?</h1>
            <p className="intro-para intro-box">{text}</p>
            <h1 className="intro-text">How secure is Crypto Currency?</h1>
            <p className="intro-para intro-box last">{security}</p>
            <Link to="/tracker" ><button className="track-btn">Track your Crypto Currency</button></Link>
            <div className="footer">
            <p>In <span>cryptography</span> we trust.</p>
        </div>
    
        </div>
    )
}

export default intro
