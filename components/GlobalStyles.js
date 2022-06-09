const HIGHLIGHT_COLOR = "#fde8ef";

const GlobalStyles = () => {
  return (
    <div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

        ::-moz-selection {
          background: ${HIGHLIGHT_COLOR};
        }
        ::-webkit-selection {
          background: ${HIGHLIGHT_COLOR};
        }
        ::selection {
          background: ${HIGHLIGHT_COLOR};
        }

        html,
        body {
          padding: 0;
          margin: 0;
          color: #333;
          font-family: Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        main {
          padding: 0;
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
          color: inherit;
        }

        a:hover {
          font-weight: 600;
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
