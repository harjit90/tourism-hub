import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
           <footer className="site_footer pt-5">
               <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-10 mx-auto">
                            <div className="subscribe_form_caption text-center">
                                <h3 className="mb-3">Subscribe to our Newsletter</h3>
                                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <form className="subscribe_form">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email" id="email" />
                                    </div> 
                                    <button type="submit" className="site_btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-2 col-md-2 col-sm-6 col-10 mx-auto">
                            <div className="footer_links pb-5">
                                <h5 className="mb-3">About Us</h5>
                                <Link to="/">How It Works</Link>
                                <Link to="/">Testimonials</Link>
                                <Link to="/">Careers</Link>
                                <Link to="/">Investors</Link>
                                <Link to="/">Terms of Services</Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-10 mx-auto">
                            <div className="footer_links pb-5">
                                <h5 className="mb-3">Contact Us</h5>
                                <Link to="/">Contact</Link>
                                <Link to="/">Support</Link>
                                <Link to="/">Destinations</Link>
                                <Link to="/">Sponserships</Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-10 mx-auto">
                            <div className="footer_links pb-5">
                                <h5 className="mb-3">Videos</h5>
                                <Link to="/">Submit Video</Link>
                                <Link to="/">Ambassadors</Link>
                                <Link to="/">Agency</Link>
                                <Link to="/">infulencers</Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-10 mx-auto">
                            <div className="footer_links pb-5">
                                <h5 className="mb-3">Social Media</h5>
                                <Link to="/">Instagram</Link>
                                <Link to="/">Facebook</Link>
                                <Link to="/">Youtube</Link>
                                <Link to="/">Twitter</Link>
                            </div>
                        </div>
                    </div>
               </div>
               <section className="copyright">
					<div className="container">
						<p className="m-0 d-inline-block">©2025 <Link to="/">Tourism</Link> | All Rights Reserved. |</p>
                        <p className="m-0 d-inline-block float-right">&nbsp; Design By <Link to="/">Harjit Mehmi</Link></p>
					</div>
				</section>
           </footer>
        </>
    );
};

export default Footer;