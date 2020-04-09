import React, { useState } from 'react';
import { saveCard } from '../services/cardServices'

export function CardForm({onSave, onCancel, card}) {
    const id = card && card.id ? card.id : undefined
    const [term, setTerm] = React.useState(id ? card.term : '')
    const [definition, setDefinition] = React.useState(id ? card.definition : '')

    function handleSubmit(event) {
        event.preventDefault()
        //call api
        saveCard({term, definition, id}).then(card => {
            onSave && typeof onSave === 'function' && onSave(card)
        })
    }
    function clearForm() {
        setTerm('')
        setDefinition('')
        onCancel && typeof onCancel === 'function' && onCancel()
    }

    function handleTermChange(event) {
        const {value} = event.target
        setTerm(value)
    }

    function handleDefinitionChange(event) {
        const {value} = event.target
        setDefinition(value)
    }

    return (
        <div className="tile">
            <h4>{id ? 'Update Card' : 'Add Card'}</h4>
            <form onReset={clearForm} onSubmit={handleSubmit}>
                <div>
                    <label  htmlFor={`card_term_${id ? id : 'new'}`}>term</label>
                    <textarea className="term" id={`card_term_${id ? id : 'new'}`}
                        value={term}
                        onChange={handleTermChange}
                    />
                </div>
                <div>
                    <label  htmlFor={`card_definition_${id ? id : 'new'}`}>definition</label>
                    <textarea className="card_definition" id={`card_definition_${id ? id : 'new'}`}
                        value={definition}
                        onChange={handleDefinitionChange} 
                    />
                </div>
                <div>
                    <button 
                    className="primary" 
                    type="submit" 
                    onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button 
                    className="primary" 
                    type="reset" 

                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}