import React from 'react'
import footerlist from "../../json/footer.json"
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="f-upper">
            <div className="right-footer" >
                <h4 className="footer-head">Kerdja.</h4>
                <p className="footer-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The passage e Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
            <div className="left-footer">
                <div className="footer-ul">
                    <p className="ul-label" >Explore</p>
                   { footerlist.Explore.map((ulitem)=><li className="footer-list" >{ulitem}</li>
                    )}
                </div>
                <div className="footer-ul" >
                <p className="ul-label">Company</p>
                   { footerlist.Company.map((ulitem2)=><li className="footer-list" >{ulitem2}</li>
                    )}
                </div>
                <div className="footer-ul" >
                <p className="ul-label">Community</p>
                   { footerlist.Community.map((ulitem3)=><li className="footer-list">{ulitem3}</li>
                    )}
                </div>
                <div className="footer-ul" >
                <p className="ul-label">Contact Us</p>
                   { footerlist.Contact.map((ulitem4)=> <li className="footer-list" >{ulitem4}</li>
                    )}
                </div>
            </div>
            </div>
            <div className="f-lower" >
                <p className="copyright">2021 &#169; teamkredja - Terms & Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer
