import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import FormCard from "./FormCard";
function AddCard() {
    // const initialFormState = {
    //     front: "",
    //     back: "",
    // };
    const history = useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState({ card: [] }) // deck.card[0].id

    console.log({
        "line 15 ": deck,
        "line 16 ": history,
        "line 17 ": deckId,
    })
    
    useEffect(() => {
        readDeck(deckId).then(setDeck);
    }, [deckId]);

    function handleSubmit(card) {
        console.log("line 19 AddCard: ", card)
        createCard(deckId, card)
    }
    
    function doneHandler() {
        history.push(`/decks/${deckId}`);
    }

    //const [formData, setFormData] = useState({initialFormState})
    // useEffect(() => {
    //     const ac = new AbortController();
    //     async function displayDeck() {
    //         try {
    //             const response = await readDeck(deckId, ac.signal)
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

    // console.log("line 34", deck)

    // const changeHandler = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     createCard(formData)
    //     console.log(formData)
    //         // .then((newCard)=>{
    //         //     history.push(`/decks/${newCard.id}`);
    //         // })
    //         // .catch(err => console.log(err))

    // };

    // const cancelHandler = (e) => {
    //     console.log("Cancel Clicked!", e.target);
    // };
    

    if (!deck) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/">{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>

            {<h3>{deck.name}: Add Card</h3>}

            <FormCard 
                deckName={deck.name}
                initialState={deck}
                onSubmit={handleSubmit}
                onDone={doneHandler}
            />
            {/* <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Card Front"> Card Front</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="front"
                        tabIndex="1"
                        name="front"
                        aria-describedby="nameHelp"
                        placeholder="Front side of card"
                        required={true}
                        value={card.front}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Card Back">Card Back</label>
                    <textarea
                        rows="4"
                        type="text"
                        className="form-control"
                        id="back"
                        name="back"
                        tabIndex="2"
                        placeholder="Back side of card"
                        required={true}
                        value={deck.back}
                        onChange={changeHandler}
                    />
                </div>
                <div className="row justify-content-between px-2">
                    <div className="pr-1">
                        <button type="submit" className="btn btn-primary" >
                            Submit
                        </button>
                    </div>
                    <Link to={`/`}>
                        <button href="#" className="btn btn-danger">
                            <i className="bi bi-trash pr-1"></i>Cancel
                        </button>
                    </Link>
                    <button type="button" className="btn btn-secondary mr-2" onClick={doneHandler} tabIndex="4">Done</button>
                </div>
            </form> */}
        </div>
    )
}








export default AddCard;