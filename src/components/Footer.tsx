import { useEffect, useState } from "react";
import dep_logo from "../assets/images/dep_logo_new.svg";
import useScrollPosition from "../hooks/useScrollPosition";
import "../styles/anchor_style.css";

const footerStyle: React.CSSProperties = {
    height: "35vh",
    backgroundColor: "black",
    color: "white",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
};

const logoStyle: React.CSSProperties = {
    backgroundImage: `url(${dep_logo})`,
    backgroundSize: "100% 100%",
    width: "25vh",
    height: "25vh",
};

const addressBlockStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",

    color: "white",
};

const madeByStyle: React.CSSProperties = {
    backgroundColor: "black",
    color: "white",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const Footer = (): JSX.Element => {
    let [footerZ, setFooterZ] = useState(1);
    let scrollPos = useScrollPosition();

    useEffect(() => {
        if (
            (footerZ === -1 &&
                window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - 10) ||
            (footerZ === 1 &&
                window.innerHeight + window.scrollY <
                    document.body.offsetHeight - 10)
        ) {
            setFooterZ(footerZ * -1);
        }
    }, [scrollPos]);

    return (
        <footer
            style={{
                backgroundAttachment: "fixed",
                position: "sticky",
                zIndex: footerZ,

                left: "0",
                right: "0",
                bottom: "0",
            }}
        >
            <div style={footerStyle}>
                <div style={logoStyle}></div>
                <div className="address-block" style={addressBlockStyle}>
                    <p>
                        Addr: &nbsp;
                        <a
                            className="address-link"
                            href="https://goo.gl/maps/MCRHtueWwg5PidBs5"
                            target={"_blank"}
                        >
                            Ward No - 20, Gopal Nagar (Gopalpur)<br></br> Hata,
                            Kushinagar<br></br> Uttar Pradesh, 274203
                        </a>
                    </p>
                    <p>
                        Email:&nbsp;
                        <a
                            className="address-link"
                            href="mailto://ppgopalpurhata@gmail.com"
                            target={"_blank"}
                        >
                            ppgopalpurhata@gmail.com
                        </a>
                    </p>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <span>Pintoo Dubey: +91 9839525231</span>
                    <br></br>
                    <span>Sarita Vaishya: +91 7398290820</span>
                    <br></br>
                    <span>Preeti Tiwari: +91 9454264015</span>
                </div>
            </div>
            <div style={madeByStyle}>
                Made with ❤ by &nbsp;
                <a
                    className="chad"
                    href="https://github.com/literalEval"
                    target={"_blank"}
                >
                    Ravidev Pandey
                </a>
            </div>
        </footer>
    );
};

export default Footer;
