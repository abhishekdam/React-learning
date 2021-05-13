import Avatar from './Avatar';
import UserInfo from './UserInfo';

function Comment(props) {
    const userProps = {
        avatarUrl: 'xyz.com/dsds/dsd',
        name: props.name
    }
    return (
      <div className="Comment">
        <UserInfo userDetails={userProps}></UserInfo>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

export default Comment;