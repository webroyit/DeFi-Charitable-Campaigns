import { Link, NavLink } from "react-router-dom";
import { useMoralis } from "react-moralis";

const SignedInLinks = ({ isAuthenticated, ud }) => {
  //const { isAuthenticated, user, logout } = useMoralis();

  if (isAuthenticated) {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a style={{ fontSize: 16 }} className="text-color-main" href="">
              <i className="material-icons text-color-main left">
                person_outline
              </i>
              {isAuthenticated.sub}
            </a>
          </li>
          <li>
            <NavLink to="/">
              {" "}
              <li>
                <button onClick={() => ud.logout()} className="text-color-main btn">
                  {" "}
                  Logout
                </button>
              </li>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  } else {
    return <div />;
  }
};

const Header = ({ isAuthenticated, ud }) => {
  //const { isAuthenticated } = useMoralis();

  return (
    <nav
      style={{
        boxShadow: "none",
        background: "none",
        paddingTop: "25px",
        minHeight: "115px",
        borderBottom: "1px solid rgb(63 81 181 / 18%)",
      }}
    >
      <div className="nav-wrapper">
        <NavLink to="/" className="left">
          <a href="/" className="brand-logo text-color-main table">
            <h2
              className="text-color-main inline-block logo-title"
              style={{
                margin: "10px",
                marginRight: "40px",
                verticalAlign: "middle",
              }}
            >
              DeFi Charitable Campaigns
            </h2>
            <NavLink to="/">
              {" "}
              <h5
                className="text-color-main inline-block text-bold"
                style={{
                  margin: "10px 20px",
                }}
              >
                Dashboard
              </h5>
            </NavLink>
            <NavLink to="/investmentProfile">
              {" "}
              <h5
                className="text-color-main inline-block text-bold"
                style={{
                  margin: "10px 20px",
                }}
              >
                Pools
              </h5>
            </NavLink>

            <NavLink to="/campaignForm">
              <h5
                className="text-color-main inline-block text-bold"
                style={{
                  margin: "10px 20px",
                }}
              >
                Campaigns
              </h5>
            </NavLink>
            <NavLink to="/wallet">
              <h5
                className="text-color-main inline-block text-bold"
                style={{
                  margin: "10px 20px",
                }}
              >
                NFTs
              </h5>
            </NavLink>
          </a>
        </NavLink>
        {isAuthenticated ? <SignedInLinks isAuthenticated={isAuthenticated} ud={ud} /> : <div />}
      </div>
    </nav>
  );
};

export default Header;
