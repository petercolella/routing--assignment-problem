import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><NavLink
                  to="/"
                  exact
                >Home</NavLink>
                </li>
                <li><NavLink
                  to="/courses"
                  exact
                >Courses</NavLink>
                </li>
                <li><NavLink
                  to="/users"
                  exact
                >Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact render={() =>
            <ol style={{ textAlign: 'left' }}>
              <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
              <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
              <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
              <li>Pass the course ID to the "Course" page and output it there</li>
              <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
              <li>Load the "Course" component as a nested component of "Courses" 21:48</li>
              <li>Add a 404 error page and render it for any unknown routes</li>
              <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
            </ol>
          } />
          <Route path="/courses" exact component={Courses} />
          <Route path="/users" component={Users} />
          <Route path="/courses/:courseId" component={Course} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
