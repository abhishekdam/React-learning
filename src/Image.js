function Image (props){
    return(
        <img className="Avatar"
        src={props.src}
        alt={props.alt}
      />
    );
}

export default Image;