const isInvalid =  (start, size) => {
    start = parseInt(start);
    size = parseInt(size);

    const areNull = !start || !size;
    const areNegative =  start < 0 || size < 0;

    return areNull || areNegative;
};

const Pagination = (start=null, size=null) => {
    
    if (isInvalid(start, size)) {
        start = 1
        size = 6
    } 

    return {
        start: start,
        size: size,
        url: `?start=${start}&size=${size}`
    };
}

export default Pagination;