// /util/cartStorage.ts
export const getCart = (userId: string | undefined) => {
  if (!userId || typeof window === "undefined") return []
  const storedCart = localStorage.getItem(`cart_${userId}`)
  return storedCart ? JSON.parse(storedCart) : []
}

export const saveCart = (userId: string | undefined, cart: any[]) => {
  if (!userId || typeof window === "undefined") return
  localStorage.setItem(`cart_${userId}`, JSON.stringify(cart))
}

export const clearCart = (userId: string | undefined) => {
  if (!userId || typeof window === "undefined") return
  localStorage.removeItem(`cart_${userId}`)
}
