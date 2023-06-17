import React from "react";
import "../style/Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foottop">
          <div>
            <h3>
              <a href="">Brokerage Customer Relationship Summary</a>
              <span>
                {" "}
                | <a href="">FINRA’s BrokerCheck</a>
              </span>
            </h3>
          </div>
          <div className="follow">
            <div className="space">
              <h3>Follow us on</h3>
            </div>
            <div>
              <span>
                <img
                  width="15%"
                  src="https://static.vecteezy.com/system/resources/previews/019/490/753/original/black-twitter-logo-black-twitter-icon-twitter-symbol-free-free-vector.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  width="13.5%"
                  src="https://thumbs.dreamstime.com/b/instagram-logo-icon-voronezh-russia-january-black-square-shadow-171161247.jpg"
                  alt=""
                />
              </span>

              <span>
                <img
                  width="14%"
                  src="https://static.vecteezy.com/system/resources/previews/018/910/726/original/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg"
                  alt=""
                />
              </span>

              <span>
                <img
                  width="13.5%"
                  src="https://static.vecteezy.com/system/resources/previews/002/557/421/original/tiktok-logo-black-mobile-social-media-icon-free-vector.jpg"
                  alt=""
                />
              </span>

              <span>
                <img
                  width="13.5%"
                  src="https://i.pinimg.com/originals/7e/d4/a3/7ed4a324620f9d17ae73322329e028b9.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <div className="verticle"></div>
      </div>
      <div className="midsection">
        <div>
          <h3 style={{ marginLeft: "20px" }}>DEMOCRATIZE FINANCE FOR ALL™</h3>
        </div>
        <div className="disf">
          <div className="downsection">
            <div className="footgrid">
              <ul>
                <h3>Product</h3>
                <li>Invest</li>
                <li>Crypto</li>
                <li>Retirement</li>
                <li>Option</li>
                <li>Card Card</li>
                <li>Learn</li>
                <li>Snacks</li>
              </ul>
            </div>

            <div className="footgrid">
              <ul>
                <h3>Company</h3>
                <li>About us</li>
                <li>Blog</li>
                <li>Affiliates</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Commitments</li>
                <li>Investor Relation</li>
                <li>Support</li>
                <li>ESG</li>
                <li>Potdcast</li>
                <li>Investor Index</li>
              </ul>
            </div>

            <div className="footgrid">
              <ul>
                <h3>Legal & Regulatoy</h3>
                <li>Term & Condition</li>
                <li>Disclosures</li>
                <li>Privacy</li>
                <li>Law Enforcement Req</li>
              </ul>
            </div>

            <div className="fix">
              <h3>All investing involves risk.</h3>
              <p>
                Brokerage services are offered through Robinhood Financial LLC,
                (“RHF”) a registered broker dealer (member SIPC) and clearing
                services through Robinhood Securities, LLC, (“RHS”) a registered
                broker dealer (member SIPC). Cryptocurrency services are offered
                through Robinhood Crypto, LLC (“RHC”) (NMLS ID: 1702840). The
                Robinhood Money spending account is offered through Robinhood
                Money, LLC (“RHY”) (NMLS ID: 1990968), a licensed money
                transmitter. The Robinhood Cash Card is a prepaid card issued by
                Sutton Bank, Member FDIC, pursuant to a license from Mastercard®
                International Incorporated. RHF, RHY, RHC and RHS are affiliated
                entities and wholly owned subsidiaries of Robinhood Markets,
                Inc. RHF, RHY, RHC and RHS are not banks. Securities products
                offered by RHF are not FDIC insured and involve risk, including
                possible loss of principal. Cryptocurrencies held in RHC
                accounts are not covered by FDIC or SIPC protections and are not
                regulated by FINRA. RHY products are not subject to SIPC
                coverage but funds held in the Robinhood Money spending account
                and Robinhood Cash Card account may be eligible for FDIC
                pass-through insurance (see the Robinhood Cash Card Agreement
                and the Robinhood Spending Account Agreement).
              </p>
              <p>
                Options trading entails significant risk and is not appropriate
                for all customers. Customers must read and understand the
                Characteristics and Risks of Standardized Options before
                engaging in any options trading strategies. Options transactions
                are often complex and may involve the potential of losing the
                entire investment in a relatively short period of time. Certain
                complex options strategies carry additional risk, including the
                potential for losses that may exceed the original investment
                amount.
              </p>
              <p>
                Commission-free trading of stocks, ETFs and options refers to $0
                commissions for Robinhood Financial self-directed individual
                cash or margin brokerage accounts that trade U.S. listed
                securities and certain OTC securities electronically. Keep in
                mind, other fees such as trading (non-commission) fees, Gold
                subscription fees, wire transfer fees, and paper statement fees
                may apply to your brokerage account. Please see Robinhood
                Financial’s Fee Schedule to learn more.
              </p>
              <p> © 2023 Robinhood. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
