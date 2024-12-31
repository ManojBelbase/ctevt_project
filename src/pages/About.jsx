import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our website! We are a team of passionate individuals
        committed to delivering the best service to our customers. Our mission
        is to provide high-quality products and outstanding customer support.
      </p>
      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.paragraph}>
        Our mission is to continuously improve our offerings and adapt to the
        needs of our customers. We aim to be leaders in our industry by
        delivering exceptional value and customer satisfaction.
      </p>
      <h2 style={styles.subheading}>Our Vision</h2>
      <p style={styles.paragraph}>
        We envision a world where our products and services help people improve
        their lives. By staying innovative and focusing on quality, we aim to
        become the most trusted name in the industry.
      </p>
      <h2 style={styles.subheading}>Meet the Team</h2>
      <ul style={styles.teamList}>
        <li>John Doe - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Mike Johnson - Lead Developer</li>
        <li>Emily Davis - Marketing Manager</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  heading: {
    textAlign: "center",
    color: "#4CAF50",
    fontSize: "2.5em",
  },
  subheading: {
    fontSize: "1.8em",
    color: "#4CAF50",
    marginTop: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    textAlign: "justify",
  },
  teamList: {
    listStyleType: "none",
    paddingLeft: "0",
    fontSize: "1.2em",
  },
};

export default About;
