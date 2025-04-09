import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="text-center">Welcome to OctoFit Tracker</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Track Your Fitness Goals</h5>
            <p className="card-text">
              Use OctoFit Tracker to log your activities, join teams, and compete on the leaderboard.
            </p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>

        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Activity</th>
              <th scope="col">Duration</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Running</td>
              <td>30 mins</td>
              <td>
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Swimming</td>
              <td>45 mins</td>
              <td>
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
