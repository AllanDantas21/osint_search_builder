import React from 'react';

const StarButton: React.FC = () => {
    const handleRedirect = () => {
        window.location.href = 'https://github.com/allandantas21/osint_search_builder';
    };

    return (
        <button className="btn glass" onClick={handleRedirect}>Open source code</button>
    );
};

export default StarButton;