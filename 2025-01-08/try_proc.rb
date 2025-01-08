# frozen_string_literal: true

def greet_with_proc(block)
  # call以外でも呼べる
  p block.yield(123)
  p block.call(234)
end

def judge_with_proc(age)
  # procはcase whenでも使える
  adult = proc { |n| n >= 18 }
  child = proc { |n| n < 18 }
  case age
  when adult
    p 'he/she is adult'
  when child
    p 'he/she is child'
  end
end

def run
  proc_obj = proc { |num| num * 2 }
  greet_with_proc(proc_obj)

  judge_with_proc(20)
  judge_with_proc(5)
end

run if __FILE__ == $PROGRAM_NAME
