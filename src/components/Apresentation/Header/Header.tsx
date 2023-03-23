import './Header.scss'

export function Header() {

    return(
        <header className="header">
            <h2 className="header-title">#NeverStopLearning</h2>
            <ul className="header-list">
                <li className="header-list-item"><a href="#">Home</a></li>
                <li className="header-list-item"><a href="#aboutMe">Sobre</a></li>
                <li className="header-list-item"><a href="#works">Portifólio</a></li>
                <li className="header-list-item"><a href="#">Contato</a></li>
            </ul>
        </header>
    )
}
