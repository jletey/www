import { Mail, GitHub, Twitter, LinkedIn, Instagram } from "@components/icons";

const Home = () => {
  return (
    <>
      <h1>Coming Soon.</h1>
      <a href="mailto:johnletey@gmail.com">
        <Mail />
      </a>
      <a href="https://github.com/johnletey">
        <GitHub />
      </a>
      <a href="https://twitter.com/johnletey">
        <Twitter />
      </a>
      <a href="https://www.linkedin.com/in/johnletey">
        <LinkedIn />
      </a>
      <a href="https://instagram.com/johnletey">
        <Instagram />
      </a>
    </>
  );
};

export default Home;
