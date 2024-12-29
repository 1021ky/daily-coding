require 'minitest/autoload'

describe 'insert_sort' do
  shared_example '実行すると期待値と一致する' do |param|
  end
  describe '正常系' do
    shared_context '配列に順序がばらばらに' do
    end

    [
      {ctx: '', param: '', expected: ''}
    ].each do |p|
      context 'ctx' do
        include_context p['ctx']
        include_example ''
      end
    end

  end
end