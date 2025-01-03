require 'test/unit'

def sort(arr)
  for i in 0..arr.length-1
    for j in 0..arr.length-2
      if arr[j] > arr[j+1]
        arr[j], arr[j+1] = arr[j+1], arr[j]
      end
    end
  end
end

arr = [3, 2, 1]
sort(arr)
puts arr

class TestBubbleSort < Test::Unit::TestCase
  def test_sort
    arr = [3, 2, 1]
    sort(arr)
    assert_equal([1, 2, 3], arr)
  end
end