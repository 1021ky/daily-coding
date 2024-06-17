<?php
// bubble sort
$data = [3, 2, 4,1,2,3,19,-4];

echo "original: ";
for ($i=0; $i < count($data); $i++) {
    echo "$data[$i] ";
}
echo "\n";

for ($i=0;$i<count($data)-1;$i++){
    for($j=$i+1;$j<count($data);$j++) {
        if ($data[$i] > $data[$j]) {
            $tmp = $data[$j];
            $data[$j] = $data[$i];
            $data[$i] = $tmp;
        }
    }
}

echo "sorted: ";
for ($i=0; $i < count($data); $i++) {
    echo "$data[$i] ";
}
echo "\n";

?>