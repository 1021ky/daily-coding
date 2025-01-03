def sort(targets)
  targets.size.times do |i|
    for j in (i+1)...targets.size
      if targets[i] > targets[j]
        targets[j], targets[i] = targets[i], targets[j]
      end
    end
  end
  targets
end

def run
  targets = [1,3,2,5,-3,4]
  p sort(targets)
end

if __FILE__ == $0
  run
end