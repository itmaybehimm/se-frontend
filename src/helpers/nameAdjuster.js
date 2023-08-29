export const nameAdjuster = (fullName) => {
    let trimmedFullName = ""

    if (fullName === null) {
        return "admin"
    }
    if (fullName.length > 17) {
        trimmedFullName = fullName.substring(0, 14) + "..."
    } else {
        trimmedFullName = fullName
    }

    return trimmedFullName
}
