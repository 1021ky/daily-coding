def sample1
    a = {a: :foo, b: :bar, c: :yoo}
    b = {:a => :foo, :b => :bar, :c => :yoo}
    # 表記が違うものなので同じ
    p a == b
    p("表記が違うだけで同じものなので、これは等価. a==b: #{a==b}")
    p "キーがシンボルの場合、値の参照は a[:a] #{a[:a]}"
    p "キーがシンボルの場合、参照は a['a']ではできない。キーが違うから #{a['a']}"
end

def sample2
    # a = {'a': :foo, 'b': :bar, 'c': :yoo}
    a = {'a' => :foo, 'b' => :bar, 'c' => :yoo}
    b = {:a => :foo, :b => :bar, :c => :yoo}
    #
    p("シンボルは文字列と同じように見えるとはいえ、中身は違うので、これは等価ではない. a==b: #{a==b}")
end

def sample3
    a = {:'a' => :foo, :'b' => :bar, :'c' => :yoo}
    b = {'a': :foo, 'b': :bar, 'c': :yoo}
    p(":'a' == :aは同じなので等価になる(:\"a\"も同じ). a==b: #{a==b}")
end

if __FILE__ == $0
    sample1
    sample2
    sample3
end