import Link from "next/link";

const About = () => {
    return (
        <main className="about-page">
            {/* img */}
            <div>
                <img
                    src="/assets/heroImage.png"
                    alt="hero image"
                    height={385}
                    width={360}
                />
            </div>
            {/* text */}
            <div className="text">
                <h1>
                    About <span>ME</span>
                </h1>
                <p>
                    Hi, I'm John Doe. I'm a web developer based in Canada. I
                    enjoy creating things that live on the internet. I build
                    websites, web apps, and everything in between. I also like
                    to design things. If you want to get in touch, I'd love to
                    hear from you!
                </p>

                <Link href="/contact-us">
                    <button>Get in touch</button>
                </Link>
            </div>
        </main>
    );
};

export default About;
