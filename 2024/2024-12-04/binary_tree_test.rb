require 'minitest/autorun'
require_relative 'binary_tree'

class BinaryTreeTest < Minitest::Test
    def setup
        @data = generate_data
        @tree = BinaryTree.new(@data[0])
        @data[1..-1].each { |val| @tree.add(val) }
    end

    def test_generate_data
        data = generate_data
        assert_equal 30, data.size
        assert data.all? { |val| val.is_a?(Integer) }
    end

    def test_add_and_search
        assert @tree.search(@data[0])
        assert @tree.search(@data[1])
        refute @tree.search(1000)
    end

    def test_to_ascii
        ascii_representation = @tree.to_ascii
        assert ascii_representation.include?("Root #{@data[0]}")
    end
end