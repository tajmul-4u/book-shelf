import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BooksDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,

    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        loader: () => fetch("booksData.json"),
        Component: About,
      },
      {
        path: "readList",
        Component: ReadList,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
