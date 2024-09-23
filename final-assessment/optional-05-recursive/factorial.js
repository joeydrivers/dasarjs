function factorial(n) {
    // Basis: Jika n <= 1, kembalikan 1
    if (n <= 1) {
      return 1;
    }
    // Rekurens: n * faktorial dari (n-1)
    return n * factorial(n - 1);
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  