function fibonacci(n) {
    // Basis: Jika n adalah 0 atau 1, kembalikan n
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    }
    
    // Rekurens: fibonacci dari (n-1) kemudian tambahkan elemen ke-n
    const fibSequence = fibonacci(n - 1);
    const nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextValue);
    
    return fibSequence;
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  