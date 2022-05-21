import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { deleteDeck, deleteCard, readDeck, listDecks } from "../utils/api";
import ViewDeckCards from "./ViewDeckCards";
// need to Link buttons on this page

function ViewDeck() {
    const history = useHistory();
    const { deckId } = useParams();
    // const [deck, setDeck] = useState([])
    // const [deck, setDeck] = useState({decks: { cards: [] }});
    const [deck, setDeck] = useState({ cards: [] });
    useEffect(loadDeck, [deckId]);

    function loadDeck() {
        readDeck(deckId).then(setDeck);
        // fetch('listDecks').then(res => res.json()).then(data => setDecks(data)).catch(err => console.log(error))
    }
    // useEffect(() => {
    //     const ac = new AbortController();
    //     async function displayDeck() {
    //         try {
    //             const response = await readDeck(deckId, ac.signal)
    //             console.log(response)
    //             setDeck(response)
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     displayDeck();
    //     return () => ac.abort();
    // }, [deckId]);

    console.log(deck)


    // const deleteButtonHandler = async (e) => {
    //     const ac =new AbortController();
    //     const deleteId = e.target.id
    //     await deleteDeck(deleteId, ac.signal)
    //     const response = await listDecks(ac.signal)
    //     setDecks(response)
    //     history.push('/')
    // }

    function handleDeleteDeck() {
        // message alert user
        const confirmed = window.confirm(
            "Delete this deck?\n\nYou will not be able to undo this action once it's deleted."
        );
        // user confirm the action of deletion 
        if(confirmed) {
            deleteDeck(deck.id).then(() => history.push("/"));
        };
    };

    function deleteCardHandler(cardId) {
        const confirmed = window.confirm(
            "Delete this card?\n\nYou will not be able to undo this action once it's deleted."
        );
        if(confirmed) {
            deleteCard(cardId).then(loadDeck);
        };
    };

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>

            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <div className="container" >
                <div className="row justify-content-between">
                    <div>
                    <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-1">
                            <i className="bi bi-eye pr-1"></i>
                            Edit
                        </Link>
                        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-1">
                            <i className="bi bi-journal-bookmark pr-1"></i>
                            Study
                        </Link>
                        <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-success">
                            <i className="bi bi-plus-lg pr-1"></i>
                        </Link>
                    </div>
                    <button id ={deck.id} className="btn btn-danger" onClick={handleDeleteDeck}>
                        <i className="bi bi-trash pr-1"></i>
                        Delete
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <ViewDeckCards deck={deck} deleteCardHandler={deleteCardHandler} />
            </div>
        </div >
    )
}

export default ViewDeck;