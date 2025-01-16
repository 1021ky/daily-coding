#!/bin/zsh
# ログインシェルでどの処理に時間がかかっているか調べるときに入れる処理
zmodload zsh/zprof

function call_sleep {
    sleep 3
}

function call_echo () {
    local arg=$1
    echo "Argument received: $arg"
}

# ...既存処理
call_echo 'first process.'

call_sleep

call_echo 'second process.'

zprof
