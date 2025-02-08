# frozen_string_literal: true

class EquilateralTriangle
  def initialize(side_length)
    @side_length = side_length
  end

  def area
    @side_length**2 * Math.sqrt(3) / 4
  end
end

class Square
  def initialize(side_length)
    @side_length = side_length
  end

  def area
    @side_length**2
  end
end

class Rectangle
  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    @width * @height
  end
end

#
# 引数で指定された形状名と長さから、適切なインスタンスを作る
#
# @param [String] name 形状名
# @param [Array<Numeric>] dimensions 任意の数の寸法（サイズ）を指定します。
# @return [Object] 指定された名前と寸法から生成された図形オブジェクトを返します。
#
def make_shape(name, *dimensions)
  case [name, dimensions]
  in ['EquilateralTriangle', [s]]
    EquilateralTriangle.new(s)
  in ['Square', [s]]
    Square.new(s)
  in ['Rectangle', [w, h]]
    Rectangle.new(w, h)
  else
    raise ArgumentError, 'Unknown shape or wrong dimensions'
  end
end

def run
  shapes = [
    make_shape('EquilateralTriangle', 5),
    make_shape('Square', 3),
    make_shape('Rectangle', 4, 6)
  ]

  shapes.each { |shape| puts shape.area }
end

run if __FILE__ == $PROGRAM_NAME
