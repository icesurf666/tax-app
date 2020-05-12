export function getName (id: string, arr: IOption[]) {
  let name: string = ''
  arr.filter((item) => { 
    if (item.id === id) {
      name = item.name
    }
  })
  return name
} 