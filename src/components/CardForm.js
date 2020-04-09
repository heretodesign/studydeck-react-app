import React, { useState } from 'react';
import { saveCard } from '../services/cardServices'

export function CardForm({onSave, onCancel}) {
    const [term, setTerm] = React.useState('')
    const [definition, setDefinition] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        //call api
        saveCard({term, definition}).then(card => {
            onSave() && typeof onSave === 'function' && onSave(card)
        })
        //notify parent
        //wire it up
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
        <form onReset={clearForm} onSubmit={handleSubmit}>
            <div>
                <label  htmlFor="card_term">term</label>
                <textarea className="term" id="term"
                    value={term}
                    onChange={handleTermChange}
                />
            </div>
            <div>
                <label  htmlFor="card_definition">definition</label>
                <textarea className="card_definition" id="card_definition"
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