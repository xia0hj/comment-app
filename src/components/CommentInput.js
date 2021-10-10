import React, { useState, useEffect, useRef } from 'react';

export default function CommentInput(props) {

    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    // 保存输入的用户名
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // 保存输入的评论内容
    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    // 发布按钮将调用父组件传过来的onSubmit方法处理输入框的内容
    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit({
                username: username,
                content: content,
            });
        }
    };

    // 首次渲染后自动聚焦内容输入框和从localStorage获取username
    const textareaRef = useRef(null);
    useEffect(() => {
        setUsername(window.localStorage.getItem('username'));
        textareaRef.current.focus();
    }, []);

    // 用户名输入框失去焦点时保存到localStorage
    const handleUsernameBlur = (event) => {
        window.localStorage.setItem('username', event.target.value);
    };



    return (
        <div className='comment-input'>
            {/* 用户名及其输入框 */}
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'><input value={username} onChange={handleUsernameChange} onBlur={handleUsernameBlur} /></div>
            </div>

            {/* 评论内容及其输入框 */}
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'><textarea value={content} onChange={handleContentChange} ref={textareaRef} /></div>
            </div>

            {/* 发布按钮 */}
            <div className='comment-field-button'>
                <button onClick={handleSubmit}>发布</button>
            </div>
        </div>
    );
}