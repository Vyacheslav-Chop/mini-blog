import css from './page.module.css';

const About = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <p className={css.text}>
          We are a team of enthusiasts who created this mini-blog to share
          knowledge, ideas, and inspiration. Our project was born out of a
          desire to make the internet a slightly warmer place — a space where
          everyone can express themselves simply and without unnecessary noise.
        </p>
        <p className={css.text}>
          We believe in the power of words to make a difference. There are no
          algorithms here telling you what to read — just people, thoughts, and
          genuine experiences.
        </p>
        <p className={css.text}>
          The project is built with modern web technologies, focusing on speed,
          simplicity, and accessibility. If you&apos;re reading this — it means
          we&apos;ve already reached our goal, at least a little.
        </p>
        <p className={css.text}>Thank you for being with us. 🌿</p>
      </div>
    </section>
  );
};

export default About;
