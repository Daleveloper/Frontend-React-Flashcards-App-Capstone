import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api";
import DecksRendered from "./DecksRendered";


function Home({ decks }) {


    // useEffect(() => {
    //     const ac = new AbortController();
    //     async function displayDeck() {
    //         try {
    //             const response = await listDecks(deckId, ac.signal)
    //             console.log(response)
    //             setDeck(response)
    //             setFormData(response)
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     displayDeck();
    //     return () => ac.abort();
    // }, [deckId]);


    return (
        <div>
            <div className="pb-1">
                <Link to={`/decks/new`} className="btn btn-secondary">
                    <i className="bi bi-plus-lg pr-1"></i>
                    Create Deck
                </Link>
            </div>

            <DecksRendered />
        </div>

    )
}

export default Home;