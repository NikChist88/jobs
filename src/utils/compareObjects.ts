export const compareObjects = (obj1: any, obj2: any): boolean => {
  // Создаем новый объект, который содержит ключи обоих объектов
  const combinedKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])

  // Проверяем, что все ключи из obj1 есть в obj2 и имеют такие же значения
  for (const key of combinedKeys) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    } else if (obj1.hasOwnProperty(key)) {
      // Ключ есть в obj1, но отсутствует в obj2
      return false
    } else if (obj2.hasOwnProperty(key)) {
      // Ключ есть в obj2, но отсутствует в obj1
      return false
    }
  }

  return true
}
