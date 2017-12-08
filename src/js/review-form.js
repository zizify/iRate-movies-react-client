import React from 'react';

export default function ReviewForm() {
    return (
        <fieldset>
            <legend>Write Review</legend>
            <form>
                <textarea id="review-text" cols="86" rows="4"></textarea>
                <button type="submit">Submit</button>
            </form>
        </fieldset>
    )
}
