import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Public Layout';
const propTypes = {
    children: PropTypes.node.isRequired,
};

function PublicLayout({ children }) {
    return <div>
        <main className="fragment">
            { children }
        </main>
    </div>;
}
PublicLayout.displayName = displayName;
PublicLayout.propTypes = propTypes;

export default PublicLayout;
