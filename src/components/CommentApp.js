import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import React,{useState} from 'react';


export default function CommentApp(props){

    const [comments, setCommentList] = useState([]);

    const handleSubmitComment = (submitJSON)=>{
        console.log(submitJSON);
        const newComments = comments.slice();
        newComments.push(submitJSON);
        setCommentList(newComments);
    };

    return(
        <div className='wrapper'>
            <CommentInput onSubmit={handleSubmitComment}></CommentInput>
            <CommentList comments={comments}></CommentList>
        </div>
    );
}