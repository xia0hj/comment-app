import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default function CommentApp(props){
    return(
        <div className='wrapper'>
            <CommentInput></CommentInput>
            <CommentList></CommentList>
        </div>
    );
}