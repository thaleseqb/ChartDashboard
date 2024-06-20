import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <img src="./images/fb.png" alt="Facebook icon" />
                <img src="./images/ig.png" alt="Instagram icon" />
                <img src="./images/tw.png" alt="Twiter icon" />
            </div>
            
            <div className="anchor-div">
                <a href="https://github.com/thaleseqb?tab=repositories">Conheça meu repositório</a>
            </div>

            <div className="organo">
                <img src="./images/logo.png" alt="" />
            </div>
        </footer>
    )
}

export default Footer;