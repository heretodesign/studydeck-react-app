import React from 'react'
import {Link} from '@reach/router'
import PropTypes from 'prop-types'
import {CardForm} from './CardForm'
import CardPreview from './CardPreview'

function CardList({cards, onAdd, onUpdate, onRemove}) {
    return (
        <div>
            <h3>Your Cards</h3>
            {/* <pre>{JSON.stringify(cards, null, 2)}</pre> */}
            <div className="practiceCTA">
                <Link to="/practice">practice deck</Link>
            </div>
            <div className="gridContainer">
            <CardForm onSave={onAdd} />
            {cards.map((card) => (
                <CardPreview 
                key={card.id} 
                {...card} 
                onUpdate={onUpdate}
                onRemove={onRemove}
                />
            ))}
            </div>
        </div>
    )
}

CardList.propTypes = {

}

export default CardList

