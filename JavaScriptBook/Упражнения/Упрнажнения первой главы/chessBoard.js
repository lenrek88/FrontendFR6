let size = 14;
let chess = "";
let boolean = false;
for (let i = 1; i <= size * size; i++) {
  if ((i + boolean) % 2 != 0) {
    chess = chess + " ";
  } else if ((i + boolean) % 2 == 0) {
    chess = chess + "#";
  }
  if (i % size == 0) {
    chess = chess + "\n";
    boolean = !boolean;
  }
}

console.log(chess);
