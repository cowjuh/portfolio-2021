const GlobalStyles = () => {
  return (
    <div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          color: #333;
          font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 800px;
          width: 90%;
        }

        p {
          margin: 0.5rem 0;
          line-height: 1.6;
        }

        h1 {
          font-weight: 500;
          font-size: 3rem;
        }

        h2 {
          font-size: 2.3rem;
          margin: 0.5rem 0;
          font-weight: 500;
          line-height: 1.4;
        }

        h3 {
          font-weight: 500;
          font-size: 1.5rem;
          margin: 0.5rem 0;
        }

        a {
          text-decoration: none;
          color: black;
          font-weight: 600;
        }

        a:hover {
          color: #3f51b5;
        }

        .section-title {
          font-weight: 500;
          color: gray;
          margin: 0;
          margin-top: 2rem;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default GlobalStyles;
