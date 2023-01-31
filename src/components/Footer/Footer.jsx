import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="mt-5 bg-dark mb-0 p-3" >
            <div className="d-flex justify-content-around gap-1 w-100"  style={{placeItems:'center'}}>                 
                <div className="text-center text-muted">
                    Av. SiempreViva 743, CP 1752, Springfield.
                </div>
                <div  className="text-center">
                    <Link to="/" className="text-decoration-none ">              
                    <span className="text-primary align-middle">Copyright © 2020 - 2022 TangerineGames S.R.L.</span>
                    </Link>
                </div>
                <div className="text-center text-muted">
                    Web desarrollada por <a href="https://www.linkedin.com/in/delgadorosariocandelaria/" target="_blank" className="text-decoration-none text-secondary">Candelaria Delgado</a>
                </div>
            </div>
        </footer>
    )
}