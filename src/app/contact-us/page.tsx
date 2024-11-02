import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
    {
        title: "Phone",
        description: "(+92) 31726 48144",
        icon: <FaPhoneAlt />,
    },
    {
        title: "Email",
        description: "abishaikashif975@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        title: "Address",
        description: "Code Corner, Tech Town 13579",
        icon: <FaMapMarkedAlt />,
    },
];

const Contact = () => {
    return (
        <main className="contact-page">
            {/* form */}
            <div className="form">
                <form action="">
                    <h2>Let&apos;s work together</h2>
                    <p>
                        I&apos;d love to hear from you. Please fill out the form
                        and I&apos;ll get back to you as soon as possible.
                    </p>

                    {/* inputs */}
                    <div>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="Firstname"
                        />
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Lastname"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone number"
                        />
                    </div>

                    {/* select */}
                    <select name="service">
                        <option value="frontend">Frontend development</option>
                        <option value="fullstack">
                            Full stack development
                        </option>
                    </select>

                    {/* textarea */}
                    <textarea
                        name="message"
                        placeholder="Type your message here :)"
                    />

                    {/* button */}
                    <button type="submit">Send Message</button>
                </form>
            </div>

            {/* contact info */}
            <div className="info">
                <ul>
                    {info.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <div className="icon">
                                    <div>{item.icon}</div>
                                </div>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Contact;
