#
# 実験用たまにnilを返す
#
# @return [<Type>] <description>
#
def get_rand
    val = rand(100)
    return val if val % 2 == 0
    return nil
end

def condition_and_assignment
    # 条件分岐のときに値を取得できたら代入することを以下のようにかける
    if v = get_rand # 代入された後、値がnilだった場合 if nilとなってfalseで評価
        p 'get rand!!'
    else
        p 'nil..'
    end
end



def run
    condition_and_assignment
end

if __FILE__ == $0
    run
end