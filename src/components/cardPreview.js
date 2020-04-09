import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { destroyCard } from '../services/cardServices'
import {CardForm} from './CardForm'

function CardPreview({ onRemove, onUpdate, ...card }) {
  const [isEditMode, setIsEditMode] = React.useState(false)
  function handleToggleEdit() {
    setIsEditMode(current => !current)
  }
  return isEditMode ? (
    <CardForm onCancel={handleToggleEdit} onSave={onUpdate} card={card} />
    ) : 
    <View {...card} onEdit={handleToggleEdit} onRemove={onRemove} />
}

function View({id, term, definition, onEdit, onRemove}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isFront, setIsFront] = useState(true)
    function handleCardFlip() {
        setIsFront(current => !current)
    }

    function handleDelete() {
      // 1 confirm
      const confirm = window.confirm(`Are you sure you want to delete "${term}"?`)
      if (confirm) {
        // 2 call api
        destroyCard(id).then(() => {
          // 3 notify parent component
          onRemove && 
          typeof onRemove === 'function' && 
          onRemove(id)
        })
      }
      
   }

    return (
        <>
        <div className={`tile ${isFront ? '' : 'back'}`}>
            <h4 className="cardTerm">{isFront ? term : definition}</h4>
            <div className="cardButtons">
                <button className="tertiary" type="button" onClick={handleCardFlip}>
                  {isFront ? 'show back' : 'show front'}
                </button>
              <div>
                <button className="secondary" type="button" onClick={onEdit}>edit button</button>
                <button 
                  className="secondary danger" 
                  type="button" 
                  onClick={handleDelete}>
                    delete button
                </button>
              </div>
            </div>
          </div>
        </>
    )
}

CardPreview.propTypes = {

}

export default CardPreview;

