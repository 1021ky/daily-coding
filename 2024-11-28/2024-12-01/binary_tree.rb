#
# ソート対象のデータをランダムに生成する
#
# @return [[Integer]] ソート対象
#
def generate_data(n = 30)
    # assert n > 0
    (1..n).to_a.sample(n)
end

#
# 二分木
#
class BinaryTree
    attr_accessor :value, :left, :right

    def initialize value
        @value = value
        left=nil
        right=nil
    end

    def add(val)
        if val < @value
            unless @left
                @left = BinaryTree.new(val)
                return
            else
                @left.add(val)
                return
            end
        else
            unless @right
                @right = BinaryTree.new(val)
                return
            else
                @right.add(val)
                return
            end
        end
    end
end

def generate_binary_tree
    data = generate_data
    tree = BinaryTree.new(data[0])
    data[1..30].each do |d|
        tree.add(d)
    end
    tree
end

if __FILE__ == $0
    p generate_binary_tree
end