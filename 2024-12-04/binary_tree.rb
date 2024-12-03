def generate_data(n=30)
    (1..n).to_a.sample(n)
end

class BinaryTree
    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end

    def add(val)
        if @value < val
            if @right
                @right.add(val)
            else
                @right = BinaryTree.new(val)
            end
        else
            if @left
                @left.add(val)
            else
                @left = BinaryTree.new(val)
            end
        end
    end

    def to_ascii(level=0, prefix="")
        ret = "#{prefix}#{level == 0 ? 'Root' : '├─'} #{@value}\n"
        if @left
            ret += @left.to_ascii(level + 1, "#{prefix}#{level == 0 ? '' : '│   '}")
        end
        if @right
            ret += @right.to_ascii(level + 1, "#{prefix}#{level == 0 ? '' : '│   '}")
        end
        ret
    end

    def search(value)
        return true if @value == value
        if @value > value
            return false if @left.nil?
            @left.search(value)
        else
            return false if @right.nil?
            @right.search(value)
        end
    end
end

def run
    data = generate_data
    root = BinaryTree.new(data[0])
    data[1..30].each do |d|
        root.add(d)
    end
    puts root.to_ascii
    p root.search(3)
    p root.search(-1)

end

if __FILE__ == $0
    run
end