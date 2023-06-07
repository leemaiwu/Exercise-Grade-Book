const getGrade = (s1, s2, s3) => {
    const average = Math.floor((s1 + s2 + s3) / 3)
    if (average >= 90) {
        return 'A'
    } else if (average >= 80) {
        return 'B'
    } else if (average >= 70) {
        return 'C'
    } else if (average >= 60) {
        return 'D'
    }
    return 'F'
}

console.log(getGrade(95,90,93)) // A
console.log(getGrade(70,70,100)) // B
console.log(getGrade(44,55,52)) // F