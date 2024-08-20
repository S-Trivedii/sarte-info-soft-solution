import { motion } from "framer-motion";

const ContactInput = () => {

  return (
    <div className="contact-form">
      <div className="contactForm overflow-y-auto overflow-x-hidden">
        <motion.div
          initial={{ x: "20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
          className="map-container"
        >
          <div className="mapBg"></div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55658338664!2d75.78144835934833!3d22.724109981465016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1722594485700!5m2!1sen!2sin"
              width="700"
              height="550"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
        >
          <form>
            <input
              type="text"
              name="username"
              required
              className="input"
              placeholder="your name"
            />
            <input
              type="email"
              name="email"
              required
              className="input"
              placeholder="your email"
            />
            <input
              type="text"
              name="subject"
              required
              className="input"
              placeholder="your Subject"
            />
            <textarea
              className="input overflow-y-auto overflow-x-hidden"
              cols="30"
              rows="5"
              placeholder="Your message..."
            ></textarea>
            <input
              type="submit"
              className="bg-[#18dae4] text-black font-medium py-2 px-10 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95"
              value="Send Message"
            />
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactInput
