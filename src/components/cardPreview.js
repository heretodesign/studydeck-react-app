import React, { useState } from 'react';
import PropTypes from 'prop-types'

function CardPreview(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isFront, setIsFront] = useState(true)
    function handleCardFlip() {
        setIsFront(current => !current)
    }

    return (
        <>
        <div className={`tile ${isFront ? '' : 'back'}`}>
            <h4 className="cardTerm">{isFront ? props.term : props.definition}</h4>
            <div className="cardButtons">
                <button className="tertiary" type="button" onClick={handleCardFlip}>
                  {isFront ? 'show back' : 'show front'}
                </button>
              <div>
                <button className="secondary" type="button">edit button</button>
                <button className="secondary danger" type="button">delete button</button>
              </div>
            </div>
          </div>
        </>
    )
}

CardPreview.propTypes = {

}

export default CardPreview;

