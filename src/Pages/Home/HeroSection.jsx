export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kishan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Front End & React{" "}
            </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Frontend & React Developer with a passion for building sleek,
            responsive UIs.
            <br /> Skilled in competitive programming with strong
            problem-solving and algorithmic thinking.
          </p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <a
            href={process.env.PUBLIC_URL + "/MyUpdatedResume.pdf"}
            className="btn btn-primary"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero--section--img">
        <img src={process.env.PUBLIC_URL + "/img/kishanimg.png"} alt="Kishan" />
      </div>
    </section>
  );
}
