import { Link } from "react-router-dom";

const Carditem = (props) => {
    return(
        <>
            <Link className="carditem_link" to={props.path}>
                <div className="card">
                    <img src={props.src} className="card-img-top" alt="adventure img1" />
                    <div className="card-body">
                        <p className=""  data-category={props.label}></p>
                        <h6 className="card-title">{props.title}</h6>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Carditem;