# frozen_string_literal: true

def greet_with_block(&block)
  puts block.class
  p block.call 'foo'
end

def greet_with_proc(p)
  puts p.class
  p p.call 'foo'
end

def greet_with_lambda(l)
  puts l.class
  p l.call 'foo'
end

def run
  # procの渡し方は、受け取り方は様々
  b = proc { |text|
    text * 2
  }
  greet_with_block(&b)
  greet_with_block do |text|
    text * 3
  end
  proc_obj = proc { |text| text * 4 }
  greet_with_proc(proc_obj)
  proc_obj2 = proc { |text, hoge| text * 4 } # not error
  greet_with_proc(proc_obj)

  # lambdaもProcオブジェクト ただし、引数チェックが厳密
  l_exp = ->(a) { a * 5 }
  greet_with_lambda l_exp

  l_exp2 = ->(a, b) { a * 6 }
  greet_with_lambda l_exp2 # error
end

run if __FILE__ == $PROGRAM_NAME
