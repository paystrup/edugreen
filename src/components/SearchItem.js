import { useNavigate } from "react-router-dom";
import Search1 from "../assets/svg/search.svg";

export default function SearchItem() { 
    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate("/search");
    };
    
    return (
        <section className="paddingWide">
            <button
                className="btn-large-strokeWide search-btn"
                onClick={navigateToSearch}
                style={{ 
                    backgroundImage: `url(${Search1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left',
                    backgroundSize: '20px',
                    backgroundOrigin: 'content-box',
                    textAlign: 'center',
                    paddingLeft: '20px',
                    cursor: 'text',
                    }}
                >
                Søg efter bøger
            </button>
        </section>
    );
}