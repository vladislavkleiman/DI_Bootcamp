const number = 6



for (let i = 0; i < number; i++){
    const numberStars = i + 1
    let lineStars = ""
    for (let j = 0; j < numberStars; j++){
        lineStars = lineStars + " * "
    }
    console.log(lineStars);
}