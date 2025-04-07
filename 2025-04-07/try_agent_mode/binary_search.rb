# frozen_string_literal: true

# バイナリサーチ（2分探索）を実装したメソッド。
#
# 配列がソートされていることを前提とし、指定されたターゲット値を効率的に検索します。
#
# @param [Array<Integer>] array ソートされた整数の配列。
# @param [Integer] target 検索したい値。
# @return [Integer, nil] ターゲット値が見つかった場合はそのインデックス、見つからない場合は nil を返します。
def binary_search(array, target)
  left = 0
  right = array.length - 1

  while left <= right
    mid = (left + right) / 2
    if array[mid] == target
      return mid
    elsif array[mid] < target
      left = mid + 1
    else
      right = mid - 1
    end
  end

  nil # ターゲットが見つからない場合は nil を返す。
end