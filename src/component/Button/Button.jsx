

const Button = (props) => {
  const {children} = props;
    return (
        <div>
            <button className="btn btn-primary">{children}</button>     
        </div>
    );
};

export default Button;