
const NextArrow = (props) => {
    const {
        className,
        style,
        styleNext = null,
        clientNext = null,
        blogNext= null,
        reviewNext=null,
        onClick
    } = props;
    let nextStyle = styleNext || clientNext || blogNext || reviewNext || {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "#000000",
        position: "absolute",
        width: "66px",
        height: "66px",
        left: 'calc(50% -"66px"/2 + "809px")',
        top: 'calc(50% - "66px"/2 + "2556.5px")',
        opacity: "0.5",
        border: "3px solid #707070",
        boxSizing: "border-box",
        borderRadius: "41px"

    }
    return (
        <div className={className}
            style={
                {
                    ...style,
                    ... nextStyle,
                    color: "black"

                }
            }
            onClick={onClick}/>
    );
}

export default NextArrow;