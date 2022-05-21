import React, {useEffect, useState}from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck, listDecks, } from "../utils/api";

//function DecksRendered({ decks, setDecks })

function DecksRendered() {
    const history = useHistory();
    const [decks, setDecks] = useState([])
    useEffect(loadDecks, []);
    // pass [] to only apply the effect once

    function deleteHandler(deckId) {
        // message alert user
        const confirmed = window.confirm(
            "Delete this deck?\n\nYou will not be able to undo this action once it's deleted."
        );
        // user confirm the action of deletion 
        if(confirmed) {
            // update state of the action that was deleted and 
            // load the deck w/o the deleted deck
            // the id of the deck to delete
            // Deletes the deck with the specified `deckId`.
            deleteDeck(deckId).then(loadDecks);
        };
    };

    function loadDecks() {
        listDecks().then(setDecks)
        // fetch('listDecks').then(res => res.json()).then(data => setDecks(data)).catch(err => console.log(error))
    }

    // const deleteButtonHandler = async (e) => {
    //     const ac = new AbortController();
    //     const deleteId = e.target.id
    //     await deleteDeck(deleteId, ac.signal)
    //     const response = await listDecks(ac.signal)
    //     setDecks(response)
    //     history.push('/')
    // }

    const deckies = decks.map((deck, index) => {
        return (
            <div key={index} className="card">
                <div className="card-body">
                    <div className="row justify-content-between px-2">
                        <h5 className="card-title">{deck.name}</h5>
                        <h6>{deck.cards.length}</h6>
                    </div>
                    <p className="row card-text px-2">
                        {deck.description}
                    </p>
                    <div className="row justify-content-between px-2">
                        <div className="pr-1">
                            <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-1">
                                <i className="bi bi-eye pr-1"></i>
                                View
                            </Link>
                            <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
                                <i className="bi bi-journal-bookmark pr-1"></i>
                                Study
                            </Link>
                            {/* <button href="#" className="btn btn-danger" onClick={deleteButtonHandler}>
                                <i className="bi bi-trash pr-1"></i>
                                Delete
                            </button> */}
                            <button 
                                className="btn btn-danger" 
                                onClick={() => deleteHandler(deck.id)}
                            >
                                <i className="bi bi-trash pr-1"></i>
                                Delete
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return deckies;
}

export default DecksRendered;