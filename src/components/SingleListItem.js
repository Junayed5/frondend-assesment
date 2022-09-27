import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WrappedSingleListItem = ({
    index,
    isSelected,
    handleClick,
    text,
}) => {
    // console.log(index, isSelected);
    // backgroundColor: isSelected ? 'green' : 'red'
    return (
        <li style={{backgroundColor: isSelected ? 'green' : 'red', margin: "10px", padding: '5px'}} onClick={() => handleClick(index)}>
            {text}
        </li>
    );
};

WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.number,
    handleClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

export default SingleListItem;