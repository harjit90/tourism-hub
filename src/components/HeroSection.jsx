import { NavLink } from 'react-router-dom';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const HeroSection = () => {
    return(
        <>
           <div className="hero_section">
                <div className="container">
                    <div className="hero-caption">
                        <h1 className="text-uppercase text-center">Explore the world</h1>
                        <p>Make you tour amazing with us!</p>
                        <div>
                            <NavLink className="site_btn text-uppercase mt-1 me-2 " to="/">Get Started</NavLink>
                            <NavLink className="site_btn text-uppercase mt-1" to="/">Watch Trailer </NavLink>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
}

export default HeroSection;