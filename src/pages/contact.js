import NavBar from "@/components/NavBar";
import styles from "../styles/Contact.module.scss";
export default function Contact() {
  let title = "Let's Connect!";
  return (
    <div className={styles.wrapperContact}>
      <NavBar active="contactActive" />
      <section className={styles.contact}>
        <form
          action="https://public.herotofu.com/v1/ea173d30-ef7f-11ed-b2e2-c10354b56774"
          method="post"
          acceptCharset="UTF-8"
          className={styles.form}
        >
          <p className={styles.title}>{title}</p>
          <div className={styles.name}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              id="name"
              required
              autoComplete="on"
              className={styles.form_input}
            />
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              id="email"
              required
              autoComplete="on"
              className={styles.form_input}
            />
          </div>
          <div className={styles.submit}>
            <input type="submit" value="Send Message" />
            <div
              style={{
                textIndent: "-99999px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "absolute",
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
