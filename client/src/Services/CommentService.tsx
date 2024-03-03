import axios from "axios";
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../helpers/errorHandler";

const API = "http://localhost:5132/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(API + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(API + `?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
