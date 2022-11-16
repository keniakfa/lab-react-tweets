import ProfileImage from"./ProfileImage";
import User from "./User"
import Timestamp from "./Timestamp";
import Message from "./Message"
import Action from "./Actions"

function Tweet(props) {
  return (
    <div className="tweet">
      
    
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />


      <div className="actions">
      <i class="far fa-comment"></i>
      <i class="fas fa-retweet"></i>
      <i class="far fa-heart"></i>
      <i class="fas fa-share"></i>
    </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
