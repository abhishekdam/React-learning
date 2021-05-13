import Image from './Image';

function Avatar(props) {
    return (
      <Image
        src={props.user.avatarUrl}
        alt={props.user.name}
      ></Image>
    );
  }

  export default Avatar;