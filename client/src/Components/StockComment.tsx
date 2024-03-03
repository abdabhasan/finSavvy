import React, { useEffect, useState } from "react";
import { commentGetAPI, commentPostAPI } from "../Services/CommentService";
import { toast } from "react-toastify";
import StockCommentBox from "./StockCommentBox";
import { CommentGet } from "../Models/Comment";
import StockCommentList from "./StockCommentList";

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getComments();
  }, []);

  const handleCommentSubmit = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created");
          getComments();
        }
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol).then((res) => {
      setLoading(false);
      setComments(res?.data!);
    });
  };

  return (
    <>
      <StockCommentList comments={comments!} />
      <StockCommentBox
        symbol={stockSymbol}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
};

export default StockComment;
