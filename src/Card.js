import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import getFormatedUpdateTime from './formatTime';
import DeleteIcon from '@material-ui/icons/Delete';
import { CSSTransition } from 'react-transition-group';

const base_url = "https://message-list.appspot.com/";

function CardComponent({message, id, deleteMessage}) {
    const [showDelete, setShowDelete] = useState(false);
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }
    
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }
    
    const handleTouchEnd = () => {
        if (touchEnd - touchStart > 50) {
            setShowDelete(true);
            setTouchStart(0);
            setTouchEnd(0);
        }
    }

    const onDelete = () => {
        setShowDelete(false);
        deleteMessage(id);
    }

    return (
        <Card 
            className="card"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <div className="card-container">
                <CSSTransition 
                    in={showDelete} 
                    timeout={300}
                    classNames="delete">
                    <div 
                        style={showDelete ? {display: 'flex'} : {display: 'none'}}
                        className="delete-container"
                        aria-labelledby="delete"
                        onClick={onDelete}>
                        <div className="delete-text">
                            <span>Delete</span>
                            <DeleteIcon />
                        </div>
                    </div>
                </CSSTransition>
                <div>
                    <CardHeader
                        avatar={
                            <Avatar aria-labelledby="avatar" src={base_url + message.author.photoUrl} alt="avatar">
                            </Avatar>
                        }
                        title={message.author.name}
                        subheader={getFormatedUpdateTime(message.updated)}
                    />

                    <CardContent>
                        <Typography className="content" component="p" aria-labelledby="message" >
                            {message.content}
                        </Typography>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}

export default React.memo(CardComponent);