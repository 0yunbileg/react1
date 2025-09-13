export const getCart = () => {
  if (typeof window === "undefined") return []
  const storedCart = localStorage.getItem("cart")
  return storedCart ? JSON.parse(storedCart) : []
}

export const saveCart = (cart: any[]) => {
  if (typeof window === "undefined") return
  localStorage.setItem("cart", JSON.stringify(cart))
}
