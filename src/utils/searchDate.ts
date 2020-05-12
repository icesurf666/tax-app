export const searchDate = (arr: IInfo[], date: string) => {
 return arr.filter((item) => item.dateOfStart === date)
}