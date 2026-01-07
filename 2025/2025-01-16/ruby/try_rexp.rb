def contains_engineer?(sentence)
  res = /.*engineer[^\s,.]*/.match(sentence)
  !res.nil?
end

def run
  test_data1 = "I am a software engineer."
  test_data2 = "I am an infrastructure engineer."
  test_data3 = "I am a software engine."
  p "test_data1 contains engineer?: #{contains_engineer? test_data1}"
  p "test_data2 contains engineer?: #{contains_engineer? test_data2}"
  p "test_data3 contains engineer?: #{contains_engineer? test_data3}"
end

if __FILE__ == #0
  run
end