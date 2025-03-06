require 'get_process_mem'


# メモリ情報を取得する
#
def get_memory
  memory = GetProcessMem.new.kb
  used_memory_kb = memory.inspect
  puts "Memory: #{used_memory_kb} KB"
  memory = GetProcessMem.new.mb
  used_memory_kb = memory.inspect
  puts "Memory: #{used_memory_kb} MB"
end

def run
  get_memory
end

if __FILE__ == $0
  run
end