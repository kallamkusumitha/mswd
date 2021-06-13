import React from 'react';
const Header = ({name}) => <h2>{name}</h2>;
const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};
const Part = ({part}) => <h3>{part.name} {part.exercises}</h3>;
const Content = ({parts}) => {
    const total = parts.reduce((sum, currentPart) => sum + currentPart.exercises, 0);
    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
            <h3><strong>total of {total} exercises</strong></h3>
        </div>
    );
};

export default Course;
