
def fizzbuzz n
    p case
    when n % 15 == 0
        'fizzbuzz'
    when n % 5 == 0
        'buzz'
    when n % 3 == 0
        'fizz'
    else
        n.to_s
    end
end

def run
    (1..30).map { |n| fizzbuzz n }
end

if __FILE__ == $0
    run
end