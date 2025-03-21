import Book from "../model/bookModel.js";

export const getData = async (req, res, next) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json(error);
  }
};
