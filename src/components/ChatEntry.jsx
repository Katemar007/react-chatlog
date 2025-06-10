import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  return (
    <div className="chat-entry local" key={props.id}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like">{props.liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;

// const index = 0; // This should be replaced with the actual index of the message you want to display

// const ChatEntry = (props) => {
//   const chatComponents = props.chatData.map((message, index) => {
//     return (
//       <div className="chat-entry local" key={index}>
//         <h2 className="entry-name">{message.name}</h2>
//         <section className="entry-bubble">
//           <p>{message.body}</p>
//           <p className="entry-time">{formatDistanceToNow(new Date(message.timeStamp), { addSuffix: true })}</p>
//           <button className="like">{message.liked ? '❤️' : '🤍'}</button>
//         </section>
//       </div>
//     );
//   });
//   return <>{chatComponents}</>;
// };

//   const SenderBody = messages[index].body;
//   const SenderTimeStamp = messages[index].timeStamp;
//   const SenderLiked = messages[index].liked;
//   // possibly add later about timeAgo
//   // const timeAgo = formatDistanceToNow(new Date(timeStamp), {
//   //   addSuffix: true,
//   // });
//   return (
//     <div className="chat-entry local">
//       <h2 className="entry-name">{SenderName}</h2>
//       <section className="entry-bubble">
//         <p>{SenderBody}</p>
//         <p className="entry-time">{formatDistanceToNow(new Date(SenderTimeStamp), { addSuffix: true })}</p>
//         <button className="like">{SenderLiked ? '❤️' : '🤍'}</button>
//       </section>
//     </div>
//   );
// };




// const ChatEntry = ({ }) => {
//   const SenderName = messages[index].name;
//   const SenderBody = messages[index].body;
//   const SenderTimeStamp = messages[index].timeStamp;
//   const SenderLiked = messages[index].liked;
//   // possibly add later about timeAgo
//   // const timeAgo = formatDistanceToNow(new Date(timeStamp), {
//   //   addSuffix: true,
//   // });
//   return (
//     <div className="chat-entry local">
//       <h2 className="entry-name">{SenderName}</h2>
//       <section className="entry-bubble">
//         <p>{SenderBody}</p>
//         <p className="entry-time">{formatDistanceToNow(new Date(SenderTimeStamp), { addSuffix: true })}</p>
//         <button className="like">{SenderLiked ? '❤️' : '🤍'}</button>
//       </section>
//     </div>
//   );
// };


