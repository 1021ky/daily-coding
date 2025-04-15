
#
# 指定された配列の各要素を2倍にする
#
# @param [Array] target 2倍にしたい配列
#
# @return [Array] 結果
#
def multiple_elements(target)
  target.map do |t|
    t * 2
  end
end

def run
  multiple_elements [1,2,3,4,5]
end

if $PROGRAM == $?
  result = run
  p result
end