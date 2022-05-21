import React from "react";
import { Link } from "react-router-dom";
// Link buttons on page
function ViewDeckCards({ deck, deleteCardHandler }) {
    if (!deck || !deck.cards) {
        return null
    }

    const { cards = [] } = deck;

    // const deleteButtonHandler = (e) => {
    //     console.log("Delete Clicked!", e.target)
    // }

    // const cardies = deck.cards.map((card, index) => {
    const cardies = cards.map((card, index) => {
        return (
            <div key={index} className="card">
                <div className="card-body">
                    <div className="row justify-content-between px-2">
                        <p className="col card-text px-2">{card.front}</p>
                        <p className="col card-text px-2">{card.back}</p>
                    </div>
                    <div className="row justify-content-between px-2">
                        <div className="pr-1">
                            <Link 
                                to={`/decks/${deck.id}/cards/${card.id}/edit`}
                                className="btn btn-secondary mr-2"
                                title="Edit deck"
                            >
                                <span className="oi oi-pencil" /> Edit
                            </Link>
                            
                        </div>
                        <button
                            className="btn btn-danger" 
                            onClick={() => deleteCardHandler(card.id)}
                        >
                            <i className="bi bi-trash"></i>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    })
    return cardies;
}

export default ViewDeckCards;