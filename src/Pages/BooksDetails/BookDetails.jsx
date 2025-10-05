import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/AddToDB';

const BookDetails = () => {
    const {id}=useParams()
    const bookId=parseInt(id)
    // console.log(typeof bookId)
    const data =useLoaderData()
    const singleBook=data.find(book=>book.bookId===bookId)
    // console.log(singleBook)
    const {bookName,image,review}=singleBook

    const handleMarkAsRead=(id)=>{
        // store with id
        // Where to store 
        // array to collection
        // if book already exist the show a alert
        // if book not exist then push in the collection or array

        addToStoredDB(id)

    }
    return (
      <div className="w-2/3 mx-auto">
        <img className="w-48" src={image} alt="" />
        <h1>{bookName}</h1>

        <button onClick={()=>handleMarkAsRead(id)} className="btn btn-active btn-info m-5">Mark as Read</button>
        <button className="btn btn-active btn-success ">Add to WishList</button>
      </div>
    );
};

export default BookDetails;