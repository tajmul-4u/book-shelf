import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams()
    const bookId=parseInt(id)
    const data =useLoaderData()
    const singleBook=data.find(book=>book.id===bookId)
    console.log(singleBook,data)
    return (
        <div>
            <h1>Book details</h1>
        </div>
    );
};

export default BookDetails;