interface Category {
  id: number
  name: string
  url: string
  order: number
  prev?: Category
  next?: Category
  videos?: Video[]
}
