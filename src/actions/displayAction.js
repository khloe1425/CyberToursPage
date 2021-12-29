export const toggleShow = (des) => {
    if (des.length < 100) {
        return (
            <p>
                {des.substring(0, des.length) + "..."}
                <button>Show more</button>
            </p>
        )
    } else {
        return (
            <p>
                {des}
                <button>Show less</button>
            </p>
        )
    }
}