def sort(array)
  # ソート済み要素を格納する配列
  sorted = []

  array.each do |value|
    # 挿入位置を探す
    insert_index = 0
    while insert_index < sorted.size && sorted[insert_index] < value
      insert_index += 1
    end
    # 配列 sorted に value を挿入
    sorted.insert(insert_index, value)
  end

  sorted
end

def run
  data = [5, 2, 4, 6, 1, 3]
  sorted_data = insertion_sort(data)
  p sorted_data  # => [1, 2, 3, 4, 5, 6]
end

if __FILE__ == $0
  run
end