<?php

function echo_array($prefix,$data) : void {
    echo "$prefix ";
    foreach ($data as $d) {
        echo "$d ";
    }
    echo "\n";
}

function sort_array($data): array {
    for ($i=0;$i<count($data)-1;$i++){
        for ($j=$i+1;$j<count($data);$j++){
            if ($data[$i] > $data[$j]) {
                $tmp = $data[$i];
                $data[$i] = $data[$j];
                $data[$j] = $tmp;
            }
        }
    }
    return $data;
}

$data = [3,1,2,-1,-3,8,4];
echo_array("original:", $data);

$sorted_data = sort_array($data);

echo_array("sorted:", $sorted_data);


?>
