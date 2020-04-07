import React from 'react';
import PropTypes from 'prop-types';


const cardPreview = (props) => {
    return (
        <>
        <div className="title">
            <h4 className="cardTerm">{props.term}</h4>
            <div className="cardButtons">
              <button className="tertiary" type="button">show button</button>
              <div>
                <button className="secondary" type="button">edit button</button>
                <button className="secondary danger" type="button">delete button</button>
              </div>
            </div>
          </div>
        </>
    );
};


cardPreview.propTypes = {

};


export default cardPreview;
