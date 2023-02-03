export default function Footer() {
    return (
        <div className="text-center text-light p-2" id="footer">
            <div className="d-flex mx-5">
                <a className="p-2 text-decoration-none text-light fs-4" href="https://www.facebook.com/miguel.brito.5496" target="_blank">
                    <i className="fa-brands fa-square-facebook fa-2x pe-2"></i> </a>
                <a className="p-2 text-decoration-none text-light fs-2" href="https://www.linkedin.com/in/mbdicuru/" target="_blank" >
                    <i className="fa-brands fa-linkedin"></i></a>
                <a className="p-2 text-decoration-none text-light fs-4" href="https://www.instagram.com/miguel.angelbrito/" target="_blank" >
                    <i className="fa-brands fa-instagram fa-2x pe-2"></i></a>

                <p className="p-2 flex-grow-1 fs-4">Miguel.AngelBRITO 2023.</p>
            </div>
        </div>
    )
}