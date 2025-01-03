# CLIで花火を描こうとするとどんなコードになるのか知りたくて
# copilotに出力させたものを読んだときのメモを入れただけのもの
def draw_firework
    # 初期座標
  center_x = 40
  center_y = 12
  radius = 10

  # 楕円を描く
  (0..360).step(15) do |angle|
    radian = angle * Math::PI / 180
    x = center_x + (radius * Math.cos(radian)).round
    y = center_y + (radius * Math.sin(radian)).round

    system("clear")
    (0..24).each do |i|
      (0..80).each do |j|
        if i == y && j == x
          print "*"
        else
          print " "
        end
      end
      puts
    end
    sleep(0.1)
  end
end

draw_firework