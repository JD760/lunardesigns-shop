import "./navbarComponent.css";

interface NavbarProps {

}

export default function NavbarComponent(props: NavbarProps) {
    return(
        <div>
            <div className="shop-header">
                <div className="socials">SOCIALS</div>
                <div className="title"><a href="/">WHIPPET WORLD</a></div>
                <div className="basket"><img src="cart.svg"/></div>
            </div>
        </div>
    );
}