import React from 'react';

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                {/* 1. navbar */}
                {/* Note: ask why do we need curly braces over comments here? (React JSX) */}
                <h2>Subtitle</h2>
                <p> This is about ice cream</p>
            </div>
        );
    }
}