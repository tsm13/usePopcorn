function Navbar({ el }) {
  return <nav className="nav-bar">{el}</nav>;
}

function Logo() {
  return (
    <div className="logo">
      <img src="popcorn.png" />
      <h1>usePopcorn</h1>
    </div>
  );
}

function Results({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export { Navbar, Logo, Results };
