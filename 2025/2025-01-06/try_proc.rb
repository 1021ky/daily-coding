# Procオブジェクトをためす

def greet(&block)
  puts block.class # Procオブジェクト。blockとして渡されるのはProcオブジェクト
  puts block.call('hello!!')
end

def greet_with_proc(block)
  puts block.class # Procオブジェクト。
  puts block.call('hello!!')
end

def main
  greet do |text|
    text * 2
  end
  # 以下は渡し方をかえただけで同じ
  p = Proc.new { |text| text * 2}
  greet(&p)
  # greet(p) # これはwrong number of argumentsとなる。ブロックを渡すのではなく、普通の引数扱いになるから

  # Procオブジェクトを引数として渡す
  greet_with_proc(p) # &不要。引数として渡したいから
  p2 = proc { |text| text * 3} # 小文字でnewなしでもProcオブジェクト
  greet_with_proc(p2)
end

if __FILE__ == $0
  main
end