import React from "react";
import styled from "styled-components";
import {
  facebook,
  instagram,
  linkedin,
  logo2,
  opendreams,
  polytech,
  slack,
  tiktok,
  twitter,
} from "../Images";

const links = [
  {
    id: 1,
    name: "Home",
    link: "home",
  },
  {
    id: 2,
    name: "About",
    link: "about",
  },
  {
    id: 3,
    name: "Curriculum",
    link: "curriculum",
  },
  {
    id: 4,
    name: "Contact",
    link: "contact",
  },
];

const socialMediaLinks = [
  { id: 1, location: facebook },
  { id: 2, location: instagram },
  { id: 3, location: linkedin },
  { id: 4, location: slack },
  { id: 5, location: tiktok },
  { id: 6, location: twitter },
];
function Footer() {
  return (
    <Container>
      <div className="first">
        <div className="logo">
          <img src={logo2} />
        </div>
        <div className="partners">
          <h3>Partners</h3>
          <div className="partners-icon">
            <div>
              <img src={opendreams} />
            </div>
            <div>
              <img src={polytech} />
            </div>
          </div>
          <p>&copy; Copyright 2023 TIC Summit</p>
        </div>
      </div>
      <div className="second">
        <h1>Useful Links</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="third">
        <div className="socialmedia">
          <h2>Socials</h2>
          <div className="links">
            {socialMediaLinks.map((link) => (
              <div key={link.id}>
                <img src={link.location} />
              </div>
            ))}
          </div>
        </div>
        <div className="signup">
          <h3>Signup to our Newsletter to get the latest updates.</h3>
          <div className="btn">
            <button>Sign up</button>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100vw;
  padding: 0.5cm 0;
  background-color: rgb(0, 102, 255);
  color: white;
  display: flex;
  justify-content: space-around;
  .first {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
    .logo {
      margin: 0 0 1.5cm 0;
    }
    .partners {
      .partners-icon {
        display: flex;
        justify-content: space-around;
        width: 80%;
        padding: 0.5cm 1cm;
        background-color: white;
      }
      h3 {
        margin: 0.25cm 0;
      }
      p {
        margin: 0.5cm;
        text-align: center;
      }
    }
  }
  .second {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1cm;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 30%;
      margin-bottom: 1cm;
      h1 {
        font-size: 1.2em;
      }
    }
    ul {
      li {
        a {
          text-decoration: none;
          font-size: 1.2em;
          color: white;
          line-height: 1cm;
          @media (min-width: 320px) and (max-width: 480px) {
            font-size: 1em;
          }
        }
      }
    }
  }
  .third {
    width: 50%;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 60%;
      margin-bottom: 1cm;
    }
    .socialmedia {
      margin-left: 1cm;
      @media (min-width: 320px) and (max-width: 480px) {
        margin: 0;
      }
      .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 2cm;
        margin-top: 0.5cm;
        @media (min-width: 320px) and (max-width: 480px) {
          margin: 0;
          margin-right: 0.25cm;
        }
        div {
          @media (min-width: 320px) and (max-width: 480px) {
            margin: 0 3px;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .signup {
      margin-left: 1cm;
      margin-top: 1cm;
      h3 {
        font-size: 1.5em;
        width: 50%;
        @media (min-width: 320px) and (max-width: 480px) {
          width: 90%;
          font-size: 1.2em;
        }
      }
      .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5cm;
        margin-right: 50%;
        @media (min-width: 320px) and (max-width: 480px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0;
        }
        button {
          padding: 0.25cm 1cm;
          font-size: 1.3em;
          color: #0066ff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            color: black;
          }
          @media (min-width: 320px) and (max-width: 480px) {
            font-size: 1em;
            width: 80%;
            margin: 0.15cm 0;
          }
        }
      }
    }
  }
`;
