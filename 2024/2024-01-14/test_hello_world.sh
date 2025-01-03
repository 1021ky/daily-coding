#!/bin/sh

# テスト対象を読み込む
. ./hello_world.sh

test_hello_world(){
    actual=$(sh ./hello_world.sh)
    expected="hello world"
    if [ "$expected" = "$actual" ]; then
        echo "SUCCESS"
    else
        echo "FAIL"
    fi
}

test_hello_world