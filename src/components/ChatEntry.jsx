import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
	const localSender = props.sender === 'Vladimir';
	const entryClass = `chat-entry ${localSender ? 'local' : 'remote'}`;
	// const likedStatus = () => {
	// 	props.liked ? 'liked' : 'not-liked';

	return (
		<div className={entryClass} key={props.id}>
			<h2 className="entry-name">{props.sender}</h2>
			<section className="entry-bubble">
				<p>{props.body}</p>
				<p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
				<button className="like" onClick={() => props.onToggleLike(props.id)}>
					{props.liked ? '❤️' : '🤍'}
				</button>
			</section>
		</div>
	);
};

ChatEntry.propTypes = {
	id: PropTypes.number.isRequired,
	sender: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	timeStamp: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	onToggleLike: PropTypes.func.isRequired
};


export default ChatEntry;