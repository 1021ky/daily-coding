lines = File.readlines("wc.rb")
p lines
words_count = lines.map{|line| line.size}.sum
p "rows count:#{lines.size}, words count:#{words_count}"
