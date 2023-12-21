class ForLoop {
  public static void main(String[] args) {
    for (int i = 0; i < 10; i++) {
        System.out.println(String.valueOf(i) + "hello, world");
    }
    int i = 0;
    for (;;) {
      System.out.println(String.valueOf(i) + "hello, world");
      i++;
      if (i >= 10)
       break;
    }
  }
}