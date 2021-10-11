import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import React,{useState,useEffect} from 'react';


export default function CommentApp(props){

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        let localComments = window.localStorage.getItem('comments');
        if(localComments){
            setComments(JSON.parse(localComments));
        }
    }, []);

    const handleSubmitComment = (submitJSON)=>{
        console.log(submitJSON);
        const newComments = comments.slice();
        newComments.push(submitJSON);
        setComments(newComments);
        window.localStorage.setItem('comments', JSON.stringify(newComments));
    };

    return(
        <div className='wrapper'>
            <CommentInput onSubmit={handleSubmitComment}></CommentInput>
            <CommentList comments={comments}></CommentList>
        </div>
    );
}