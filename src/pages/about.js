import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Yoosuf" />
    <h1>About Yoosuf</h1>
    <p>I am Yoosuf, a Software engineer, particularly passionate about web standards, semantics and accessibility, and I enjoy writing clean, efficient and effective code. I am living in Colombo, Sri Lanka. I have worked for number of small and large companies around the globe since year 2005.</p>
    <p>Design and back-end development are essential for the web, but the exciting area where they meet is front-end development. As a front-end developer, I get to take a design – something that’s beautiful but static – and turn it into an interface, where its components become tools for unique experiences on the web.</p>
    <p>So much is at stake in this stage! The best design can be mangled in the hands of someone uninterested or unwilling to juggle the complexities of cross-browser differences. The best deployment can cause problems down the road if someone didn’t build it to be reusable and adaptable. But a great front-end developer brings designs to the fullness of their intention and sets up a webpage to be flexible and successful years into the future.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
