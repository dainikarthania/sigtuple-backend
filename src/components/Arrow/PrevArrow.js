const PrevArrow = (props) => {
    const {
        className,
        style,
        stylePrev = null,
        clientPrev = null,
        blogPrev = null,
        reviewPrev =null,
        onClick
    } = props;
    let prevStyle = stylePrev || clientPrev || blogPrev || reviewPrev || {
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
                    ... prevStyle
                }
            }
            onClick={onClick}/>
    );
}

export default PrevArrow;