import Link from "next/link";

export default function Home() {
    return (
        <main className="home-page">
            {/* text */}
            <div className="text">
                <h3>Branding | Image making</h3>

                <h1>
                    Visual
                    <br />
                    Designer
                </h1>

                <div className="para-container">
                    <p>
                        This is a template Figma file, turned into code using
                        Anima.
                    </p>
                    <p>Learn more at AnimaApp.com</p>
                </div>

                <Link href="/contact-us">
                    <button>Contact</button>
                </Link>
            </div>
            {/* image */}
            <div className="img-container">
                <img
                    src="/assets/heroImage.png"
                    alt="hero image"
                    height={385}
                    width={360}
                />
            </div>
        </main>
    );
}
