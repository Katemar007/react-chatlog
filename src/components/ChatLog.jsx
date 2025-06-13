// import entries from './data/messages.json';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onToggleLike }) => {
	return (
		<div id="ChatLog">
			{entries.map((entry) => (
				<ChatEntry key={entry.id} {...entry} onToggleLike={onToggleLike} />
			))}
		</div>
);
};
ChatLog.propTypes = {
	entries: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			sender: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			timeStamp: PropTypes.string.isRequired,
			liked: PropTypes.bool.isRequired
		})
	).isRequired,
	onToggleLike: PropTypes.func.isRequired,
};

export default ChatLog;
