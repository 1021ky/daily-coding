# 並列処理したい分だけ、ractorインスタンスを作る
ractors = 100.times.map do |i|
  Ractor.new(i) do |i|
    r= rand
    p "id:#{i}" # 順番
    p r
    sleep r
    Ractor.yield r # 値を返す
  end
end

ractors.each do |ractor|
  ractor.take
end