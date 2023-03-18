function Footer() {
    const thisYear = new Date().getFullYear()
    return (
        <footer>
            <p>©{thisYear} BetterReads</p>
            <p>
                <i className="icon fa-brands fa-facebook"></i> &emsp; 
                <i className="icon fa-brands fa-twitter"></i>
            </p>
        </footer>
    )
}
export default Footer;