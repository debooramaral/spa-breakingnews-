import logo from "../../images/logo_breakingnews-removebg-preview.png";
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise Por Um Título"/>
                </div>

                <img src={logo} alt="Logo do Breaking News" />

                <button>Entrar</button>
            </nav>
        </>
    );
}