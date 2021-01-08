const GlobalStyles = () => {
  return (
    <div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        p {
          margin: 0.5rem 0;
        }

        h1 {
          font-weight: 500;
        }

        h2 {
          font-size: 2rem;
          margin: 0.5rem 0;
          font-weight: 500;
        }

        h3 {
          font-weight: 500;
        }

        .section-title {
          font-weight: 400;
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
