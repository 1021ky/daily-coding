def fizzbuzz(value)
    case
    when value%15==0
        'fizzbuzz'
    when value%3==0
        'fizz'
    when value%5==0
        'buzz'
    else
        value.to_s
    end
end
