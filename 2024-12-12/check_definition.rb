def check_definition(val, b)
    if b.local_variable_get(val)
        p "#{val}は定義されています"
    else
        p "#{val}は定義されていません"
    end
end

def check_begin_definition
    begin
        check_definition(:foo, binding) # bindingを渡さないと、このスコープでの情報は呼び出しているメソッドではわからない
        foo = 123
        check_definition(:foo, binding)
    rescue NameError => e
        p 'error'
        p e.message
    end
    check_definition(:foo, binding)
end

def check_without_begin_definition
    check_definition(:foo, binding) # bindingを渡さないと、このスコープでの情報は呼び出しているメソッドではわからない
    foo = 123
    check_definition(:foo, binding)
rescue NameError => e
    p 'error'
    p e.message
end


def run
    check_without_begin_definition
end

if __FILE__ == $0
    run
end