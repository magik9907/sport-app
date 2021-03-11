function Merge<T>(array: T[], comparer: (A: T, B: T) => boolean): T[] {
  if (array.length <= 1) return array
  let dividerPosition: number = Math.floor(array.length / 2)
  let arrayA: T[], arrayB: T[]
  arrayA = Merge(array.slice(dividerPosition), comparer)
  arrayB = Merge(array.slice(0, dividerPosition), comparer)
  return Sort<T>(arrayA, arrayB, comparer)
}

function Sort<T>(
  arrayA: T[],
  arrayB: T[],
  comparer: (A: T, B: T) => boolean
): T[] {
  let compareStatus: Boolean
  let startA = 0
  let lengthA = arrayA.length
  let startB = 0
  let lengthB = arrayB.length
  let newArray: T[] = []
  while (startA < lengthA || startB < lengthB) {
    compareStatus = comparer(arrayA[startA], arrayB[startB])
    if (compareStatus) {
      newArray.push(arrayA[startA])
      startA++
    } else {
      newArray.push(arrayB[startB])
      startB++
    }
  }
  return newArray
}

export { Merge, Sort }
