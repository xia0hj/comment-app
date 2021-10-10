import CommentInput from "./CommentInput";
import CommentList from "./CommentList";


export default function CommentApp(props){


    const handleSubmitComment = (obj)=>{
        console.log(obj);
    };

    return(
        <div className='wrapper'>
            <CommentInput onSubmit={handleSubmitComment}></CommentInput>
            <CommentList></CommentList>
        </div>
    );
}