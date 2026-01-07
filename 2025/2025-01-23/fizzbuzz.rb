#
# FizzBuzzのアルゴリズムで文字列を返す
#
# @param [Integer] 数字
# @return [String] 数字かfizz, buzz, fizzbuzzの文字列
#
def fizzbuzz(n)
  case
  when n % 15 == 0
    'fizzbuzz'
  when n % 3 == 0
    'fizz'
  when n % 5 == 0
    'buzz'
  else
    n.to_s
  end
end

def run
  1.upto(100) do |n|
    p fizzbuzz n
  end
end

run if __FILE__ == $0
