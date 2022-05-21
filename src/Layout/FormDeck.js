import React, { useState } from "react";


Function FromDeck(){







return(
<form onSubmit={handleSubmit}>
    <div className="form-group">
        <label for="Name"> Deck Name</label>
        <input
            type="text"
            class="form-control"
            id="Name"
            name="name"
            aria-describedby="nameHelp"
            onChange={changeHandler}
            value={formData.name}
        />
    </div>
    <div className="form-group">
        <label for="Description">Deck Description</label>
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
)
}