<?php
// PHP の 文字列 は、 int や float と解釈できる場合は 数値と見なされる例
$foo1 = "123";
$type = gettype($foo1);
echo "foo1 \"123\" $type\n";
$foo2 = $foo1 + 222;
$type = gettype($foo2);
echo "foo2 \"123\" + 222 $type\n";

$yo =  "a1";
$foo3 = "$yo$foo1";
$type = gettype($foo3);
echo "foo3 \"a1\"+\"123\" $type\n";
?>