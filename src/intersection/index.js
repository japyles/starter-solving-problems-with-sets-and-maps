function intersection(a, b) {
    if (b.length === 0) return [];

    let sortA = a.sort();
    let sortB = b.sort();

    const every = sortA.every((val, index) => val === sortB[index]);
    if (every) {
        return a
    }

    let m = new Map();
    let s = new Set();

    const addAToMap = a.forEach((item, index) => {
        m.set(index, item)
      })
  
      const bInMap = b.map((item) => {
        for (let value of m.values()) {
          if (value === item) {
            s.add(item)
          }
        }
      })

    return [...s]
}

module.exports = intersection;
