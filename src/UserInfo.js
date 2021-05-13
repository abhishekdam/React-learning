import Avatar from "./Avatar";

function UserInfo(props){
    return(
        <div className="UserInfo">
          <Avatar user={props}></Avatar>
          <div className="UserInfo-name">
            {props.name}
          </div>
        </div>
    )
}

export default UserInfo;