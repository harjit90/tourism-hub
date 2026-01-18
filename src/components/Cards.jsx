import Carditem from "./Carditem";
import s1 from '/images/s1.jpg'
import s2 from '/images/s2.jpg'
import s3 from '/images/s3.jpg'
import s4 from '/images/s4.jpg'
import s5 from '/images/s5.jpg'

const Cards = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center p-5">It's time to start your adevnture</h2>
                <div className="card_wrapper">
                    <div className="row">
                        <div className="col-md-6 col-10 mb-4 mx-auto">
                            <Carditem
                                src={s1}
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                label="Adventure"
                                path="/service"
                            />
                        </div>
                        <div className="col-md-6 col-10 mb-4 mx-auto">
                            <Carditem
                                src={s2}
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                label="Adventure"
                                path="/product"
                            />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4 col-10 mb-4 mx-auto">
                            <Carditem
                                src={s3}
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"
                                label="Adventure"
                                path="/product"
                            />
                        </div>
                        <div className="col-md-4 col-10 mb-4 mx-auto">
                            <Carditem
                                src={s4}
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"
                                label="Adventure"
                                path="/product"
                            />
                        </div>
                        <div className="col-md-4 col-10 mb-4 mx-auto">
                            <Carditem
                                src={s5}
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do"
                                label="Adventure"
                                path="/service"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;