export const parseAge = (age: number) => {
    //some other candidate thinks that 'age' means creation date, so i'm
    //fixing it
    if (age > 1000) {
        return 2020 - age
    } else {
        return age
    }
}
