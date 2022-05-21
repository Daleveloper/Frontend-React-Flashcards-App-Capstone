import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";


function EditDeck() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState(null)
    const [formData, setFormData] = useState(null)
    const history = useHistory();

    useEffect(() => {
        const ac = new AbortController();
        async function displayDeck() {
            try {
                const response = await readDeck(deckId, ac.signal)
                console.log(response)
                setDeck(response)
                setFormData(response)
            } catch (err) {
                console.log(err);
            }
        }
        displayDeck();
        return () => ac.abort();
    }, [deckId]);

    console.log(deck)

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateDeck(formData)
            .then((updatedDeck)=>{
                history.push(`/decks/${updatedDeck.id}`);
            })
            .catch(err => console.log(err))
        
    };

    const cancelHandler = (e) => {
        console.log("Cancel Clicked!", e.target);
    };

    if (!formData) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/">{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                </ol>
            </nav>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Name"> Deck Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Name"
                        name="name"
                        aria-describedby="nameHelp"
                        onChange={changeHandler}
                        value={formData.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Description">Deck Description</label>
                    <textarea
                        rows="4"
                        type="text"
                        className="form-control"
                        id="desription"
                        name="description"
                        onChange={changeHandler}
                        value={formData.description}
                    />
                </div>
                <div className="row justify-content-between px-2">
                    <div className="pr-1">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <Link to={`/`}>
                        <button href="#" className="btn btn-danger" onClick={cancelHandler}>
                            <i className="bi bi-trash pr-1"></i>Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}








export default EditDeck;