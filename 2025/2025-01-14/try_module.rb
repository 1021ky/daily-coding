module ColorString
  def to_red_s
    "\e[31m#{self.to_s}\e[0m"
  end
end

def run
  String.include ColorString
  puts "hoge".to_red_s
end

if __FILE__ == $0
  run
end