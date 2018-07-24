import React, { Component } from 'react';

class Course extends Component {
    componentDidMount () {
        console.log( this.props );
        // this.loadData();
    }

    render () {
        return (
            <div>
                <h1>{this.props.match.params.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;