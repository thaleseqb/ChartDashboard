import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <img src="./images/fb.png" alt="Facebook icon" />
                <img src="./images/ig.png" alt="Instagram icon" />
                <img src="./images/tw.png" alt="Twiter icon" />
            </div>
            
            <div>
                <h2>Conheça meu portifólio</h2>
            </div>

            <div className="organo">
                <img src="./images/logo.png" alt="" />
            </div>
        </footer>
    )
}

export default Footer;