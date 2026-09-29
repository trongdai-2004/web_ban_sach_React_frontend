import React from "react";

function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="footer-container">

                    {/* Footer top */}
                    <div className="row">

                        {/* Section 1 */}
                        <div className="col-6 col-md-2 footer-column">
                            <h5>Section</h5>

                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>

                                <li>
                                    <a href="#">Features</a>
                                </li>

                                <li>
                                    <a href="#">Pricing</a>
                                </li>

                                <li>
                                    <a href="#">FAQs</a>
                                </li>

                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>


                        {/* Section 2 */}
                        <div className="col-6 col-md-2 footer-column">
                            <h5>Section</h5>

                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>

                                <li>
                                    <a href="#">Features</a>
                                </li>

                                <li>
                                    <a href="#">Pricing</a>
                                </li>

                                <li>
                                    <a href="#">FAQs</a>
                                </li>

                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>


                        {/* Section 3 */}
                        <div className="col-6 col-md-2 footer-column">
                            <h5>Section</h5>

                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>

                                <li>
                                    <a href="#">Features</a>
                                </li>

                                <li>
                                    <a href="#">Pricing</a>
                                </li>

                                <li>
                                    <a href="#">FAQs</a>
                                </li>

                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>


                        {/* Newsletter */}
                        <div className="col-md-5 offset-md-1 newsletter">

                            <h5 className="newsletter-title">
                                Subscribe to our newsletter
                            </h5>

                            <p className="newsletter-text">
                                Monthly digest of what's new and exciting from us.
                            </p>

                            <form className="newsletter-form">

                                <div className="d-flex gap-2">

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email address"
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Subscribe
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>


                    {/* Divider */}
                    <hr className="footer-divider" />


                    {/* Footer bottom */}
                    <div
                        className="
                            footer-bottom
                            d-flex
                            flex-column
                            flex-sm-row
                            justify-content-between
                            align-items-sm-center
                        "
                    >

                        <p className="copyright">
                            © 2025 Company, Inc. All rights reserved.
                        </p>


                        {/* Social */}
                        <div className="social-icons">

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </footer>


           
        </>
    );
}

export default Footer;